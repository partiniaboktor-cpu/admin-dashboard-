import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home' ;
import Projects from './Pages/Projects';
import Editproject from './Pages/Editproject';
import Profile from './Pages/Profile';
import Messages from './Pages/Messages';
import CategoriesTagsPages from './Pages/CategoriesTagsPages';

const RoutingApp = () => {
    return ( <>
    
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login-dashboard-24' element={<Login />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/editprojects' element={<Editproject />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/Categories' element={<CategoriesTagsPages />} />

    
      </Routes>
    </BrowserRouter>
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default RoutingApp;