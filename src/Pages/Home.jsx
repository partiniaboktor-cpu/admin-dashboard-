import React, { Component } from 'react';
import Nav from '../Components/Nav.jsx' ;
import '../Pages/Home.css';
import Topbox from '../Components/Topbox.jsx';
import Title from '../Components/Title.jsx';
import Lightbuttons from '../Components/Lightbuttons.jsx';
import Aside from '../Components/Aside.jsx';
import Darkbutton from '../Components/Darkbutton.jsx';
import profile from '../Images/profile.svg' ;
import graph from '../Images/graph.svg' ;
import Footer from '../Components/Footer.jsx';
import { Link } from "react-router-dom";


const Homedashboard = () => {
    return ( <>

<div className='bigdiv'>

<div className='aside'>
    <Aside />
  
</div>


<div className='secdiv'>
<Nav />


<div className='lang'>
<button className="english">
  <Link to="/home">EN</Link>
</button>

<button className="english">
  <Link to="/arabichome">AR</Link>
</button>
</div>


<div className='topboxes'>
<Topbox 
  title1="Published projects"
  title2="{24}"
  title3="Last updated: [ 12 OCT ]"
/>

<Topbox 
  title1="Visitors analytics"
  title2="{4 unread}"
  title3="Last updated: [ 12 OCT ]"
/>

<Topbox 
  title1="Messages Count"
  title2="{2,300}"
  title3="Last updated: [ 12 OCT ]"
/>
</div>

<Title title="Quick actions" />

<div className='butns'>
<Lightbuttons title1="+ new project" />
<Lightbuttons title1="Edit hero section" />
<Lightbuttons title1="Edit About me" />
<Lightbuttons title1="Change services" />
</div> 

<div className='topboxess'>
<Topbox 
  title1="Hero preview"
  title2="Title-portfolio"
  title3="CTA previews"
/>
<div className='secbox'>

    <div className='part1'>
    <div className='ab'>About preview</div>
    <Darkbutton title="Edit" /> 
    </div>

   
    <div className='part2'>
    <img src={profile} alt="" />
    <h2 className='short'>Short bio</h2>
    </div>

</div>
</div>

<Title title="Featured projects preview" />

<div className='graph'>

<div className='secbox'>

    <div className='part11'>
    <div className='ab'>About preview</div>
    <Darkbutton title="view all" /> 
    </div>
    <div className='part22'>
    <h4 className='shorts'>.Updated about me</h4>
    <h4 className='shorts'>.Added new services</h4>
    <h4 className='shortss'>.New inquiry received</h4>
    <h4 className='shortss'>.New message received</h4>
    <h4 className='shortss'>.Added new skills</h4>
        
    </div>

</div>

<img src={graph} alt="" />
</div>

<Footer />

</div>
</div>





    </> );
}
 
export default Homedashboard;