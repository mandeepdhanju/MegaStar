import "../styles/styles.scss"
import bgimage from '../images/Blinds1.jpg'
import Waves from '../images//waves-top.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { useState } from "react";

function CompanyInfo() {

    return (
        <div className="about-us" style={{ backgroundImage: `url(${bgimage})` }}>
            <img src={Waves} alt="" className="waves-top-divider"/>
            <div className="about-us-container">
                <div className="about-us-column">
                    <h2>Delivering Blinds, Curtains, Windows, Sliding Doors and Screens SINCE 2015.</h2>
                    <div className="text">
                        {/* <p>Sliding doors usually have one or more door panels that 
                            open by gliding along a track or dangling from rollers 
                            fixed on the ceiling.
                        </p> */}
                    </div>
                    <Link to="/aboutUs"><li className="btn-primary">ABOUT US</li></Link>
                    {/* <a href="/aboutUs" className="btn-primary">ABOUT US</a> */}
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo;