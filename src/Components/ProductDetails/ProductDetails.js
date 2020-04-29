import React, { useState, useEffect } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart, getDatabaseCart } from '../LocslStorageManager/LocalStorageManager';

const ProductDetails = () => {
    const { key } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([])
    const [addedKey, setAddedKey] = useState(null);

    useEffect(() => {
        fetch('https://aqueous-spire-21006.herokuapp.com/foodItems/' + key)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [key])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        if (product && product.length) {
            const previousCart = productKeys.map(existingKey => {
                const food = product.find(pd => pd.key === existingKey);
                food.quantity = savedCart[existingKey];
                return product;
            })
            setCart(previousCart);
        }
    }, [product])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey.key);
        const count = quantity;
        let newCart;
        if (sameProduct) {
            sameProduct.quantity = count;
        }
        else {
            newCart = [...cart, product];
        }
        setCart(newCart);
        setAddedKey(product.key)
        addToDatabaseCart(product.key, count);
    }



    return (
        <div className="container food-details" >
            <div className="row">
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
                        product && <h3>${product.price}</h3>
                    }
                    <br />
                    <div style={{ display: 'flex' }}>

                        <button onClick={() => handleAddProduct(product)} style={{ outline: 'none' }} className="addButton col-md-2">
                            <FontAwesomeIcon icon={faShoppingCart} /> Add</button>

                        <div className="col-md-4">
                            <div className="action d-flex align-items-center number-spinner">
                                <button onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button>
                                <p>{quantity}</p>
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    {
                        addedKey && <p style={{color: 'green'}}>Successfully added to cart.</p>
                    }
                </div>
                <div className="col-md-6">
                    {
                        product && <img src={product.image} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;