import { BrowserRouter, Route, Link } from 'react-router-dom';
import "../styles/styles.scss"
import { useState, link } from "react";

function Hamburger(){

  const [isActive, setActive] = useState(false)

    function openMenu(){
        document.body.classList.toggle('show')
        setActive(!isActive)
    }

    return (
      <><div className={`hamburger-menu ${isActive ? "is-active" : ""}`} onClick={openMenu}>
        <div className="line-menu half top"></div>
        <div className="line-menu middle"></div>
        <div className="line-menu half bottom"></div>
      </div><div>
          {isActive ?
            <div className="menu-dropdown">
              <ul className="menu-list">
                <Link to="/home" style={{textDecoration:'none'}}><li>Home</li></Link>
                <Link to="/aboutUs" style={{textDecoration:'none'}}><li>About</li></Link>
                <Link to="/blinds" style={{textDecoration:'none'}}><li>Blinds
                        <ul class="submenu-1">
                          <li><Link to="/zebraBlinds" >Zebra Blinds</Link></li>
                          <li><Link to="/rollerBlinds">Roller Blinds</Link></li>
                          <li><Link to="/fauxWoodBlinds">Fauxwood Blinds</Link></li>
                          <li><Link to="/honeyCombBlinds">Honey Comb Blinds</Link></li>
                          <li><Link to="/viennaBlinds">Vienna Blinds</Link></li>
                          <li><Link to="/solarBlinds">Solar Blinds</Link></li>
                        </ul>
                        </li>
                        </Link>

                       <Link to="" style={{textDecoration:'none'}}><li>Screens 
                       <ul class="submenu-1">
                          <li><a href="">Windows</a>
                            <ul className='submenu-2'>
                              <li><Link to="/slidingWindow">Sliding Windows</Link></li>
                              <li><Link to="/handlePushOut">Handle Push Out Windows</Link></li>
                              <li><Link to="/lipBarScreen">Lip Bar Screens</Link></li>
                              <li><Link to="/tiltTurnWindow">Tilt Turn Windows</Link></li>
                            </ul>
                          </li>
                          <li><a href="" >Doors</a>
                            <ul className='submenu-2'>
                              <li><Link to="/patioSliderDoor">Patio Slider Screens</Link></li>
                              <li><Link to="/retractableSingleEntryDoor">Retractable Single Entry Screens</Link></li>
                              <li><Link to="/retractableFrenchDoor">Retractable French Door Screens</Link></li>
                              <li><Link to="/stormDoor">Storm Door Screens</Link></li>
                            </ul>
                          </li>
                        </ul>
                        </li></Link>
                       <Link to="/curtains" style={{textDecoration:'none'}}><li>Curtains</li></Link>             
                       <Link to="/contact" style={{textDecoration:'none'}}><li>Contact</li></Link> 
              </ul>
            </div> : "" }
        </div></>
      
 
    )
  }
  
  export default Hamburger;
