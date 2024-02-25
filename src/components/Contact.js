import '../styles/styles.scss';
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';
import shake from "../images/shake6.jpg";
// import emaillogo from "../images/email2.png"
import emaillogo from "../images/email.png";
import phone from "../images/newphone.png";
import phone1 from "../images/phone2.png";
function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (

    <div className="contactMe" id="contactMe">
        <Header />
        <Sliders />
    {/* <div className="left">
      <img src={shake} alt="hand shake Image" />
    </div> */}
    <div className="right">
    {/* <a href="/bookConsultation"><button className="btn-primary">
              Book A Consultation
            </button></a> */}
      <Link to="/bookConsultation"><li className="btn-primary">Book A Consultation</li></Link>

      <div className="get-in-touch-container">
        <h2>Get in touch</h2>
      </div>
      <div className="get-in-touch-container">
        <div className="mail-icon-container">
          <img src={emaillogo} alt="Contact" />
        </div>
        <p> megastarscreens@gmail.com</p>
      </div>
      <div class="footer-links">
        <ul class="footer-Ulist">
          <li class="telephone">
            <a href="#0" aria-label="Call">
              {/* <i class="demo-icon icon-phone-circled">&#xe801;</i> */}
              <img src={phone1} alt="phoneNumber" />
              <span >+1 778-995-8205</span>
            </a>
          </li> 
        </ul>  
      </div>

      
      <h2>Address</h2>
      <p>#206-13733 74 Avenue, Surrey <br /><br /> British Columbia Canada</p>

      {/* <div className="social-icon">
        <a class="fa-solid fa-envelope" href="mailto:dhanju.mandeep92@gmail.com"/>
        <a class="fa-brands fa-linkedin-in" href="https://www.linkedin.com/in/mandeep-dhanju" target="_blank" aria-hidden="true"/>
      </div> */}
    </div>
    <div className='image'>
     <img src={waveblue} alt="" className="waveBlueLine"/>
   </div>
  </div>
);
}

export default Contact;
