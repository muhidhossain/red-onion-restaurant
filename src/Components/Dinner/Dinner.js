import React from 'react';
import Product from '../Product/Product';
import FakeData from '../FakeData/FakeData';
import { useState } from 'react';
import './Dinner.css'

const Dinner = () => {
    const breakfast = FakeData.slice(12,18);
    const [product] = useState(breakfast);
    return (
        <div className="container">
           <div className="row">
                {
                    product.map(pd => <Product product={pd}></Product>)
                }
           </div>
        </div>
    );
};

export default Dinner;