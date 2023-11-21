import React, { Component, useRef } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../styles/styles.scss";
import waveblue from "../images//wave-blue-light.png";
import Header from "../components/Header";
import Sliders from "../components/Sliders";

import Zebra from "../images/Blinds/ZebraShade.jpg";
import Roller from "../images/Blinds/roller.jpg";
import Fauxwood from "../images/Blinds/Faux-Wood-Blinds.jpg";
import HoneyComb from "../images/Blinds/honeycomb-cellular-shades.jpg";
import Vienna from "../images/Blinds/Vienna.jpg";
import Solar from "../images/Blinds/SlolarShade.jpg";

function Blinds({ menuOpen, setMenuOpen }) {
  const dropdownMenuRef = useRef();
  const handleDropdown = () => {
    dropdownMenuRef.current.classList.toggle("show");
  };
  return (
    <div className="blinds">
      <div>
        <Header />
        <Sliders />
      </div>
      <h2 className="title">About Blinds</h2>
      <ul></ul>
      <div className="container">
        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Zebra} alt="Zebra Shades" />
            {/* <a href="zebraBlinds">Zebra Blinds</a> */}
          </div>
          <div className="info">
            <a href="zebraBlinds">Zebra Shades Blinds</a>
            <p>
              For a stylish spin on a roller shade, try a transitional shade in
              Detroit. Dual panels of fabric easily roll up and down so you can
              scroll between translucent sheer and opaque blackout shades. When
              you want to let the light in, adjust the shade panels so you see
              “zebra” stripes. Then when you want to block out glare, just tug
              the shade slightly up or down, and the privacy sections will align
              to block the outside. If you want an unobstructed view, just slide
              the shade up like a traditional roller blind.
            </p>
            <a href="zebraBlinds"><button className="btn-primary">
              More Info
            </button></a>
          </div>
        </div>
        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Roller} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="rollerBlinds">Roller Shades Blinds</a>
            <p>
              For a stylish spin on a roller shade, try a transitional shade in
              Detroit. Dual panels of fabric easily roll up and down so you can
              scroll between translucent sheer and opaque blackout shades. When
              you want to let the light in, adjust the shade panels so you see
              “zebra” stripes. Then when you want to block out glare, just tug
              the shade slightly up or down, and the privacy sections will align
              to block the outside. If you want an unobstructed view, just slide
              the shade up like a traditional roller blind.
            </p>
            <a href="rollerBlinds"><button className="btn-primary">
              More Info
            </button></a>
          </div>
        </div>
        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Fauxwood} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="fauxWoodBlinds">Fauxwood Shades Blinds</a>
            <p>
              For a stylish spin on a roller shade, try a transitional shade in
              Detroit. Dual panels of fabric easily roll up and down so you can
              scroll between translucent sheer and opaque blackout shades. When
              you want to let the light in, adjust the shade panels so you see
              “zebra” stripes. Then when you want to block out glare, just tug
              the shade slightly up or down, and the privacy sections will align
              to block the outside. If you want an unobstructed view, just slide
              the shade up like a traditional roller blind.
            </p>
            <a href="fauxWoodBlinds"><button className="btn-primary">
              More Info
            </button></a>
          </div>
        </div>
        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={HoneyComb} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="honeyCombBlinds">Honey Comb Shades Blinds</a>
            <p>
              For a stylish spin on a roller shade, try a transitional shade in
              Detroit. Dual panels of fabric easily roll up and down so you can
              scroll between translucent sheer and opaque blackout shades. When
              you want to let the light in, adjust the shade panels so you see
              “zebra” stripes. Then when you want to block out glare, just tug
              the shade slightly up or down, and the privacy sections will align
              to block the outside. If you want an unobstructed view, just slide
              the shade up like a traditional roller blind.
            </p>
            <a href="honeyCombBlinds"><button className="btn-primary">
              More Info
            </button></a>
          </div>
        </div>

        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Vienna} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="viennaBlinds">Vienna Shades Blinds</a>
            <p>
              For a stylish spin on a roller shade, try a transitional shade in
              Detroit. Dual panels of fabric easily roll up and down so you can
              scroll between translucent sheer and opaque blackout shades. When
              you want to let the light in, adjust the shade panels so you see
              “zebra” stripes. Then when you want to block out glare, just tug
              the shade slightly up or down, and the privacy sections will align
              to block the outside. If you want an unobstructed view, just slide
              the shade up like a traditional roller blind.
            </p>
            <a href="viennaBlinds"><button className="btn-primary">
              More Info
            </button></a>
          </div>
        </div>

        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Solar} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="solarBlinds">Solar Comb Shades Blinds</a>
            <p>
              For a stylish spin on a roller shade, try a transitional shade in
              Detroit. Dual panels of fabric easily roll up and down so you can
              scroll between translucent sheer and opaque blackout shades. When
              you want to let the light in, adjust the shade panels so you see
              “zebra” stripes. Then when you want to block out glare, just tug
              the shade slightly up or down, and the privacy sections will align
              to block the outside. If you want an unobstructed view, just slide
              the shade up like a traditional roller blind.
            </p>
            <a href="solarBlinds"><button className="btn-primary">
              More Info
            </button></a>
          </div>
        </div>

        </div>
      
    <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
    </div>
    </div>
  );
}

export default Blinds;
