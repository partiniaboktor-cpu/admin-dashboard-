import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import '../Pages/Settings.css';
import Title from '../Components/Title';
import Footer from '../Components/Footer';

const Settings = () => {
    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
<Nav />


    <div className="settings-container">
      <Title title="Settings" />

      <div className="tabs">
        <button className="tab active">Profile</button>
        <button className="tab">Accounts</button>
        <button className="tab">Team</button>
        <button className="tab">Integrations</button>
        <button className="tab">Billings</button>
      </div>

      <div className="settings-content">
        {/* Left Section - Profile */}
        <div className="profile-section">
          <h3>Profile Settings</h3>
          <p className="subtext">These are your personal details, they are visible to the public.</p>

          {/* Upload Box */}
          <div className="upload-box">
            <div className="upload-header">Uploading Profile Image</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "45%" }}></div>
            </div>
            <p className="progress-text">Profile02.PNG — 45% Completed</p>
            <button className="close-upload">✕</button>
          </div>

          {/* Form */}
          <label className="form-label">Full Name</label>
          <input className="input-field" type="text" value="Partinia Bokotr" readOnly />

          <label className="form-label">Email</label>
          <input className="input-field" type="email" value="PartiniaBoktor.com" readOnly />

          <div className="button-row">
            <button className="btn cancel">Cancel</button>
            <button className="btn save">Save Changes</button>
          </div>
        </div>

        {/* Right Section - Password */}
        <div className="password-section">
          <h3>Update Password</h3>
          <p className="subtext">Enter your current password to make update</p>

          <label className="form-label">Current Password</label>
          <input className="input-field" type="password" placeholder="Enter Password" />

          <label className="form-label">New Password</label>
          <input className="input-field" type="password" placeholder="Enter New Password" />

          <button className="btn update">Update Password</button>
        </div>
      </div>
    </div>



<Footer />


</div>
    </div>
    </> );
}
 
export default Settings;