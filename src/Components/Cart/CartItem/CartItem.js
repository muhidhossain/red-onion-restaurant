import React from 'react';
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
    const { image, name, price, quantity, key } = props.food;

    return (
        <div className="container cartItem">
            <div className="row food-review">
                <div className="col-md-3 foodImage">
                    <img src={image} alt="" />
                </div>
                <div className="col-md-9 cartText">
                    <div className="d-flex justify-content-between">
                        <Link style={{textDecoration:'none'}} to={"/product/" + key}>
                            <div>
                                <h6>{name}</h6>
                                <p>
                                    Quantity: {quantity}
                                    <br />
                                    <small>Price per unit: ${price}</small>
                                </p>
                            </div>
                        </Link>
                        <div>
                            <button onClick={() => props.removeFoodItem(key)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;