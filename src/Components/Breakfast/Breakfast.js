import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import Product from '../Product/Product';

const Breakfast = () => {
    const breakfast = FakeData.slice(0,6);
    const [product] = useState(breakfast);
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