import React, { useState, useEffect } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const { key } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        fetch('https://aqueous-spire-21006.herokuapp.com/foodItems/' + key)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [key])


    return (
        <div className="container food-details" style={{ display: 'flex' }}>
            <div className="col-md-6 details-text">
                {
                    product && <h1>{product.name}</h1>
                }
                <br />
                {
                    product && <p>{product.fullDescription}</p>
                }
                <br />
                {
                    product && <h3>$ {product.price}</h3>
                }
                <br />
                <div style={{ display: 'flex' }}>
                    <button style={{outline:'none'}} className="addButton col-md-2"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    <div className="col-md-4">
                        <div className="action d-flex align-items-center number-spinner">
                            <button onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button>
                            <p>
                                {quantity}
                            </p>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                {
                    product && <img src={product.image} alt="" />
                }
            </div>
        </div>
    );
};

export default ProductDetails;