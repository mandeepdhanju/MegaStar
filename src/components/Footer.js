import "../styles/styles.scss"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import flogo from '../images/icon-white-facebook.png'
import inlogo from '../images/icon-white-linkedin.png'
import instagram from '../images/instagram2.png'
import tiktok from '../images/tiktok.png'
import phone1 from '../images/2048px-Circle-icons-phone.svg.png'
import waveblue from '../images//wave-blue-light.png'
import logo2 from '../images/megastar-logo-white.png'
import logo1 from '../images/logo-1.jpg'
import { getYear } from "../styles/utilities/utilities";
function Footer() {
    return (     
      <>
      <div class="waveBlueLine">
      </div>
      <footer id="footer">
        <div className="footer-content">
          <div class="footer-logo img">
            <img src={logo2} alt="" className="logo"/>
          </div>
          <div class="footer-links">
            <ul class="footer-Ulist">

              <li class="footer-social facebook">
                <a href="https://www.facebook.com/megastarsceens?mibextid=ZbWKwL" target="_blank" aria-label="Facebook">
                  <img src={flogo} alt="facebook" />
                </a>
              </li>
              <li class="footer-social linkedin">
                <a href="https://www.linkedin.com/in/megastar-screens-and-blinds-60174326b" target="_blank" aria-label="Linkdin">  
                  <img src={inlogo} alt="linkdin" />
                </a>
              </li>
              <li class="footer-social instagram">
                <a href="https://www.instagram.com/megastar_screens_blinds" target="_blank" aria-label="instagram">  
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li class="footer-social tiktok">
                <a href="https://www.tiktok.com/@megastar_screens_blinds" target="_blank" aria-label="tiktok">  
                  <img src={tiktok} alt="tiktok" />
                </a>
              </li>
              <li class="contact-Us email">
                <a href="/contact" class="email">
                  {/* <i class="demo-icon icon-mail">&#xe800;</i> */}
                 <span><Link className='contactUs' to="/contact">Contact Us</Link></span>
                </a>
              </li>
              <li class="telephone">
                <a href="#0" aria-label="Call">
                  {/* <i class="demo-icon icon-phone-circled">&#xe801;</i> */}
                  <span >+1 778-995-8205</span>
                </a>
              </li>                      
              
              <li className="copyright">
                <span> Copyright {getYear()}. All Rights Reserved</span>
              </li>               
            </ul>
          </div>
        </div>
       
      </footer>
      </>
      )
  }

  
  export default Footer;