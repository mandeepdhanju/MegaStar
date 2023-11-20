import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/styles.scss';
import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';

function BookConsultation() {
 
    return (
    <div className="consultation">
      <div>
      <Header />
      <Sliders />
      </div> 
      <h1>This is a Consultation Page</h1>
      <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
      </div>  
    </div>
    )
  }

export default BookConsultation
