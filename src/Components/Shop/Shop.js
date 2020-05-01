import React, { useState, useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = (props) => {
    const [selectedType, setSelectedType] = useState("lunch");
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch('https://aqueous-spire-21006.herokuapp.com/foodItems')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(err => 
                console.log(err))
    }, [product.length])

    const selectedFoods = product.filter(food => food.type === selectedType)

    return (
        <div className="shop-container">
            <div className="meal-time">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedType("breakfast")} className="nav-item">
                            <span to="/breakfast" className={selectedType === "breakfast" ? "active" : "deactivate"}>Breakfast</span>
                        </li>
                        <li onClick={() => setSelectedType("lunch")} className="nav-item">
                            <span to="/lunch" className={selectedType === "lunch" ? "active" : "deactivate"}>Lunch</span>
                        </li>
                        <li onClick={() => setSelectedType("dinner")} className="nav-item">
                            <span to="/dinner" className={selectedType === "dinner" ? "active" : "deactivate"}>Dinner</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <div className="row md-5">
                    {
                        selectedFoods.map(food => <Product
                            key={food.key}
                            food={food}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;