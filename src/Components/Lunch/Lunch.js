import React, { useEffect } from 'react';
import Product from '../Product/Product';
import { useState } from 'react';

const Lunch = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-spire-21006.herokuapp.com/foodItems')
        .then(res => res.json())
        .then(data => {
            setProduct(data.slice(6,12));
        })
    }, [])
    return (
        <div className="container">
           <div className="row">
                {
                    product.map(pd => <Product 
                        key={pd.key}
                        product={pd}></Product>)
                }
           </div>
        </div>
    );
};

export default Lunch;