import React, { useState, useEffect } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://aqueous-spire-21006.herokuapp.com/foodItems/' + productKey)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [])


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
                <br/>
                <div style={{ display: 'flex' }}>
                    <button className="col-md-3"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    <div className="input-group number-spinner col-md-4">
                            <button id="minusbtn"><FontAwesomeIcon icon={faMinus} /></button>
                            <p id="quantity2" type="text" className="form-control text-center" value="1">1</p>
                            <button id="pludBtn"><FontAwesomeIcon icon={faPlus} /></button>
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