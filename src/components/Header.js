import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Logo from './Logo';
import logo from '../images/vulcan-industries-logo.png'
import logo2 from '../images/megastar-logo.png'
import logo1 from '../images/megastar-logo-white.png'
//import machine from '../images/header-slider-img-01.jpg'
import "../styles/styles.scss"
import Hamburger from './Hamburger';
import { useRef } from 'react';


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
                      <li><Link className='cosultation-link' to="/bookConsultation">Book a Consultation</Link></li>
                      <li>Product Detals</li>
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
            {/* <div className='header-logo'>
                <a href='#' className='vulcan-logo' style={{backgroundImage: `url(${logo1})`}}>MEGASTARSSCREENS</a>
              </div> */}
              <a href='/' className='logo-mobile'><img src={logo1}/></a>
              <div className='nav-items'>
                <Hamburger />
                          
                <div className="menu-desktop">
                <a href='/' className='logo-main'><img src={logo2}/></a>
                  <ul className="menu-list-desktop" >
                       <Link to="/aboutUs"><li>About</li></Link>
                       {/* <Link to="/blinds"><li onClick={() =>setMenuOpen(!menuOpen)}>Blinds</li></Link> */}
                      <Link to="/blinds"><li>Blinds
                        <ul class="submenu-1">
                          <li><a href="">Zebra Blinds</a></li>
                        </ul>
                        </li></Link>
                       <Link to="/screens"><li>Screens
                       <ul class="submenu-1">
                          <li><a href="">Screens 1</a></li>
                          <li><a href="">Screens 2</a>
                            <ul className='submenu-2'>
                              <li><a href="">Screens 2-A</a></li>
                              <li><a href="">Screens 2-B</a></li>
                              <li><a href="">Screens 2-C</a></li>
                            </ul>
                          </li>
                          <li><a href="">Screens 3</a></li>
                          <li><a href="">Screens 4</a></li>
                        </ul>
                        </li></Link>
                       <Link to="/curtains"><li>Curtains</li></Link>             
                       <Link to="/contact"><li>Contact</li></Link> 
                                 
                  </ul>
              </div>
              {/* {menuOpen &&(
                <div className='blindsList' onClick={() =>setMenuOpen(false)}>
                  <ul>Zebra Blinds</ul>
                  <ul>Roller Shades</ul>
                  <ul>Solar Shades</ul>
                  <ul>Vieana Shades</ul>
                  <ul>Honey Comb Shades</ul>
                  <ul>Faux Wood Blinds</ul>
                </div>          
           )}  */}
              
            </div>
          </div>
        </div>  
        </header>
      )
  }
  
  export default Header;