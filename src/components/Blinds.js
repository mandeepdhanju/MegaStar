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
import Vienna from "../images/Blinds/vienna.jpg";
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
      {/* <Link to="/bookConsultation"><li className="btn-primary">Book A Consultation</li></Link> */}
      <div className="container">
        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Zebra} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="zebraBlinds">Zebra Shades Blinds</a>
            <p>
              Zebra Blinds are one of the most sought window coverings options
              today. While enjoying in a great views, you may adjust the light
              with zebra blinds in Canada. Their fashionable look significantly
              impacts any room, including your kitchen, office, living room, and
              more. Zebra shades, commonly referred to as banded shades, are
              made from stylish fabric that filters and softens the light. Zebra
              roller shades are an ideal middle ground between blinds and roll
              up shades for blending soft lighting with privacy.
              {/* They are
              usually mounted inside the window frame and there are zebra blinds
              for the outside mount. */}
            </p>
            {/* <a href="zebraBlinds"><button className="btn-primary">
              More Info
            </button></a> */}
            <Link to="/zebraBlinds">
              <li className="btn-primary">More Info</li>
            </Link>
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
            <Link to="/rollerBlinds">
              <li className="btn-primary">More Info</li>
            </Link>
          </div>
        </div>
        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Fauxwood} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="fauxWoodBlinds">Fauxwood Shades Blinds</a>
            <p>
              Faux wood blinds can withstand humidity, moisture, and temperature
              changes without warping or cracking, giving them a functional
              advantage over genuine wood blinds. Since they’re made from PVC
              materials, they’re better suited to kitchens and bathrooms.
              They’re also easy to clean; simply wipe down with soapy water and
              remove dust when needed. They’re available in a wide range of
              colors and woodgrain styles with genuine stains and wood textures.
              With a variety of slat sizes to choose from, faux wood blinds can
              fit most standard-size windows and offer privacy and light
              control.
            </p>
            <Link to="/fauxWoodBlinds">
              <li className="btn-primary">More Info</li>
            </Link>
          </div>
        </div>
        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={HoneyComb} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="honeyCombBlinds">Honey Comb Shades Blinds</a>
            <p>
              Honeycomb blinds, also known as honeycomb shades, are among the
              newest and most advanced styles of blinds available as window
              coverings today. Featuring optimal energy efficiency, these
              cellular shades were designed to provide improved temperature
              control regardless of the season or climate. As such, honeycomb
              blinds are a great choice for window coverings for both
              residential and commercial properties and for all types of windows
              including skylights and uniquely-shaped windows.
            </p>
            <Link to="/honeyCombBlinds">
              <li className="btn-primary">More Info</li>
            </Link>
          </div>
        </div>

        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Vienna} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="viennaBlinds">Vienna Shades Blinds</a>
            <p>
              Vienna shades feature horizontal vanes suspended by two sheer
              panels of fabric. While the sheer panels offer UV protection and
              gently diffuse light, the opaque vanes offer complete control over
              the desired level of privacy as they are raised and lowered. 
              Enjoy a veiled view of the outdoors with the shades aligned to let in
              light, or lower them completely for enhanced privacy. When fully
              raised, they fit snugly into the contoured headrail.
            </p>
            <Link to="/viennaBlinds">
              <li className="btn-primary">More Info</li>
            </Link>
          </div>
        </div>

        <div className="project-container">
          <div className="item zebra-blinds">
            <img src={Solar} alt="Zebra Shades" />
          </div>
          <div className="info">
            <a href="solarBlinds">Solar Shades Blinds</a>
            <p>
              Indoor solar shades are the perfect choice in rooms where you want
              to reduce glare and ultraviolet (UV) rays. Solar shades are
              designed to cut down on harmful sun rays while still maintain your
              view outside. Reducing glare is ideal for home theaters, media
              rooms, and home offices where annoying glares on a screen can
              disrupt the experience. Solar shades also block UV rays, control
              heat buildup, and even protect furniture.
            </p>
            <Link to="/solarBlinds">
              <li className="btn-primary">More Info</li>
            </Link>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}

export default Blinds;
