import React from "react";
import "./Nav.css";
import profile from "../Images/profile.svg"; // your logo path

const Sidebar = () => {
  return (
    <>

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
