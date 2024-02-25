import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.scss";
import React from "react";
import Slider from "react-slick";
import Waves from '../images//waves.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
function Sliders(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return(
      <div className="hero-slider">
      <Slider {...settings}>
        <div className="slider" id="slider1">
          <div className="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
              {/* <button className="slider-btn">View Products</button>
              <button className="slider-btn">View Services</button> */}
            </div>
          </div>
        </div>
        <div className="slider" id="slider2">
          <div className="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div>
        <div className="slider" id="slider3">
          <div class="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div>
        <div className="slider" id="slider4">
          <div class="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div>
        <div className="slider" id="slider5">
        <div class="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div>
        <div className="slider" id="slider6">
          <div class="slider-container">
            <h2 className="slider-label" >We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div>
        <div className="slider" id="slider7">
          <div class="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div>
        {/* <div className="slider" id="slider8">
          <div class="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div> */}
        {/* <div className="slider" id="slider9">
          <div class="slider-container">
            <h2 className="slider-label">We Design Curtains, Blinds, Window and Patio Door Screens</h2>
            <div className="button-container">
            <Link className='slider-btn' to="/bookConsultation">Book A Consultation</Link>
            </div>
          </div>
        </div> */}
 
  
    </Slider>
    <img src={Waves} alt="" className="waves-divider"/>
    </div>

    )
}
export default Sliders;