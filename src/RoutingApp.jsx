import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home' ;
import Projects from './Pages/Projects';
import Editproject from './Pages/Editproject';
import Profile from './Pages/Profile';
import Messages from './Pages/Messages';
import CategoriesTagsPages from './Pages/CategoriesTagsPages';
import HomeAR from './Pages/HomeAR';
import MessagesAR from './Pages/MessagesAR';
import ProfileAR from './Pages/ProfileAR';
import CategoriesAR from './Pages/CategoriesAR';
import ProjectsAR from './Pages/ProjectsAR';
import Skills from './Pages/Skills';
import Messagedetail from './Pages/Messagedetail';
import Settings from './Pages/Settings';
import Newproject from './Pages/Newproject';


const RoutingApp = () => {
    return ( <>
    
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/editprojects' element={<Editproject />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/Categories' element={<CategoriesTagsPages />} />
        <Route path='/arabichome' element={<HomeAR />} />
        <Route path='/arabicmessages' element={<MessagesAR />} />
        <Route path='/arabicprofile' element={<ProfileAR />} />
        <Route path='/arabiccategory' element={<CategoriesAR />} />
        <Route path='/arabicprojects' element={<ProjectsAR />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/messagedetail' element={<Messagedetail />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/newproject' element={<Newproject />} />

    
      </Routes>
    </BrowserRouter>
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default RoutingApp;