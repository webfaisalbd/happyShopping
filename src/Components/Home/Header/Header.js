import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import style from "./Header.module.css"
const Header = () => {
    const {user,logOut} = useFirebase();
    return (
        <div className={style.header}>
            {/* <img className={style.logo} src={logo} alt="" />
            <nav><a href="/shop">shop</a>
                <a href="/orders">orders</a>
                <a href="inventory">Manage inventory</a></nav> */}



            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/Shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/OrderReview">Order Review</NavLink>
                            </li>
                            {
                                user.email ? <button onClick={logOut}>Log Out</button> 
                                :
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/login"> Login </NavLink>
                            </li>
                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;