import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, image, shortDescription, price, key} = props.product;

    return (
            <div className="col-md-4">
                <Link to={"/product/" + key}>
                    <div className="card food">
                        <img src={image} alt=""/>
                        <p>{name}</p>
                        <p><small>{shortDescription}</small></p>
                        <h4>$ {price}</h4>
                    </div>
                </Link>
            </div>
    );
};

export default Product;