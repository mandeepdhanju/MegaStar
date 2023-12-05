import { BrowserRouter, Route, Link } from 'react-router-dom';
import Logo from './Logo';
import logo from '../images/vulcan-industries-logo.png'
import logo2 from '../images/megastar-logo.png'
import logo1 from '../images/megastar-logo-white.png'
//import machine from '../images/header-slider-img-01.jpg'
import "../styles/styles.scss"
import Hamburger from './Hamburger';
import { useRef } from 'react';
import React, { Component } from "react";


function Header({menuOpen, setMenuOpen}) {
  const dropdownMenuRef = useRef(); 

  const handleDropdown = () => {
    dropdownMenuRef.current.classList.toggle("show");
  }
    return (
        <header>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"/>  */}
          <div className='header-container'>
            <div className='header-contact'>
              <div className='header-contact-items'>
                <div className='header-contact-links'>
                  <ul className='header-contact-list'>
                    <div>
                      <li><Link className='cosultation-link' to="/bookConsultation">Book A Consultation</Link></li>
                      {/* <li>Product Detals</li> */}
                    </div>
                    <div className='phoneNumber'>
                      <li>+1 712-642-2755</li>
                      <li><Link className='contactUs' to="/contact">Contact Us</Link></li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className='header-content'>
              <a href='/' className='logo-mobile'><img src={logo1}/></a>
              <div className='nav-items'>
                <Hamburger />
                          
                <div className="menu-desktop">
                <a href='/' className='logo-main'><img src={logo2}/></a>
                  <ul className="menu-list-desktop" >
                      <Link to="/home"><li>Home</li></Link>
                      <Link to="/aboutUs"><li>About</li></Link>
                      <Link to="/blinds">
                        <li>Blinds
                        <ul class="submenu-1">
                          <li><Link to="/zebraBlinds">Zebra Blinds</Link></li>
                          <li><Link to="/rollerBlinds">Roller Blinds</Link></li>
                          <li><Link to="/fauxWoodBlinds">Fauxwood Blinds</Link></li>
                          <li><Link to="/honeyCombBlinds">Honey Comb Blinds</Link></li>
                          <li><Link to="/viennaBlinds">Vienna Blinds</Link></li>
                          <li><Link to="/solarBlinds">Solar Blinds</Link></li>
                        </ul>
                        </li>
                        </Link>
                       <Link to="">
                        <li>Screens
                       <ul class="submenu-1">
                          <li><a href="">Windows</a>
                            <ul className='submenu-2'>
                              <li><Link to="/slidingWindow">Sliding Window</Link></li>
                              <li><Link to="/handlePushOut">Handle Push Out window</Link></li>
                              <li><Link to="/lipBarScreen">Lip Bar Screen</Link></li>
                              <li><Link to="/tiltTurnWindow">Tilt N Window</Link></li>
                            </ul>
                          </li>
                          <li><a href="">Doors</a>
                            <ul className='submenu-2'>
                              <li><Link to="/patioSliderDoor">Patio Slider Screen</Link></li>
                              <li> <Link to="/retractableSingleEntryDoor">Retractable Single Entry Screen</Link></li>
                              <li> <Link to="/retractableFrenchDoor">Retractable French Door Screen</Link></li>
                              <li> <Link to="/stromDoor">Strom Door Screen</Link></li>
                            </ul>
                          </li>
                        </ul>
                        </li></Link>
                       <Link to="/curtains"><li>Curtains</li></Link>             
                       <Link to="/contact"><li>Contact</li></Link> 
                                 
                  </ul>
              </div>
            </div>
          </div>
        </div>  
        </header>
      )
  }
  
  export default Header;