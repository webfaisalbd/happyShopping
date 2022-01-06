import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFirebase from '../../hooks/useFirebase';
import Header from '../Home/Header/Header';
import style from "./LoginStyle.module.css";


const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();
    return (
        <>
            <Header></Header>
            <div className={style.loginStyle}>
            <div>
            <h2>Login</h2>
            <form onSubmit="">
                <input type="email" name='' id='' placeholder='Your Email' />
                <br />
                <input type="password" name='' id=''  />
                <br />
                <input type="submit" value="Submit" />
                
            </form>
            <p>new to happy shopping? <Link to="/register">Create Account</Link> </p>
            <div>------- or -------</div>
            <button className='btn-regular'
            onClick={signInUsingGoogle}
            >Google Sign In</button>
        </div>
        </div>
        </>
    );
};

export default Login;