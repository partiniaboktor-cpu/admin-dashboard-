import React, { Component } from 'react';
import Aside from '../Components/Aside';
import  Nav from '../Components/Nav';
import Title from '../Components/Title';
import '../Pages/Skills.css';
import Skillcard from '../Components/Skillcard';
import figma from '../Images/figma.svg';
import Experiencecard from '../Components/Experiencecard';
import  Footer from '../Components/Footer';



const Skills = () => {
    return ( <>
    
     <div className='bigdiv'>

        <div className='aside'>
           <Aside />
        </div>
      
      <div className='secdiv'>
        <Nav />

<div className='top-title'>
<Title title="Skills" />
<div className='self'>
<button className='addskills'>+ Add skill</button>
<button className='addskill'>Search</button>
<button className='addskill'>Filters</button>
</div>
</div>


<Skillcard />


<div className='top-title'>
<Title title="Experience" />
<div className='self'>
<button className='addskills'>+ Add experience</button>
<button className='addskill'>Search</button>
<button className='addskill'>Filters</button>
</div>
</div>


<Experiencecard />


<Footer />


  </div>
    </div>
    
    
    
    
    </> );
}
 
export default Skills;