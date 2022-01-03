import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import style from "./Shop.module.css"

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
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
                <h3>Order Summery:</h3>
                <h5>Items Order:</h5>
            </div>
        </div>
    );
};

export default Shop;