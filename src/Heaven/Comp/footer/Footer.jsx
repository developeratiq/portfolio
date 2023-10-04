import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaSchool,FaGreaterThan } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

function Footer() {
    return (
        <>

            <section>
                <div className="footerContainer">
                    <div className="footercont">
                        <div className="foothead">
                            <div className="h2">
                                <h1> <FaSchool /> &nbsp;Quckers</h1>
                            </div>
                        </div>
                        <div className="footContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quisquam quod iusto
                                obcaecati placeat consequuntur ex exercitationem, saepe a!</p>
                        </div>
                        <div className="socialinks">
                            <i>
                                <FaTwitter />
                            </i>
                            <i><FaInstagram /></i>
                            <i><FaFacebookSquare /></i>
                        </div>
                    </div>
                    <div className="footercont">
                        <h4>Get In Touch</h4>
                        <div className="contact">
                            <i> <GoLocation /></i>
                            <h1>Adress</h1>
                        </div>
                        <h5>Rampatti Road Shakarpur 847104</h5>
                        <div className="contact">
                            <i><MdEmail></MdEmail></i>
                            <h1>Email</h1>

                        </div>
                        <h5>heavenpSch@yahoo.com</h5>
                        <div className="contact">
                            <i><BsFillTelephoneFill></BsFillTelephoneFill></i>
                            <h1>Phone</h1>
                        </div>
                        <h5>+91 &nbsp; 7845556545</h5>
                    </div>
                    <div className="footercont">
                        <h4>Quick LInks</h4>
                        <ul>
                            <li> <FaGreaterThan></FaGreaterThan> &nbsp; Home</li>
                            <li> <FaGreaterThan></FaGreaterThan> &nbsp; About</li>
                            <li> <FaGreaterThan></FaGreaterThan> &nbsp; OurClases</li>
                            <li><FaGreaterThan></FaGreaterThan> &nbsp; Our Teachers</li>
                            <li><FaGreaterThan></FaGreaterThan> &nbsp; CoNTACT uS</li>
                        </ul>
                    </div>
                    <div className="footercont">
                        <h4>News Letters</h4>
                        <div className="form">
                            <form action="">
                               <div className="input">
                               <input type="text" placeholder='Your Name' />
                               </div>
                               <div className="input">
                               <input type="email" placeholder='Your Email' />
                               </div>
                               <button className='submitbtn'>Submit Now</button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Footer