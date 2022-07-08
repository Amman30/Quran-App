
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post1 } from '../lib/api';
import "./login.css";
import Signup from './Signup';



const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState(" ");


    const login = async (e) => {    // for login

        e.preventDefault();
        console.log("email: " + email + "passowrd " + password);

        await post1(
            "https://api-scripture-iust-dev.herokuapp.com/v1/scripture/user/login/",
            { email, password }
        ).then(data => {
            const message = data.message;
            if (message === "User Successfully Logged-in!") {

                console.log(data.data.username);
                navigate('/adminlogin')
            }
            else if (message === "User With the Given Credentials Not Found!") {
                alert("User With the Given Credentials Not Found! " + ".. Please Try Again");
                navigate('/login')
            }


        })




    }

    const signup = (e) => {        // navigates to signup.
        navigate('/signup')
        e.preventDefault();
        console.log("sign Up button clicked");

    }






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

                        <button type='button' className='signup' onClick={signup}> Sign Up</button>
                        <button type='submit' className='loginbutton' onClick={login}>Sign in</button>
                    </div>
                </form>


            </div>
            <h1> <Link to="/">Home</Link> </h1>

        </div>
    );
}

export default Login;
