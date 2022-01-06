import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Register.module.css'
const Register = () => {
    return (
        <div className={style.registerStyle}>
            <div>
            <h2>Register: Create Account</h2>
            
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Passwoed' />
                <br />
                <input type="password" name="" id="" placeholder='Re-enter your Passwoed' />
                <br />
                <input type="submit" value="Submit" />

            </form>
            <p>Already have an account? <Link to="/login">Login</Link> </p>
            <div>---------or---------</div>
            <button className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Register;