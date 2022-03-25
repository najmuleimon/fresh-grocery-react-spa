import React from 'react';
import './Cartitem.css';

const Cartitem = ({product}) => {
    const {img, name} = product
    return (
        <div className='single-cart'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Cartitem;