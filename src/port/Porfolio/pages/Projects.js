import React from 'react'
import NavBar from '../navBar/NavBar'
import data from './data'
import { Link } from 'react-router-dom'

function Projects() {
  const arr =[1,2,3,4,5]
  return (
    <>
    {/* <NavBar/> */}
    
    <div className="projectscontainer">
    <h1 className="heading"> <span>My</span> Projects </h1>
    <hr />

    <div className="p-innercont">
      {
        data&&data.map((abc)=>(

     <Link to={abc.links} target='__blank'>
      <div className="pcards">
        <img src={abc.images} alt="" />
      <h4>{abc.projectsName}</h4>
      <div className="p-contents">
        <p>{abc.About}</p>
      </div>
      </div>
     </Link>

        ))
      }

    </div>
    </div>
    </>
  )
}

export default Projects