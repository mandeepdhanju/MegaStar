import "../../../styles/styles.scss";
import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../Header";
import Sliders from "../../Sliders";
import react from "react";
import Zebra from "../../../images/Blinds/ZebraShade.jpg";

import blind1 from "../../../images/HandlePushOut/window31.jpg";
import blind2 from "../../../images/HandlePushOut/window32.jpg";
import blind3 from "../../../images/HandlePushOut/window33.jpg";
import blind4 from "../../../images/HandlePushOut/window7.jpg";
import blind5 from "../../../images/HandlePushOut/window6.jpg";
import blind6 from "../../../images/HandlePushOut/window5.jpg";
import blind7 from "../../../images/HandlePushOut/window1.jpg";
import blind8 from "../../../images/HandlePushOut/window.jpg";
import blind9 from "../../../images/HandlePushOut/window1.jpg";

function HandlePushOut() {
  return (
    <div className="handlePushOut">
      <div>
        <Header />
        <Sliders />
      </div>
      {/* <h1>Roller Blinds</h1>  */}
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Handle Push Out Windows</h2>
              <p>
                Push Out window pushes open from the center like a French door
                and secures the window at multiple, pre-set opening angles to
                prevent it from blowing wide open even on the windiest day.
                <br></br>
                Magnetic screens are the perfect window insect screen solution
                for your push out windows and are discreet, made of high quality
                materials, and can be made to fit most window sizes. They come
                in attractive styles to help match your home, while also still
                being very easy to take care of and maintain.    <br></br>
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
export default HandlePushOut;
