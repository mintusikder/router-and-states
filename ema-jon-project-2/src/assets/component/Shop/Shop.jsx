// import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
       const getCart = getShoppingCart()
       console.log(getCart)
    },[])

    
    const handelAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
      }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                    {
                        products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                        ></Product>)
                    }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;