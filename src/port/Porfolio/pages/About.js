import React from 'react'
import '../Css/Pages.css';
import Home from './Home';
import NavBar from'../navBar/NavBar'

function About() {
  return (<>
    <NavBar></NavBar>
    {/* <Home></Home> */}

  {/* here is about section */}
  <section className="about" id="about">

        <h1 className="heading"> <span>about</span> me </h1>

        <div className="row">

            <div className="info">s
                <h3> <span> Name : </span> Md Atiqur Rahman </h3>
                <h3> <span> age : </span> 22 </h3>
                <h3> <span> qualification : </span> BTech </h3>
                <h3> <span> post : </span> front end developer </h3>
                <h3> <span> language : </span> Hindi English Urdu </h3>
                <h2 style={{color:'white'}}> <span> InternShip : </span> Six month internship  as a React js Developer in 
                Omninos solutions, Mohali
                 </h2>
                {/* <a href="https://docs.google.com/document/d/1HfXwhkhtJ4C__isC1yqG_0ITSJj30VGK/edit?usp=sharing&ouid=111255979538912366153&rtpof=true&sd=true" target="_blank"><button className="btn"> Download CV <i className="fas fa-download"></i> </button></a> */}
            </div>

            <div className="counter">

                <div className="box">
                    <span>Skills</span>
                    <h3>HTML ,CSs</h3>
                    
                </div>
                <div className="box">
                    <span>Skills</span>
                    <h3>JavaScript </h3>
                    
                </div><div className="box">
                    <span>Skills</span>
                    <h3>React Js </h3>
                    
                </div><div className="box">
                    <span>Skills</span>
                    <h3>Redux /Redux toolkit </h3>
                    
                </div>
   
                <div className="box">
                    <span>5+</span>
                    <h3>Project Completed</h3>
                  
                    
                </div>

              

                

            </div>

        </div>

    </section>


    </>
  )
}

export default About