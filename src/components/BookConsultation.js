import '../styles/styles.scss';
import React, { useState } from "react";
import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';
import shake from "../images/shake6.jpg";
// import emaillogo from "../images/email2.png"
import emaillogo from "../images/email.png"
function BookConsultation() {
    return (
        <div className="consultation">
          <div>
          <Header />
          <Sliders />
          </div>
          <h1>This is consultation page</h1>
          <div className='image'>
          <img src={waveblue} alt="" className="waveBlueLine"/>
          </div>       
        </div>
      )
  }
export default BookConsultation;
