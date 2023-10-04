import React from 'react'
import Clas from './Clas.json'

function Classes() {
    return (
        <section className='classes'>
            <div className="headpart">
                <h1>Our Classes and Next parts</h1>
            </div>

           <div className="nextpart">
           <div className="text-center pb-2 teach">
                <p className="section-title px-5"><span className="px-2 ourteachers ">Popular Classes </span></p>
                <h1 className="mb-4  ">Classes of your Kids</h1>
            </div>
            <div className="flexbox">
               {
                Clas.map((x)=>(
                    <>
                     <div className="flexcontainer">
                      <div className="image">
                        <img src={x.img} alt="" />
                      </div>
                      <div className="classcontent">
                        <h1>{x.class}</h1>
                        <p>{x.content}</p>
                      </div>
                      <hr />
                      <div className="table">
                         <div className="columns">
                           <h3> Age of students </h3>
                           
                           <h5>{x.ageofKids}</h5>
                         </div>
                         
                         <div className="columns">
                           <h3> number of students </h3>
                           <h5>{x.NumOfKids}</h5>
                         </div>
                         <div className="columns">
                           <h3> class Timing </h3>
                           <h5>{x.classTime}</h5>
                         </div>
                         
                      </div>
                    </div>
                    </>
                ))
               }
               
            </div>
           </div>

        </section>
    )
}

export default Classes