import React from 'react'
import '../Css/Pages.css';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Blog  from '../pages/Blog';
import Cards from '../pages/cardContainer/Cards';
import profile from '../PROFILE.png'
import { useEffect } from 'react';



const nav =<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>
const close =<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>


function NavBar({abc}) {
  const [Toggle, setToggle] = useState(false)

  const navigate = useNavigate()
  useEffect(()=>{

    document.addEventListener('mousedown',(event)=>{
      // console.log(event)
      setToggle(true)
    })
  },[])
 
const handleOpen =(e)=>{
// e.preventDefault()
// setToggle(true)
}




  return (
    <>
      <header className={ Toggle ?"header":"header_go"}>

<div className="user">
    <img src={profile} alt=""/>
    <h3 className="name">Md Atiqur Rahman</h3>
    <p className="post">front end developer</p>
</div>

<nav className="navbar">
    <ul>
       <li className='' >
        <Link className='link'  onClick={(e)=> handleOpen(e)}   to="/">Home</Link>
       </li>
       <li >
        <Link  className='link' onClick={(e)=> handleOpen(e)}   to="/about">About</Link>
       </li>
       {/* <li>
        <Link className='link'  onClick={(e)=> handleOpen(e)}  to="/portfolio">Portfolio</Link>
       </li> */}
       <li >
        <Link className='link' onClick={(e)=> handleOpen(e)}   to="/projects">Projects</Link>
       </li>
       <li >
        <Link className='link'  onClick={(e)=> handleOpen(e)}  to="/blog">Education</Link>
       </li>
       <li >
        <Link className='link' onClick={(e)=> handleOpen(e)}   to="/contact">Contact</Link>
       </li>
    </ul>
    
</nav>

<div id="close" className="fas fa-bars"    onClick={()=>setToggle(true)}>
{close}

</div>
</header>

{/* <!-- header section ends --> */}

<div id="menu" className="fas fa-bars"    onClick={()=>setToggle(false)}>
{nav}

</div>
    
    
    </>
  )
}

export default NavBar