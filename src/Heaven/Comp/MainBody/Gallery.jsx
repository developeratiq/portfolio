import React from 'react'
import teacher from '../../Assests/teacher.webp'
import events from '../../Assests/events.jpg'

function Gallery() {
    return (
        <>

<i className="bi bi-0-circle-fill"></i>
 

            <div className="row ">
                <div className="col-lg-3">
                    
                    <img src={events} alt="" />
                </div>
                <div className="col-lg-3">
                    <img src={events} alt="" />
                </div>
                <div className="col-lg-3">
                    <img src={events} alt="" />
                </div>
                <div className="col-lg-3">
                    <img src={events} alt="" />
                </div>  <div className="col-lg-3 m-2">
                    <img src={events} alt="" />
                </div>
            </div>

        </>
    )
}

export default Gallery