import React, { Component } from 'react';
import logo from "../Images/mylogo.svg"; // your logo path
import '../Components/Aside.css';

const Aside = () => {
    return ( <>
    
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="logo" />
        <h4>Partinia Boktor</h4>
      </div>

      <nav className="menu">
        <button className="menu-item active">
          <span className="icon">▦</span> Dashboard home
        </button>
        <button className="menu-item">
          <span className="icon">🏠</span> Projects
        </button>
        <button className="menu-item">
          <span className="icon">✈️</span> Skills
        </button>
        <button className="menu-item">
          <span className="icon">🗂️</span> Categories
        </button>
        <button className="menu-item">
          <span className="icon">💬</span> Messages
        </button>
        <button className="menu-item">
          <span className="icon">👤</span> Profile
        </button>
        <button className="menu-item">
          <span className="icon">⚙️</span> Settings
        </button>
      </nav>
    </div>

    
    
    
    
    
    </> );
}
 
export default Aside;