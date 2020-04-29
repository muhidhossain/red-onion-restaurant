import React from 'react';
import './OrderSummary.css'

const OrderSummary = (props) => {
    const cart = props.cart;

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
    if(total > 0){
        shipping = 5.99;
    }

    const grandTotal = (total + shipping);

    return (
        <div>
            <div className="orderSummary" style={{ marginTop: '80px' }}>
                <h5 style={{fontWeight: '700'}}>Order Summary</h5>
                <p>Item Ordered: {cart.length}</p>
                <p>Total Quantity: {quantity}</p>
                <p>Shipping Cost: ${shipping}</p>
                <p style={{fontWeight: '600'}}>Total Price: ${grandTotal.toFixed(2)}</p>
                <button>Place Order</button>
            </div>
        </div>
    );
};

export default OrderSummary;