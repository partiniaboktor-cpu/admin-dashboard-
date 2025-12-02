import React, { Component } from 'react';
import '../Components/Darkbutton.css';

const Darkbutton = (props) => {
    return ( 
        <h4 className='db'>{props.title}</h4>
     );
}
 
export default Darkbutton;