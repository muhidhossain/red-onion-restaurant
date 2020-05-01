import React from 'react';
import './OrderSummary.css'
import Auth from '../Login/useAuth';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Popup from "reactjs-popup";

const OrderSummary = (props) => {
    const cart = props.cart;
    const auth = Auth();

    let quantity = 0;
    for (let i = 0; i < cart.length; i++) {
        const foodItem = cart[i];
        quantity = quantity + foodItem.quantity
    }

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const foodItem = cart[i];
        total = total + foodItem.price * foodItem.quantity
    }

    let shipping = 0;
    if (total > 0) {
        shipping = 5.99;
    }

    const grandTotal = (total + shipping);

    return (
        <div>
            <div className="orderSummary">
                <h5 style={{ fontWeight: '700' }}>Order Summary</h5>
                <p>Item Ordered: {cart.length}</p>
                <p>Total Quantity: {quantity}</p>
                <p>Shipping Cost: ${shipping}</p>
                <p style={{ fontWeight: '600' }}>Total Price: ${grandTotal.toFixed(2)}</p>
                <div style={{display: props.shipmentOrCart ? 'block' : 'none'}}>
                    {
                        auth.user ?
                            <Link to="/shipment">
                                <button style={{ fontWeight: '600' }}>Proceed Checkout</button>
                            </Link> :
                            <Popup trigger={<button style={{ fontWeight: '600' }}>Login to Proceed</button>} contentStyle={{ width: '320px', marginTop:'20px' }} position='center center'>
                                <Login></Login>
                            </Popup>
                    }
                </div>

            </div>
        </div>
    );
};

export default OrderSummary;