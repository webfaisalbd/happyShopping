import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';
import style from "./LoginStyle.module.css";


const Login = () => {
    const {  signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history= useHistory();
    const redirect_uri = location.state?.from || './shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <>
            <Header></Header>
            <div className={style.loginStyle}>
            <div>
            <h2>Login</h2>
            <form>
                <input type="email" name='' id='' placeholder='Your Email' />
                <br />
                <input type="password" name='' id=''  />
                <br />
                <input type="submit" value="Submit" />
                
            </form>
            <p>new to happy shopping? <Link to="/register">Create Account</Link> </p>
            <div>------- or -------</div>
            <button className='btn-regular'
            onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
        </div>
        </>
    );
};

export default Login;