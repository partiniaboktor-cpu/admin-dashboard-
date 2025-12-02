import React, { Component } from 'react';
import '../Components/Topbox.css' ;

const Topbox = (props) => {
    return ( <>
    
    <div className='box'>
        <h1 className='innertitle'>{props.title1}</h1>
        <h2 className='number'>{props.title2}</h2>
        <h6 className='date'>{props.title3}</h6>
    </div>
    
    
    
    
    
    </> );
}
 
export default Topbox;