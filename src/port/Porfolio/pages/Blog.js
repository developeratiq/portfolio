import React from 'react'
import '../Css/Pages.css';
import About from'./About';
import NavBar from '../navBar/NavBar';

function Blog() {
  return (
<>
<NavBar></NavBar>
    <section className="education" id="education">

        <h1 className="heading"> my <span>education</span> </h1>

        <div className="box-container">

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2015</span>
                <h3>Matrric</h3>
                <p> I did my 10th from CKN High School, singhwara ,
                    darbhanga ,bihar. under Bihar State Education Board patna </p>
            </div>

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2017</span>
                <h3>Intermediate</h3>
                <p>I did my 12th from Dr jagannath Mishra college, Chandwara ,
                    Muzaffarpur,bihar. under Bihar State Education Board patna</p>
            </div>



            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2021</span>
                <h3>Btech</h3>
                <p>I did my Mtech from Regional College for Education Research and technology in Computer Science and Engineering, sitapura ,
                    Jaipur ,rajasthan. under rajasthan Technical university kota</p>
            </div>
            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2022</span>
                <h3>Mtech</h3>
                <p> Now i am currently Persuing Mtech From University of Technology   Fatehpura Road,Post Kumhariawas, Vatika, Tehsil Sanganer, Jaipur - 303903</p>
            </div>


        </div>

    </section>
   



</>
  )
}

export default Blog