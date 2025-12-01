import React from "react";
import "./Nav.css";
import logo from "../Images/mylogo.svg"; // your logo path
import profile from "../Images/profile.svg"; // your logo path

const Sidebar = () => {
  return (
    <>
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


   <div className="topbar">

      <div className="left-section">
        <img
          src={profile}
          alt="profile"
          className="profile-img"
        />

        <div className="text">
          <h3>Welcome back, Partinia</h3>
          <p>Last login : [ 25 Oct 2025 ]</p>
        </div>
      </div>

      <div className="center-section">
        <button className="lang-btn">AR</button>
        <button className="lang-btn">EN</button>

        <button className="continue-btn">
          Continue editing last page
        </button>
      </div>

      <div className="right-section">
        <button className="icon-btn">🔍</button>

        <div className="notify-wrapper">
          <button className="icon-btn">🔔</button>
          <span className="notify-dot">1</span>
        </div>
      </div>

    </div>

    </>
  );
};

export default Sidebar;
