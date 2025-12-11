import { Link } from "react-router-dom";
import React, { Component } from 'react';
import '../Pages/Messages.css' ;
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title' ;
import Topbox from '../Components/Topbox';
import myimg from '../Images/myimg.png'
import trash from '../Images/delete.svg'
import Pagenumber from '../Components/Pagenumber';
import Footer from '../Components/Footer';


const Messages = () => {
    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
    <Nav />

<div className='lang'>
<button className="english">
  <Link to="/messages">EN</Link>
</button>

<button className="english">
  <Link to="/arabicmessages">AR</Link>
</button>
</div>

<div className='top-messages'>
<Title title="Messages" />

<div className='right-msg'>
 
<button className='allmsg'>All</button>
<button className='allmsgs'>Unread</button>
<button className='allmsgs'>Important</button>

</div>

</div>

<div className='topboxes'>
<Topbox 
  title1="Overall mesages"
  title2="{2389}"
  title3="This month"
/>

<Topbox 
  title1="Sent messages"
  title2="{1494}"
  title3="This month"
/>

<Topbox 
  title1="Received messages"
  title2="{895}"
  title3="This month"
/>
</div>

<div className='allmsgsfield'>

<div className='msgs-type'>
<div className='tick'></div>
<img className='sender-img' src={myimg} alt="sender image" />
<Link to="/messagedetail" className="sender-name">
  Ramez Raouf
</Link>
<button className='user'>User testing</button>
<p className='sender-msg'>Hi partinia , We need to do user testing by Monday ,<br></br> Please add  me in project group </p>
<img src={trash} alt="" />
</div>




<div className='msgs-type'>
<div className='tick'></div>
<img className='sender-img' src={myimg} alt="sender image" />
<Link to="/messagedetail" className="sender-name">
  Ramez Raouf
</Link>
<button className='user'>User testing</button>
<p className='sender-msg'>Hi partinia , We need to do user testing by Monday ,<br></br> Please add  me in project group </p>
<img src={trash} alt="" />
</div>



<div className='msgs-type'>
<div className='tick'></div>
<img className='sender-img' src={myimg} alt="sender image" />
<Link to="/messagedetail" className="sender-name">
  Ramez Raouf
</Link>
<button className='user'>User testing</button>
<p className='sender-msg'>Hi partinia , We need to do user testing by Monday ,<br></br> Please add  me in project group </p>
<img src={trash} alt="" />
</div>



<div className='msgs-type'>
<div className='tick'></div>
<img className='sender-img' src={myimg} alt="sender image" />
<Link to="/messagedetail" className="sender-name">
  Ramez Raouf
</Link>
<button className='user'>User testing</button>
<p className='sender-msg'>Hi partinia , We need to do user testing by Monday ,<br></br> Please add  me in project group </p>
<img src={trash} alt="" />
</div>




<div className='msgs-type'>
<div className='tick'></div>
<img className='sender-img' src={myimg} alt="sender image" />
<Link to="/messagedetail" className="sender-name">
  Ramez Raouf
</Link>
<button className='user'>User testing</button>
<p className='sender-msg'>Hi partinia , We need to do user testing by Monday ,<br></br> Please add  me in project group </p>
<img src={trash} alt="" />
</div>




<div className='msgs-type'>
<div className='tick'></div>
<img className='sender-img' src={myimg} alt="sender image" />
<Link to="/messagedetail" className="sender-name">
  Ramez Raouf
</Link>
<button className='user'>User testing</button>
<p className='sender-msg'>Hi partinia , We need to do user testing by Monday ,<br></br> Please add  me in project group </p>
<img src={trash} alt="" />
</div>



<div className='msgs-type'>
<div className='tick'></div>
<img className='sender-img' src={myimg} alt="sender image" />
<Link to="/messagedetail" className="sender-name">
  Ramez Raouf
</Link>
<button className='user'>User testing</button>
<p className='sender-msg'>Hi partinia , We need to do user testing by Monday ,<br></br> Please add  me in project group </p>
<img src={trash} alt="" />
</div>

<div className="pagination">
        <button className="page-btn">Previous</button>
        <p>Page 1 of 10</p>
        <button className="page-btn dark">Next</button>
      </div>


</div>
<Footer />
</div>
    </div>
    </> );
}
 
export default Messages;