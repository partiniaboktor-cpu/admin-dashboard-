import React from "react";
import CTPBox from "../Components/CTPbox";
import "./Categories.css";
import Aside from "../Components/Aside";
import Nav from "../Components/Nav";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


const CategoriesTagsPages = () => {
  return (
    <div className="bigdiv">

      <div className="aside">
        <Aside />
      </div>

      <div className="secdiv">
        <Nav />

<div className='lang'>
<button className="english">
  <Link to="/category">EN</Link>
</button>

<button className="english">
  <Link to="/arabiccategory">AR</Link>
</button>
</div>

        <div className="ctp-page">
          <div className="ctp-top">
            <Title title="Categories, Tags, Pages" />

            <div className="ctp-actions">
              <button className="add-btn">+ Add</button>
              <button className="small-btn">🔍 Search</button>
              <button className="small-btn">⚙️ Filters</button>
              <button className="small-btn">Download all</button>
            </div>
          </div>

          {/* Reusables */}
          <CTPBox type="Category" name="Photography" content="" />
          <CTPBox type="Pages" name="Photography" content="" />
          <CTPBox type="Tags" name="Photography" content="" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CategoriesTagsPages;

