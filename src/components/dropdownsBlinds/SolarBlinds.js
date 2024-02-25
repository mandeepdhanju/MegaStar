import "../../styles/styles.scss";

import waveblue from "../../images/wave-blue-light.png";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import react from "react";

import blind1 from "../../images/Solars/solar1.jpg";
import blind2 from "../../images/Solars/solar2.jpg";
import blind3 from "../../images/Solars/solar3.jpg";
import blind4 from "../../images/Solars/solar4.jpg";
import blind5 from "../../images/Solars/solar5.jpg";
import blind6 from "../../images/Solars/solar6.jpg";
import blind7 from "../../images/Solars/solar7.jpg";
import blind8 from "../../images/Solars/solar8.jpg";
import blind9 from "../../images/Solars/solar9.jpg";
import blind10 from "../../images/Solars/solar10.jpg";
import blind11 from "../../images/Solars/solar11.jpg";
import blind12 from "../../images/Solars/solar12.jpg";
import blind13 from "../../images/Solars/solar13.jpg";
import blind14 from "../../images/Solars/solar14.jpg";
import blind15 from "../../images/Solars/solar15.jpg";

function SolarBlinds() {
  return (
    <div className="solarBlinds">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Solar Blinds</h2>
              <p>
                Solar shades are a sleek and stylish way to protect your
                property from the sun’s UV rays. Lower them during the hottest
                parts of the day to stop interiors from fading and eliminate
                glare on electronics. <br></br>
                Designed with impeccable energy efficiency, they’re excellent at
                insulating homes and businesses from the summer sun. This makes
                for enhanced cooling and temperature control, significantly
                lowering energy bills and the use of your HVAC system.<br></br>
                With hundreds of options to choose from, finding a modern way to
                spruce up your windows is easy at Express Blinds.<br></br>
                An innovative pairing with drapes on windows of all shapes and
                sizes, they softly disperse light while giving you ample
                privacy. Enjoy unobstructed views and protection from the
                outside world, looking in.
              </p>
            </div>
            <div className="row">

              {/* <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind1} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind2} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind3} />
                  </div>
                </div>
              </div> */}
{/* 
              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind4} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind5} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind6} />
                  </div>
                </div>
              </div> */}

            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind7} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind8} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind9} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind10} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind11} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind12} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind13} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind14} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind15} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}
export default SolarBlinds;
