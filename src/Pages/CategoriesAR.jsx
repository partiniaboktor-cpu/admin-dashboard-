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
          <Link to="/Categories">EN</Link>
        </button>
        
        <button className="english">
          <Link to="/arabiccategory">AR</Link>
        </button>
        </div>

        <div className="ctp-page">
          <div className="ctp-top">
            <Title title="الفئات، العلامات، الصفحات" />

            <div className="ctp-actions">
              <button className="add-btn">+ إضافة</button>
              <button className="small-btn">🔍 بحث</button>
              <button className="small-btn">⚙️ فلاتر</button>
              <button className="small-btn">تحميل الكل</button>
            </div>
          </div>

          {/* Reusables */}
          <CTPBox type="فئة" name="تصوير" content="" />
          <CTPBox type="صفحة" name="تصوير" content="" />
          <CTPBox type="علامة" name="تصوير" content="" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CategoriesTagsPages;
