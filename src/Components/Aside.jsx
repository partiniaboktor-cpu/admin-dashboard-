import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../Images/mylogo.svg";
import '../Components/Aside.css';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Burger menu button */}
      <button className="burger" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
          <h4>Partinia Boktor</h4>
        </div>

        <nav className="menu">
          <NavLink to="/" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <span className="icon">▦</span> Dashboard home
          </NavLink>

          <NavLink to="/projects" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <span className="icon">🏠</span> Projects
          </NavLink>

          <NavLink to="/skills" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <span className="icon">✈️</span> Skills
          </NavLink>

          <NavLink to="/categories" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <span className="icon">🗂️</span> Categories
          </NavLink>

          <NavLink to="/messages" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <span className="icon">💬</span> Messages
          </NavLink>

          <NavLink to="/profile" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <span className="icon">👤</span> Profile
          </NavLink>

          <NavLink to="/settings" className={({isActive}) => isActive ? "menu-item active" : "menu-item"}>
            <span className="icon">⚙️</span> Settings
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Aside;
