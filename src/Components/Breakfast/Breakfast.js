import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

const Breakfast = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-spire-21006.herokuapp.com/foodItems')
        .then(res => res.json())
        .then(data => {
            setProduct(data.slice(0,6));
        })
    }, [])
    return (
        <div className="container">
           <div className="row">
                {
                    product.map(pd => <Product 
                        key={pd.key}
                        product={pd}
                    ></Product>)
                }
           </div>
        </div>
    );
};

export default Breakfast;