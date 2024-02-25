import "../styles/styles.scss";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import waveblue from "../images//wave-blue-light.png";
import Header from "./Header";
import Sliders from "./Sliders";
import bgimage from "../images/Blinds1.jpg";
import paraImg from "../images/3.jpg";
import react from "react";

import image from "../images/aboutUs.jpg";
function AboutUs() {
  return (
    <div className="aboutUs">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="text">
          <h2 className="title">About Us</h2>
          <p>
            Megastar has a long history of providing inspirational interior and
            exterior design solutions across Lower Mainland for over 10 years!
            <br></br>
            We are a boutique curtains, blinds and patio door screens known for crafting
            beautiful interiors that are individually designed and boast a large
            repeat customer base. Our work is premium, designer and custom made
            to suit each individual home and customer.<br></br>
            Known as leaders in our industry, we pride ourselves on constantly
            pushing the boundaries in designs and trends but are equally
            involved in a history of traditional fabrications.
          </p>
          {/* <h3>Thank You MegaStar's</h3>
      <a href="bookConsultation"><button className="btn-primary">
              Book A Consultation
            </button></a> */}

          <img src={image} alt="" />
          <h3>Thank You! MegaStar</h3>
          <h4>Request a Free In-Home Consultation</h4>
          <p>
            Provide your contact information and we’ll get back to you in 24
            hours to schedule your free consultation.
          </p>

          {/* <a href="bookConsultation"> */}
            {/* <button className="btn-primary">Book A Consultation</button> */}
            <Link to="/bookConsultation"><li className="btn-primary">Book A Consultation</li></Link>
            
          {/* </a> */}
        </div>
      </div>
      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}
export default AboutUs;
