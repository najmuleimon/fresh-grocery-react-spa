import React from 'react';
import Cartitem from '../Cartitem/Cartitem';
import './Cart.css';

const Cart = ({cart, clearCart, pickItem, randomCart}) => {
    return (
        <div className='cart-details'>
            <h2>Product Cart</h2>
            <div className="cart-list">
                {
                    cart.map(product => <Cartitem key={product.id} product={product}></Cartitem>)
                }
            </div>
            <button className='choose' onClick={pickItem}>choose 1 for me</button>
            <button className='choose-again' onClick={clearCart}>choose again</button>

            <div className="random-item">
                {
                    randomCart.map(product => <Cartitem key={product.id} product={product}></Cartitem>)
                }
            </div>
        </div>
    );
};

export default Cart;