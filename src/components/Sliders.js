import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.scss";
import React from "react";
import Slider from "react-slick";
import Waves from '../images//waves.png';

function Sliders(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      };

    return(
      <div className="hero-slider">
      <Slider {...settings}>
        <div className="slider" id="slider1">
          <div className="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
              <button className="slider-btn">View Products</button>
              <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div>
        <div className="slider" id="slider2">
          <div className="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
            <button className="slider-btn">View Products</button>
            <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div>
        <div className="slider" id="slider3">
          <div class="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
            <button className="slider-btn">View Products</button>
            <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div>
        <div className="slider" id="slider4">
          <div class="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
            <button className="slider-btn">View Products</button>
            <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div>
        <div className="slider" id="slider5">
          <div class="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
            <button className="slider-btn">View Products</button>
            <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div>
        <div className="slider" id="slider6">
          <div class="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
            <button className="slider-btn">View Products</button>
            <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div>
        {/* <div className="slider" id="slider7">
          <div class="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
            <button className="slider-btn">View Products</button>
            <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div> */}
        <div className="slider" id="slider8">
          <div class="slider-container">
            <h2 className="slider-label">We Design Blinds, Screens, and Patio Doors</h2>
            <div className="button-container">
            <button className="slider-btn">View Products</button>
            <button className="slider-btn">View Services</button>
            </div>
          </div>
        </div>
    </Slider>
    <img src={Waves} alt="" className="waves-divider"/>
    </div>

    )
}
export default Sliders;