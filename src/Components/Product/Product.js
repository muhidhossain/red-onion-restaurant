import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { key, image, name, shortDescription, price } = props.food;

    return (
        <div className="col-md-4 container">
                <Link to={"/product/" + key}>
                    <div className="card food">
                        <div className="food-img">
                        <img src={image} alt="" />
                        </div>
                        <p>{name}</p>
                        <p><small>{shortDescription}</small></p>
                        <h4>$ {price}</h4>
                    </div>
                </Link>
        </div>
    );
};

export default Product;