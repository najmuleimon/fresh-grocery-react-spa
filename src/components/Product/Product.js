import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleCart}) => {
    const {name, price, img} = product;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleCart(product)}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;