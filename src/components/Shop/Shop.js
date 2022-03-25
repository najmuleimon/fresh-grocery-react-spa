import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleCart = cartProduct => {
        const exists = cart.find(product => product.id === cartProduct.id);
        let newCart = [];
        if(!exists){
            newCart = [...cart, cartProduct];
            if(newCart.length <= 4){
                setCart(newCart);
            }
            else{
                alert('You can add maximum 4 items to your cart');
            }
        }
        else{
            alert('This product is already in your cart');
        }
    }

    const clearCart = () => {
        setCart([]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
               products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>) 
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;