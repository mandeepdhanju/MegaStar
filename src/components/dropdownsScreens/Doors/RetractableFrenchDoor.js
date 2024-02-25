import "../../../styles/styles.scss";
import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../../components/Header";
import Sliders from "../../../components/Sliders";
import react from "react";

import blind1 from "../../../images/RetractableFrenchDoor/door1.jpg";
import blind2 from "../../../images/RetractableFrenchDoor/door2.jpg";
import blind3 from "../../../images/RetractableFrenchDoor/door3.jpg";
import blind4 from "../../../images/RetractableFrenchDoor/door4.jpg";
import blind5 from "../../../images/RetractableFrenchDoor/door5.jpg";
import blind6 from "../../../images/RetractableFrenchDoor/door6.jpg";
import blind7 from "../../../images/RetractableFrenchDoor/door7.jpg";
import blind8 from "../../../images/RetractableFrenchDoor/door8.jpg";
import blind9 from "../../../images/RetractableFrenchDoor/door9.jpg";
import blind10 from "../../../images/RetractableFrenchDoor/door10.jpg";
import blind11 from "../../../images/RetractableFrenchDoor/door11.jpg";
import blind12 from "../../../images/RetractableFrenchDoor/door12.jpg";
import blind13 from "../../../images/RetractableFrenchDoor/door13.jpg";
import blind14 from "../../../images/RetractableFrenchDoor/door14.jpg";
import blind15 from "../../../images/RetractableFrenchDoor/door15.jpg";

function RetractableFrenchDoor() {
  return (
    <div className="retractableFrenchDoor">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Retractable French Doors</h2>
              <p>
                Our French door screens meet in the middle of the doorway and
                are held together with the use of a full-length magnetic seal
                that runs from top to bottom, when in use. Our stop pins give
                you the option of opening one or both sides of your French door.<br></br>
                Dreamscreens square construction blends in perfectly with all
                door frames and does not detract from the beauty of your door.
                You have the option of mounting your double retractable screen
                door inside the door frame as a flush mount, or on the frame’s
                surface as a surface mount. <br></br>
               
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

              {/* <div className="column item">
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

            {/* <div className="column item">
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
            </div> */}

          </div>
        </div>
      </div>
      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}
export default RetractableFrenchDoor;
