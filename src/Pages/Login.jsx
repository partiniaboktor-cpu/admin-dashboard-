import React, { Component } from 'react';
import '../Pages/Login.css' ;
import mylogo from '../Images/mylogo.svg' ;

const Login = () => {
    return ( <>

<div className="login-wrapper">
      <div className="login-card">

        <img src={mylogo} alt="logo" className="login-logo" />

        <h2 className="login-title">Login</h2>

        <label>Email</label>
        <input type="email" placeholder="username@gmail.com" />

        <label>Password</label>
        <div className="password-field">
          <input type="password" placeholder="Password" />
          <span className="eye-icon">👁️</span>
        </div>

        <p className="forgot">Forgot Password?</p>

        <button className="btn-signin">Sign in</button>

        <p className="continue">or continue with</p>

        <div className="providers">
          <button className="provider google">Google</button>
          <button className="provider github">Github</button>
          <button className="provider facebook">Facebook</button>
        </div>

        <p className="register">
          Don’t have an account yet? <span>Register for free</span>
        </p>
      </div>
    </div>























    </> );
}
 
export default Login;