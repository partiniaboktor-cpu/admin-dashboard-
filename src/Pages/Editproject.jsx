import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import '../Pages/Editproject.css';
import Title from '../Components/Title';
import one from '../Images/one.png';
import upload from '../Images/upload.svg';
import Smalltitle from '../Components/Smalltitle';

const Editproject = () => {
    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
<Nav />

<div className='alledits'>

<div className='left-box'>
    <div className='leftm'>
    <Title title="Project image" />
<div className='pic-btn'>
    <img src={one} alt="one" />
    <div className='edit-type'>
    <button className='replace'>Replace</button>
    <button className='remove'>Remove</button>
    </div>
</div>
<div className='upload'>
    <img src={upload} alt="upload" />
      <button className='add'>Add another image</button>
</div>
    </div>
</div>

<div className='right-box'>
   <div className='leftm'>
    <Title title="Project image" />

<div className='fields'>

 <Smalltitle title="Project name" />
 <div className='empty-box'>
 <div className='only-box'></div>
</div>

 <Smalltitle title="Description" />
  <div className='empty-box'>
 <div className='only-box'></div>
</div>
</div>


<div className='two-fields'>
 <Smalltitle title="Description" />
  <div className='empty-box'>

</div>

 <Smalltitle title="Description" />
  <div className='empty-box'>
 
</div>



</div>



    </div>
</div>
</div>
</div>
    </div>
    </> );
}
 
export default Editproject;