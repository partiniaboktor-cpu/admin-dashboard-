import React, { useState } from "react";
import Aside from "./Aside";
import Topbar from "./Topbar";
import "./Layout.css";

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="layout">

      {/* BURGER MENU — visible only on mobile */}
      <button
        className="burger-btn"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <Aside open={openSidebar} />

      {/* MAIN CONTENT */}
      <div className="main-content">
        <Topbar />
        
        {/* Your page content goes here */}
      </div>

    </div>
  );
};

export default Layout;
