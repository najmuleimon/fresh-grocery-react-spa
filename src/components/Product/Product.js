import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {name, price, img} = product;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;