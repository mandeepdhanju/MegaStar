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
                              <li><a href="slidingWindow">Sliding Window</a></li>
                              <li><a href="handlePushOut">Handle Push Out window</a></li>
                              <li><a href="lipBarScreen">Lip Bar Screen</a></li>
                              <li><a href="tiltTurnWindow">Tilt N Window</a></li>
                            </ul>
                          </li>
                          <li><a href="">Doors</a>
                            <ul className='submenu-2'>
                              <li><a href="patioSliderDoor">Patio Slider Screen</a></li>
                              <li><a href="retractableSingleEntryDoor">Retractable Single Entry Screen</a></li>
                              <li><a href="retractableFrenchDoor">Retractable French Door Screen</a></li>
                              <li><a href="stromDoor">Strom Door Screen</a></li>
                            </ul>
                          </li>
                          {/* <li><a href="">Screens 3</a></li>
                          <li><a href="">Screens 4</a></li> */}
                        </ul>
                        </li></Link>
                       <Link to="/curtains"><li>Curtains</li></Link>             
                       <Link to="/contact"><li>Contact</li></Link> 
              </ul>
            </div> : "" }
        </div></>
      
 
    )
  }
  
  export default Hamburger;
