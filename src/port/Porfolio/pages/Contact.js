import React from 'react'
import '../Css/Pages.css';
import Blog from './Blog';
import NavBar from '../navBar/NavBar';
import Cards from './cardContainer/Cards';
function Contact() {
  return (
    <>
      <NavBar></NavBar>
    {/* <Blog></Blog>
    <Cards></Cards> */}
    <section className="contact" id="contact">

<h1 className="heading"> <span>contact</span> me </h1>

<div className="row">

    <div className="content">

        <h3 className="title">contact info</h3>

        <div className="info">
            <h3> <i className="fas fa-envelope"></i> atiqur.mdrahaman@gmail.com </h3>
            <h3> <i className="fas fa-phone"></i> +91- 6378493754 </h3>
            <h3> <i className="fas fa-phone"></i> +91- 9122038950 </h3>
            <h3> <i className="fas fa-map-marker-alt"></i> Jaipur, india - 302033. </h3>
        </div>

    </div>

    <form action="https://formspree.io/f/xknebevl" method="post" target='_blank'>

        <input type="text" name="Name" placeholder="name" className="box"/>
        <input type="email"  name="Email" placeholder="email" className="box"/>
        <input type="text" placeholder="project" className="box"/>
        <textarea name="text" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
        <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

    </form>

</div>

</section>
<a href="#home" className="top">
        <img src="images/scroll-top-img.png" alt=""/>
    </a>
    
    </>
  )
}

export default Contact