import React from 'react';
import './Login.css';
import DpLogo from '../../assets/DP_Logo.png';


function LoginView() {
    return (
        <div className='Login-Section'>
            <h1>Sorcerer's Script</h1>
            <img className="Login-logo" src={ DpLogo } />
            <div className="login-form">
                <h1>Login</h1>
                <h6>Sign Up Here</h6>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button>Login</button>
            </div>
        </div>
    );
}

export default LoginView;