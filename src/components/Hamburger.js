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
                {/* <link to="/home"><li>Home</li></link> */}
                <li>Home</li>
                <li>About</li>
                <li>Blinds</li>
                <li>Screens</li>
                <li>Curtains</li>
                <li>Contact</li>
              </ul>
            </div> : "" }
        </div></>
      
 
    )
  }
  
  export default Hamburger;
