import React, { Component } from 'react';
import '../Pages/Messages.css' ;
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title' ;
import Pagenumber from '../Components/Pagenumber';

const Messages = () => {
    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
    <Nav />

<div className='top-messages'>
<Title title="Messages" />
<Pagenumber />
</div>











</div>
    </div>
    </> );
}
 
export default Messages;