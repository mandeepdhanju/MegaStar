// import '../../../../styles/styles.scss';
import "../../../styles/styles.scss";

import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../../components/Header";
import Sliders from "../../../components/Sliders";
import react from "react";

import blind1 from "../../../images/SlidingWindow/window1.jpg";
import blind2 from "../../../images/SlidingWindow/window2.jpg";
import blind3 from "../../../images/SlidingWindow/window3.jpg";
import blind4 from "../../../images/SlidingWindow/window4.jpg";
import blind5 from "../../../images/SlidingWindow/window5.jpg";
import blind6 from "../../../images/SlidingWindow/window6.jpg";
import blind7 from "../../../images/SlidingWindow/window7.jpg";
import blind8 from "../../../images/SlidingWindow/window8.jpg";
import blind9 from "../../../images/SlidingWindow/window9.jpg";
import blind10 from "../../../images/SlidingWindow/window61.jpg";
import blind11 from "../../../images/SlidingWindow/window62.jpg";
import blind12 from "../../../images/SlidingWindow/window63.jpg";
function SlidingWindow() {
  return (
    <div className="slidingWindow">
      <div>
        <Header />
        <Sliders />
      </div>
      {/* <h1>Roller Blinds</h1>  */}
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Sliding Windows</h2>
              <p>
                Sliding windows glide open horizontally from one side to the
                other. Sliding on a track, they require no extra space to
                operate. Sliding windows offer easy and controlled access to
                fresh air and provide excellent energy efficiency when closed.
                <br></br>
                Sliding windows work well along patios, porches, tight walkways
                or anywhere you wouldn’t want an outward swinging window.
                Popular in contemporary- and modern-style homes, sliding windows
                feature clean lines and sleek designs. They can feature large
                panels of unobstructed glass to fit spacious horizontal areas on
                a wall. <br></br>
              </p>
            </div>
            <div className="row">
              <div className="column item">
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
              </div>

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
                  <img className="product-img" src={blind8} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind7} />
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
export default SlidingWindow;
