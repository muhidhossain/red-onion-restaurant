import React from 'react';
import Product from '../Product/Product';
import FakeData from '../FakeData/FakeData';
import { useState } from 'react';

const Lunch = () => {
    const breakfast = FakeData.slice(6,12);
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

export default Lunch;