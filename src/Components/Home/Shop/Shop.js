import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from "../../../utilities/fakedb"
import style from "./Shop.module.css"
import Header from '../Header/Header';
import logo from "../../../images/shoppingCart.png"
import Banner from '../Banner/Banner';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)

                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="" width="300" height="65" className="d-inline-block align-text-top" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className={`${style.searchContainer} col-md-6`}>
                                <input type="text"
                                    onChange={handleSearch} placeholder='  Search' />
                            </div>

                        </div>
                    </div>
                </nav>
                {/* <div className="">
                <div className="row">
                    <div className="col-md-6">
                        <img src={logo} alt="" width="200" height="65" className={style.logo} />
                    </div >
                    <div className={`${style.searchContainer} col-md-6`}>
                        <input type="text"
                            onChange={handleSearch} placeholder='  Search' />
                    </div>
                </div>
            </div> */}
                <Header></Header>
                <Banner></Banner>
            </div>
            <div className={style.shopContainer}>
                <div className={style.productContainer}>

                    <div className='row'>
                        {
                            displayProducts.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>

                </div>



                {/* <div className={style.cartContainer}>
                    <Cart cart={cart}></Cart>
                </div> */}
            </div>
        </>
    );
};

export default Shop;