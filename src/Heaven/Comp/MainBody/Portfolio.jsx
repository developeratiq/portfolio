import React from 'react'
import file from '../../Assests/events.jpg'

function Portfolio() {
  return (
    <>
     <div className="porfolio-container">
        <div className="img-card">
            <img src={file} alt="" />
            <img src={file} alt="" />
            <img src={file} alt="" />
        </div>
     </div>
    
    </>
  )
}

export default Portfolio