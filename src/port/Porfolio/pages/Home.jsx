import React from 'react'
import '../Css/Pages.css';
import '../navBar/NavBar';
import NavBar from '../navBar/NavBar';
import { Link } from 'react-router-dom';
import About from './About';
import { useEffect } from 'react';

function Home({Toggle,closeNav}) {
  useEffect(()=>{
// closeNav()
  },[])
  // console.log(Toggle)
  // console.log(closeNav)
  return (
  <>
    {/* <NavBar></NavBar> */}
   <section className="home" id="home">

<h3>HI THERE !</h3>
<h1>I'M <span>Md Atiqur Rahman</span></h1>
<p> Developer ,progammer and Cricketer</p>
<Link to= "/about" ><button className="btn">About me <i className="fas fa-user"></i></button></Link>


</section>
  </>
  )
}

export default Home