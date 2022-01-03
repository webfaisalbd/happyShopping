import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import style from "./Shop.module.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className={style.shopContainer}>
            <div className={style.productContainer}>

                <div className='row'>
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

            </div>



            <div className={style.cartContainer}>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;