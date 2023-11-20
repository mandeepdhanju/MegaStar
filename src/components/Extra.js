import { useRef } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Logo from './Logo';
import logo from '../images/vulcan-industries-logo.png'
import logo2 from '../images/logo-2.png'
import logo1 from '../images/logo-1.jpg'
//import machine from '../images/header-slider-img-01.jpg'
import "../styles/styles.scss"
import Hamburger from './Hamburger';


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
                      <li>INSTALL WINDOWS</li>
                      <li>PRODUCT DETAILS</li>
                    </div>
                    <li><a href='#' className='vulcan-logo' style={{backgroundImage: `url(${logo1})`}}>MEGASTARSSCREENS</a></li>
                    <div>
                      <li>+1 712-642-2755</li>
                      <li>Contact Us</li>
                      {/* <li><Link to="/contact">Contact Me</Link></li> */}
                      {/* <li><a href="contact">Contact</a></li> */}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className='header-content'>
              <div className='header-logo'>
                <a href='#' className='vulcan-logo' style={{backgroundImage: `url(${logo2})`}}>MEGASTARSSCREENS</a>
              </div>
              <div className='nav-items'>
                <Hamburger />
          
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" ariaLabel="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                      onClick={handleDropdown}>
                        BLINDS
                      </a>
                      <ul className="dropdown-menu" ref={dropdownMenuRef}>
                        <li><a className="dropdown-item" href="#">Zebra Blinds</a></li>
                        <li><a className="dropdown-item" href="#">Roller Shades</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">SCREENS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">DOORS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">CONTACT</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                      onClick={handleDropdown}>
                        BLINDS
                      </a>
                      <ul className="dropdown-menu" ref={dropdownMenuRef}>
                        <li><a className="dropdown-item" href="#">Zebra Blinds</a></li>
                        <li><a className="dropdown-item" href="#">Roller Shades</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
              
            </div>
          </div>
        </div>

        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" ariaLabel="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                      onClick={handleDropdown}>
                        Dropdown
                      </a>
                      <ul className="dropdown-menu" ref={dropdownMenuRef}>
                        <li><a className="dropdown-item" href="#">Zebra Blinds</a></li>
                        <li><a className="dropdown-item" href="#">Roller Shades</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> */}

        </header>
      )
  }
  
  export default Header;