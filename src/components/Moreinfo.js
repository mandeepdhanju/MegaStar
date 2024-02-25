import "../styles/styles.scss"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import mapimage from '../images/map.jpg'
import waveblue from '../images//wave-blue-light.png'
function MoreInfo() {
    return(
        <div className='more-info'>
            <div className='find-vulcan'>
                <h2>INSTALLED IN A CITY NEAR YOU</h2>
                <a href="https://www.google.com/maps/place/13733+74+Ave,+Surrey,+BC+V3W+1B8" target="_blank" className="more-info-btn">FIND LOCATION</a>
            </div>
            <div className="contact">
                <h2>EXPERIENCE YOU CAN COUNT ON </h2>
                <p>MegaStars experts are experienced in working with architects, builders and homeowners to ensure your vision becomes a reality.</p>
                {/* <a href="contact" className="contact-btn">CONTACT US</a> */}
              <Link to="/contact" className="contact-btn">CONTACT US</Link>
            </div>
            <img src={waveblue} alt="" className="waveBlueLine"/>
        </div>
        
    )
}

export default MoreInfo;