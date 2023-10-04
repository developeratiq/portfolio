import React, { useState } from 'react';

import './Porfolio/Css/Pages.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from'./Porfolio/pages/Home';
import About from'./Porfolio/pages/About';
import Blog from'./Porfolio/pages/Blog';
import NavBar from './Porfolio/navBar/NavBar';
import Contact from './Porfolio/pages/Contact';
import Cards from'./Porfolio/pages/cardContainer/Cards';
import Projects from './Porfolio/pages/Projects';
function App1() {
     
 

  




  return (
   <>
   {/* <NavBar></NavBar> */}
   <BrowserRouter>
   <Routes>
   <Route path='/' element = {<Home    ></Home>}> </Route>  
    <Route path='/about' element = {<About/>}> </Route>  
    <Route path='/contact' element = {<Contact></Contact>}> </Route>  
    <Route path='/blog' element = {<Blog></Blog>}> </Route> 
    <Route path='/navbar' element = {<NavBar></NavBar>}> </Route> 
    <Route path='/portfolio' element = {<Cards></Cards>}> </Route> 
    <Route path='/projects' element = {<Projects></Projects>}> </Route> 


    </Routes>
   </BrowserRouter>
    </>

  )
}

export default App1