import React from 'react';
import style from "./Product.module.css"

const Product = (props) => {
    console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className={`${style.underline} col-md-4 col-sm-6`}
        >
            <div>
                <img src={img} alt='' />
                <div>
                    <p>{name}</p>
                    <p><small>by: {seller}</small></p>
                    <p>price: {price}</p>
                    <p><small>only {stock} left in stock- order fast</small></p>
                    <button onClick={() => props.handleAddToCart(props.product)} className={style.btnRegular}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;