import React, { useEffect, useState } from "react";
import '../Pages/Login.css';
import mylogo from '../Images/mylogo.svg';
import { useNavigate } from "react-router-dom";
import google from '../Images/google.svg';
import facebook from '../Images/facebook.svg';
import github from '../Images/github.svg';
import { supabase } from "../Supabase";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
const [login, setLogin] = useState([]);

  useEffect(() => {
    async function getAllloginAPI() {
      const res = await supabase.from("login").select("*");
setLogin(res.data);
      setLoading(false);
    }
    getAllloginAPI();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
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


<div>
{
login.map((login)=>{
return  <>
<p className="forget">{login.password}</p>
</>
})
}
</div>





<button className="btn-signin" onClick={() => navigate("/Home")}>
{
login.map((login)=>{
return  <>
<p className="forget">{login.signingin}</p>
</>
})
}
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
  );
};

export default Login;
