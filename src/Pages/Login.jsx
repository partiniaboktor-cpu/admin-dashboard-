import React, { Component } from 'react';
import '../Pages/Login.css' ;
import mylogo from '../Images/mylogo.svg' ;
import { useNavigate } from "react-router-dom";
import google from '../Images/google.svg'
import facebook from '../Images/facebook.svg'
import github from '../Images/github.svg'


const Login = () => {
  const navigate = useNavigate();

    return ( <>

<div className="login-wrapper">
      <div className="login-card">

        <img src={mylogo} alt="logo" className="login-logo" />

        <h2 className="login-title">Login</h2>

        <label6>Email</label6>
        <input type="email" placeholder="username@gmail.com" />

        <label6>Password</label6>
        <div className="password-field">
          <input type="password" placeholder="Password" />
          <span className="eye-icon">👁️</span>
        </div>

        <p className="forgot">Forgot Password?</p>

     <button className="btn-signin" onClick={() => navigate("/Home")}>
  Sign in
</button>

        <p className="continue">or continue with</p>

     
<div className="providers">
  <button className="provider google">
    <img src={google} alt="Google" />
  </button>

  <button className="provider github">
    <img src={github} alt="Github" />
  </button>

  <button className="provider facebook">
    <img src={facebook} alt="Facebook" />
  </button>
</div>

        <p className="register">
          Don’t have an account yet? <span>Register for free</span>
        </p>
      </div>
    </div>























    </> );
}
 
export default Login;