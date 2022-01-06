import React from 'react';
import style from "./Product.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';


const Product = (props) => {
    
    const { name, img, seller, price, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className={`${style.underline} col-lg-3 col-md-4 col-sm-6`}
        >
            <div>
                <img src={img} alt='' />
                <div>
                    <p>{name}</p>
                    <p><small>by: {seller}</small></p>
                    <p>price: {price}</p>
                    <p><small>only {stock} left in stock- order fast</small></p>
                    <Rating className={style.iconColor}
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly></Rating>
                    <br />
                    <button onClick={() => props.handleAddToCart(props.product)} className={style.btnRegular}>{element} Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;