
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../../phase1/lib/api';
import "./login.css";
import Logout from '../Logout';



const Login = () => {


    const [email, setEmail] = useState(" ");

    const [password, setPassword] = useState(" ");



    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            // navigate('/')
        }
    }, [])

    const login = async (e) => {    // for login

        e.preventDefault();
        console.log("email:" + email + "passowrd " + password);

        post(
            "https://api-scripture-iust-dev.herokuapp.com/v1/scripture/user/login/",
            { email, password }
        ).then(data => console.log(data));


    }

    const signup = (e) => {        // navigates to signup.
        navigate('/logout')
        e.preventDefault();
        console.log("sign Up button clicked");

    }


    const navigate = useNavigate();



    return (
        <div className='login'>


            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">

                        <div className="input-field">
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <Link style={{ color: 'black' }} to="/" className="link">Forgot Your Password?</Link>
                    </div>
                    <div className="action">

                        <button className='signup' onClick={signup}> Sign Up</button>
                        <button type='submit' className='loginbutton' onClick={login}>Sign in</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Login;
