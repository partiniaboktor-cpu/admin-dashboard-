import React, { Component } from 'react';
import '../Pages/Profile.css';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';


const Profile = () => {
    return ( <>
    
    <div className='bigdiv'>
    
    <div className='aside'>
        <Aside />
    </div>

<div className='secdiv'>
    <Nav />

<Title title="Profile" />
















</div>
    </div>
    </> );
}
 
export default Profile;