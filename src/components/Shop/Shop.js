import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomCart, setRandomCart] = useState([]);

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

    const pickItem = () => {
        const randomItem = cart[Math.floor(Math.random() * cart.length)];
        let randomCart = [randomItem];
        setRandomCart(randomCart);
    }

    const clearCart = () => {
        setCart([]);
        setRandomCart([]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
               products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>) 
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart} pickItem={pickItem} randomCart={randomCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;