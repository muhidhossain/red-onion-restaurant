import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../LocslStorageManager/LocalStorageManager';
import CartItem from './CartItem/CartItem';
import OrderSummary from '../OrderSummary/OrderSummary';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const removeFoodItem = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
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

    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '150px' }}>
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(food => <CartItem
                            key={food.key}
                            removeFoodItem={removeFoodItem}
                            food={food}
                        ></CartItem>)
                    }
                    {
                        !cart.length && <h3 style={{ textAlign: 'center'}}>Your cart is empty. <a style={{textDecoration:'none'}} href="/">Keep Shopping.</a></h3>
                    }
                </div>
                <div className="col-md-4">
                    {
                        cart.length ? 
                        <OrderSummary shipmentOrCart={true} cart={cart}></OrderSummary>
                        : <h5 style={{textAlign: 'center', marginTop: '13px', marginBottom: '350px'}}>healthy food, healthy life...</h5>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;