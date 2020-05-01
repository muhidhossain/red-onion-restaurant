import React, { useState, useEffect } from 'react';
import './Shipment.css'
import { useForm } from 'react-hook-form';
import Auth from '../Login/useAuth';
import { getDatabaseCart, clearLocalShoppingCart } from '../LocslStorageManager/LocalStorageManager';
import OrderSummary from '../OrderSummary/OrderSummary';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Shipment = () => {
    const auth = Auth();
    const { register, handleSubmit, errors } = useForm();
    const [shipInfo, setShipInfo] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [cart, setCart] = useState([]);

    const stripePromise = loadStripe('pk_test_TojlFDeEro8nYPlsNB8EgAKR00IHsx64lz');

    const onSubmit = data => {
        setShipInfo(data);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('https://aqueous-spire-21006.herokuapp.com/getFoodItemsByKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => {
                const cartProducts = productKeys.map(key => {
                    const product = data.find(pd => pd.key === key);
                    product.quantity = savedCart[key];
                    return product;
                });
                setCart(cartProducts)
            })
    }, []);

    const handlePlaceOrder = (payment) => {
        const savedCart = getDatabaseCart();
        const orderDetails = {
            email: auth.user.email,
            cart: savedCart,
            shipment: shipInfo,
            payment: payment
        };
        fetch('https://aqueous-spire-21006.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(order => {
                setOrderId(order._id);
                clearLocalShoppingCart();
            })
    }

    return (
        <div className='container'>
            <div className="row ship-info">
                <div style={{ marginBottom: '20px' }} className='col-md-8'>
                    <div className="ship-form" style={{ display: shipInfo ? 'none' : 'block' }}>
                        <h4>Edit Delivery Details</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" defaultValue={auth.user && auth.user.name} ref={register({ required: true })} placeholder="Your Name" />
                            {
                                errors.name && <span className="error">Name is required</span>
                            }

                            <input name="email" defaultValue={auth.user && auth.user.email} ref={register({ required: true })} placeholder="Your Email" />
                            {
                                errors.email && <span className="error">Email is required</span>
                            }
                            <input name="AddressLine1" ref={register({ required: true })} placeholder="Address line 1" />
                            {errors.AddressLine1 && <span className="error">Address is required</span>}
                            <input name="AddressLine2" ref={register} placeholder="Address line 2" />
                            <input name="city" ref={register({ required: true })} placeholder="City" />
                            {errors.city && <span className="error">City is required</span>}
                            <input name="country" ref={register({ required: true })} placeholder="Country" />
                            {errors.country && <span className="error">Country is required</span>}
                            <input name="zipCode" ref={register({ required: true })} placeholder="Zip Code" />
                            {errors.zipCode && <span className="error">Zip code is required</span>}

                            <input className="ship-submit" type="submit" value="Save & Continue" />
                        </form>
                    </div>
                    <div style={{ display: shipInfo ? 'block' : 'none', marginTop:'40px' }} className="col-md-6">
                        <h3>Payment Information</h3>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                        </Elements>
                        <br />
                        {
                            orderId && 
                            <div>
                                <h4>Thank you for shopping with us.</h4>
                                <p>Your order id is: {orderId}</p>
                                <a style={{textDecoration:'none'}} href="/trackOrder">Track your order</a>
                            </div>
                        }
                    </div>
                </div>
                <div className='col-md-4' style={{marginBottom:'100px'}}>
                    <p>From <strong>Grand Nawab</strong></p>
                    <p>Arriving in 20-30 minute</p>
                    <OrderSummary shipmentOrCart={false} cart={cart}></OrderSummary>
                </div>
            </div>
        </div>
    );
};

export default Shipment;