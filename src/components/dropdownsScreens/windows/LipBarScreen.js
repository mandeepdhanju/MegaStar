import "../../../styles/styles.scss";

import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../../components/Header";
import Sliders from "../../../components/Sliders";
import react from "react";

import blind1 from "../../../images/LipBarScreens/screen1.jpg";
import blind2 from "../../../images/LipBarScreens/screen2.jpg";
import blind3 from "../../../images/LipBarScreens/screen3.jpg";
import blind4 from "../../../images/LipBarScreens/screen4.jpg";
import blind5 from "../../../images/LipBarScreens/screen5.jpg";
import blind6 from "../../../images/LipBarScreens/screen6.jpg";
import blind7 from "../../../images/LipBarScreens/screen7.jpg";
import blind8 from "../../../images/LipBarScreens/screen8.jpg";
import blind9 from "../../../images/LipBarScreens/screen9.jpg";

function LipBarScreen() {
  return (
    <div className="lipBarScreen">
      <div>
        <Header />
        <Sliders />
      </div>
      {/* <h1>Roller Blinds</h1>  */}
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Lip Bar Screens</h2>
              <p>
                A lip frame window is a type of window screen. Standard lip
                screen frame allows for installation of the window screen on the
                home's exterior. Reverse lip screen frame replacements are
                usually used for the interior of the home.<br></br>
                Screens provide a barrier between your windows and the elements,
                so they can prevent your windows from collecting dust, dirt, and
                grime—but only when your screens are clean. If they are dirty,
                your windows will get splattered with grimy water during the
                next storm. <br></br>
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
          </div>
        </div>
      </div>
      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}
export default LipBarScreen;
