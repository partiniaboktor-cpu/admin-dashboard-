import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import '../Pages/Messagedetail.css';

const Messagedetail = () => {
    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
<Nav />

 <div className="message-container">

      {/* Header */}
      <div className="message-header">
        <div className="sender-info">
          <div className="avatar-placeholder"></div>

          <div className="sender-text">
            <h3 className="sender-name">Ramez Raouf</h3>
          </div>
        </div>

        <span className="message-date">Date 31/12/2025</span>
      </div>

      {/* Title */}
      <h2 className="message-title">Work Inquiry to Designer</h2>

      {/* Body */}
      <p className="message-body">
        I hope you’re doing well. I’m reaching out because I’ve been following
        your work for a while, and I truly admire your creative direction,
        attention to detail, and the unique aesthetic you bring to every
        project. I’m currently looking for a designer who can help me with a new
        project, and I believe your style aligns perfectly with what I’m aiming
        to achieve. 
        <br /><br />
        I would love to discuss the possibility of working together, understand
        your availability, learn about your process, and go over any
        requirements you may have regarding budget and timelines. If this sounds
        like something you’re open to, please let me know a suitable time for
        you so we can move forward. Looking forward to hearing from you.
      </p>

      {/* Icons Removed */}

      {/* Input box */}
      <div className="reply-box">
        <div className="reply-dots">....</div>
        <input
          className="reply-input"
          placeholder="Click here to type or forward"
        />
        <button className="reply-send">Send</button>
      </div>
    </div>



</div>
       </div> 
    </> );
}
 
export default Messagedetail;