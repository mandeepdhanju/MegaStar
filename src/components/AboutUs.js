import "../styles/styles.scss";

import waveblue from "../images//wave-blue-light.png";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import bgimage from "../images/Blinds1.jpg";
import paraImg from "../images/3.jpg";
import react from "react";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
      <div className="text">
      <h2 className="title">About Us</h2>
      <p>
        Megastar has a long history of providing inspirational interior and
        exterior design solutions across Lower Mainland for
        over 20 years!<br></br>
        We are a boutique curtain and blind studio known for crafting beautiful
        interiors that are individually designed and boast a large repeat
        customer base. Our work is premium, designer and custom made to suit
        each individual home and customer.<br></br>
        Known as leaders in our industry, we pride ourselves on constantly
        pushing the boundaries in designs and trends but are equally involved in
        a history of traditional fabrications.
      </p>
      <a href="bookConsultation"><button className="btn-primary">
              Book A Consultation
            </button></a>
      </div>
      </div>
      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}
export default AboutUs;
