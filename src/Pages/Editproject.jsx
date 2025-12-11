import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import '../Pages/Editproject.css';
import Title from '../Components/Title';
import one from '../Images/one.png';
import upload from '../Images/upload.svg';
import Smalltitle from '../Components/Smalltitle';
import Footer from '../Components/Footer';


const Editproject = () => {
    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
<Nav />


<div className="project-editors">

      {/* ---- LEFT: IMAGE CARD ---- */}
      <div className="project-image-cards">
        <h3>Project Image</h3>

        <div className="project-img-wrappers">
          <img
            src={one} // replace with your image
            alt="project"
            className="project-img"
          />
        </div>

        <div className="project-image-actionss">
          <button className="replace-btns">Replace</button>
          <button className="remove-btns">Remove</button>
        </div>

       <div className="upload-box"></div>

      </div>

      {/* ---- RIGHT: FORM CARD ---- */}
      <div className="project-info-cards">
        <h3>Project information</h3>

        <div className="form-grids">

          <input className="input-fields full" placeholder="Project name" />

          <textarea className="input-fields full textarea" placeholder="Description" />

          <input className="input-fields" placeholder="Time frame" />

          <input className="input-fields" placeholder="Tools" />

          <input className="input-fields" placeholder="My role" />

          <div className="upload-box"></div>


          <div className="upload-box"></div>


        </div>

        <button className="save-btns">Save changes</button>
      </div>

    </div>



<Title title="SEO & Content Optimization" />


<div className="seo-container">
<div className="seo-header">
<h2>Page &lt;title&gt; Tag</h2>
</div>


<div className="seo-row">
<div className="seo-field">
<labelss>Category</labelss>
<select>
<option>Category</option>
</select>
</div>


<div className="seo-field">
<labelss>URL Name</labelss>
<div className="input-wrapper">
<input type="text" placeholder="Link" />
<span className="edit-icons">✏️</span>
</div>
</div>


</div>


<div className="seo-section">
<labelss>Meta Description</labelss>
<textarea placeholder=""></textarea>
</div>


<div className="seo-section">
<labelss>Image Optimization</labelss>
<div className="image-upload-box">
<p>Drag image here</p>
<span>or</span>
<p className="browse">Browse image</p>
</div>
</div>


<button className="delete-btn">Delete SEO</button>
</div>


<Footer />

</div>
    </div>
    </> );
}
 
export default Editproject;