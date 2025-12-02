import React, { Component } from 'react';
import '../Pages/Profile.css';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import myimg from '../Images/myimg.png' ;
import Footer from '../Components/Footer' ;
const Profile = () => {
    return ( <>
    
    <div className='bigdiv'>
    
    <div className='aside'>
        <Aside />
    </div>

<div className='secdiv'>
    <Nav />

<Title title="Profile" />

<div className='myimgs'>
<img className='myimg' src={myimg} alt="" />
<button className='new'>Upload new photo</button>
</div>

<p className='size'>At least 800x800 px / recommended.JPG or PNG is allowed / Max 2MB</p>

<hr className='line'></hr>

<div className='hold'>

    <div className='personal-box'>
<h2 className='personal'>Personal info</h2>
<button className='edits'>Edit</button>
</div>

<div className='three'>
<div className='firstone'>
    <p className='full-name'>Full name</p>
    <p className='names'>Partinia Boktor</p>
</div>

<div className='firstone'>
    <p className='full-name'>Email</p>
    <p className='names'>PartiniaBoktor@gmail.com</p>
</div>


<div className='firstone'>
    <p className='full-name'>Phone</p>
    <p className='names'>01202061400</p>
</div>
</div>
</div>



<div className='hold'>

    <div className='personal-box'>
<h2 className='personal'>Location</h2>
<button className='edits'>Edit</button>
</div>

<div className='cairo'>Cairo,Egypt</div>
</div>



<div className='hold'>

    <div className='personal-box'>
<h2 className='personal'>Bio</h2>
<button className='edits'>Edit</button>
</div>

    <p className='namess'>I’’m passionate in ux/ui designer which makes me being in the happiest mood , since i was young i wanted to be a designer and grow deep more into my the field . Being a designer isn’t easy but for me is so passionate of doing it. Started my field of ux/ui designer when i was 18 years old when i was too young that makes me more exited to get more deeper into it.</p>
</div>

<Footer />
</div>
    </div>
    </> );
}
 
export default Profile;