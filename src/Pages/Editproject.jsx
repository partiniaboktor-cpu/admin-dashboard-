import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import '../Pages/Editproject.css';
import Title from '../Components/Title';
import upload from '../Images/upload.svg';
import Smalltitle from '../Components/Smalltitle';
import Footer from '../Components/Footer';
import one from '../Images/one.png';

const Editproject = () => {
    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
<Nav />

<div className="container4">
      {/* Left Section – Project Image */}
      <div className="imageBox4">
       <Title title="Project image" />

        <div className="imageWrapper4">
          <img
            src= 'one'
            alt="project"
            className="projectImg4"
          />

          <div className="imageBtns4">
            <button className="replaceBtn4">Replace</button>
            <button className="removeBtn4">Remove</button>
          </div>
        </div>

        <button className="addImageBtn4">
          ⬆️ Add Another Image
        </button>
      </div>

      {/* Right Section – Project Information */}
      <div className="infoBox4">
        <Title title="Project information" />

        <div className="formGrid4">
          <label className="label4">Project name</label>
          <input className="input4" type="text" />

          <label className="label4">Description</label>
          <textarea className="textarea4"></textarea>

          <div className="row4">
            <div className="column4">
              <label className="label4">Time frame</label>
              <input className="input4" type="text" />
            </div>
            <div className="column4">
              <label className="label4">Tools</label>
              <input className="input4" type="text" />
            </div>
          </div>

          <div className="row4">
            <div className="column4">
              <label className="label4">My role</label>
              <input className="input4" type="text" />
            </div>
            <div className="column4">
              <label className="label4">Wire frame</label>
              <div className="uploadBox4">⬆️</div>
            </div>
          </div>

          <label className="label4">Visual design</label>
          <div className="visualUpload4">⬆️</div>

          <button className="saveBtn4">Save changes</button>
        </div>
      </div>
    </div>

<Title title="SEO & Content Optimization" />

<div className="seoContainer5">

      <button className="editBtn5">✎ Edit</button>

      <div className="row5">
        <div className="column5">
          <label className="label5">Page &lt;title&gt; Tag</label>
          <div className="selectBox5">
            <select className="selectInput5">
              <option>Category</option>
              <option>Home</option>
              <option>Project</option>
              <option>About</option>
            </select>
            <span className="arrow5">⌄</span>
          </div>
        </div>

        <div className="column5">
          <label className="label5">URL Name</label>
          <div className="urlBox5">
            <input type="text" placeholder="Link" className="urlInput5" />
            <span className="editIcon5">✎</span>
          </div>
        </div>
      </div>

      <label className="label5">Meta Description</label>
      <textarea className="textarea5"></textarea>

      <label className="label5">Image Optimization</label>
      <div className="imageUpload5">
        <p>Drag image here</p>
        <span>or</span>
        <p className="browse5">Browse image</p>
      </div>

      <button className="deleteBtn5">Delete SEO</button>
    </div>

<Footer />

</div>
    </div>
    </> );
}
 
export default Editproject;