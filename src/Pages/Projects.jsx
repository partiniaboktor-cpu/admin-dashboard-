import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import Topbox from '../Components/Topbox' ;
import '../Pages/Projects.css';
import state1 from '../Images/state 1.svg' ;
import state2 from '../Images/state 2.svg' ;
import edit from '../Images/edit.svg' ;
import trash from '../Images/delete.svg' ;
import Lightbuttons from '../Components/Lightbuttons';
import Pagenumber from '../Components/Pgenumber';
import Footer from '../Components/Footer';


const Projects = () => {

    return ( <>
    
    <div className='bigdiv'>

        <div className='aside'>
           <Aside />
        </div>
      
      <div className='secdiv'>
        <Nav />
 
<Title title="Overall Projects" />

<div className='topboxes'>
<Topbox 
  title1="Filter"
  title2="Filter projects"
  title3="Last updated: [ 12 OCT ]"
/>

<Topbox 
  title1="Top views"
  title2="1.2k"
  title3="Last 7 days"
/>

<Topbox 
  title1="Total projects"
  title2="12"
  title3="Last 7 days"
/>

<Topbox 
  title1="Low views"
  title2="12"
  title3="Viewed"
/>
</div>

<Title title=" Projects" />

<div className='Table'>

<div className='tops'>

    <div className='type'>
    <h3 className='first'>UX/UI designs </h3>
    </div>
    
    <div className='top2'>
    <h3 className='second'>+ Add project </h3>
    <h3 className='first'>Search </h3>
    <h3 className='first'>Filters</h3>
    <h3 className='first'>Download all</h3>
    </div>

</div>

<div className='titleprojects'>

<div className='typeone'>
<h3 className='headerproject'>Projects</h3>
<p className='text1'>Ecommerce</p>
<p className='text1'>Brand Match</p>
<p className='text1'>Kids toys</p>
<p className='text1'>Candles</p>
<p className='text1'>Maintaince</p>
<p className='text1'>Furniture</p>
<p className='text1'>Travel agency</p>
<p className='text1'>Custom shop</p>
<p className='text1'>Offering page</p>
</div>


<div className='typeone'>
<h3 className='headerproject'>Projects</h3>
<p className='text1'>Ecommerce</p>
<p className='text1'>Brand Match</p>
<p className='text1'>Kids toys</p>
<p className='text1'>Candles</p>
<p className='text1'>Maintaince</p>
<p className='text1'>Furniture</p>
<p className='text1'>Travel agency</p>
<p className='text1'>Custom shop</p>
<p className='text1'>Offering page</p>
</div>


<div className='typeone'>
<h3 className='headerproject'>Views</h3>
<p className='text2'>43 views</p>
<p className='text2'>45 views</p>
<p className='text2'>50 views</p>
<p className='text2'>30 views</p>
<p className='text2'>120 views</p>
<p className='text2'>80 views</p>
<p className='text2'>550 views</p>
<p className='text2'>250 views</p>
<p className='text2'>1.2k views</p>
</div>


<div className='typeone'>
<h3 className='headerproject'>Date published</h3>
<p className='text3'>11/12/22</p>
<p className='text3'>21/12/22</p>
<p className='text3'>5/12/22</p>
<p className='text3'>8/12/22</p>
<p className='text3'>9/1/23</p>
<p className='text3'>9/1/23</p>
<p className='text3'>15/12/23</p>
<p className='text3'>6/6/23</p>
<p className='text3'>11/11/22</p>
</div>


<div className='typeone'>
<h3 className='headerproject'>State</h3>
<img className='text4' src={state1} alt="state" />
<img className='text4' src={state2} alt="state" />
<img className='text4' src={state1} alt="state" />
<img className='text4' src={state2} alt="state" />
<img className='text4' src={state1} alt="state" />
<img className='text4' src={state1} alt="state" />
<img className='text4' src={state2} alt="state" />
<img className='text4' src={state1} alt="state" />
<img className='text4' src={state2} alt="state" />
</div>

<div className='icons'>

<div className='typeone'>
<img className='text5' src={trash} alt="delete" />
<img className='text5' src={trash} alt="state" />
<img className='text5' src={trash} alt="state" />
<img className='text5' src={trash} alt="state" />
<img className='text5' src={trash} alt="state" />
<img className='text5' src={trash} alt="state" />
<img className='text5' src={trash} alt="state" />
<img className='text5' src={trash} alt="state" />
<img className='text5' src={trash} alt="state" />
</div>




<div className='typeone'>
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
<img className='text5' src={edit} alt="state" />
</div>
</div>


</div>

<div className='end'>
    <button className='previous'>Previous</button>
    <Pagenumber title="Page 1 of 10" />
     <button className='next'>Next</button>
</div>


</div>
<Footer />

      </div>
    </div>
    </> );
}
 
export default Projects;