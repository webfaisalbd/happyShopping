import React from 'react';
import useCart from '../../../hooks/useCart';
import useProducts from '../../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import style from "./OrderReview.module.css";
import logo from "../../../images/shoppingCart.png"
import Footer from '../Footer/Footer';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../../utilities/fakedb';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (


        <>
            <div className={`${style.logo} col-md-12 col-sm-12 w-50 mx-auto`}>
                <img src={logo} alt="" width="320" height="65" />
            </div>

            <Header></Header>
            <div className={style.shopContainer}>
                <div className={style.productContainer}>
                    {
                        cart.map(product => <ReviewItem product={product}
                            key={product.key}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <Footer></Footer>

        </>

    );
};

export default OrderReview;