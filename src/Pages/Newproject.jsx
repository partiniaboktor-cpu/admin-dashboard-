import React, { Component } from 'react';
import '../Pages/Newproject.css';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Newproject = () => {
    return ( <>
    
<div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>


<div className='secdiv'>

<Nav />


 <div className="project-container">
      <h1 className="title">New Project</h1>

      <div className="project-content">
        
        {/* LEFT — IMAGE UPLOAD */}
        <div className="upload-box">
          <p className="upload-text">Drag image here</p>
          <p className="upload-or">or</p>
          <p className="upload-browse">Browse image</p>
        </div>

        {/* RIGHT — FORM */}
        <div className="form-box">
          <div className="form-grid">

            <div className="form-group">
              <label>Project Name</label>
              <input type="text" className="input" />
            </div>

            <div className="form-group">
              <label>Project overview</label>
              <input type="text" className="input" />
            </div>

            <div className="form-group">
              <label>Time frame</label>
              <input type="text" className="input" />
            </div>

            <div className="form-group">
              <label>My role</label>
              <input type="text" className="input" />
            </div>

            <div className="form-group">
              <label>Tool</label>
              <input type="text" className="input" />
            </div>

            <div className="form-group">
              <label>Design process</label>
              <input type="text" className="input" />
            </div>

            <div className="form-group">
              <label>Wireframes</label>
              <input type="text" className="input" />
            </div>

            <div className="form-group">
              <label>Visual design</label>
              <input type="text" className="input" />
            </div>

          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="button-row">
        <button className="btn discard">Discard</button>
        <button className="btn add">Add Project</button>
      </div>
    </div>



<Footer />

</div>
</div>
    </> );
}
 
export default Newproject;