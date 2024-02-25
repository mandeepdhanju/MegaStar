import "../../../styles/styles.scss";
import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../../components/Header";
import Sliders from "../../../components/Sliders";
import react from "react";

import blind1 from "../../../images/Retractable SingleDoor/door1.jpg";
import blind2 from "../../../images/Retractable SingleDoor/door2.jpg";
import blind3 from "../../../images/Retractable SingleDoor/door3.jpg";
import blind4 from "../../../images/Retractable SingleDoor/door4.jpg";
import blind5 from "../../../images/Retractable SingleDoor/door5.jpg";
import blind6 from "../../../images/Retractable SingleDoor/door6.jpg";
import blind7 from "../../../images/Retractable SingleDoor/door7.jpg";
import blind8 from "../../../images/Retractable SingleDoor/door8.jpg";
import blind9 from "../../../images/Retractable SingleDoor/door9.jpg";
import blind10 from "../../../images/Retractable SingleDoor/door10.jpg";
import blind11 from "../../../images/Retractable SingleDoor/door11.jpg";
import blind12 from "../../../images/Retractable SingleDoor/door12.jpg";

function RetractableSingleEntryDoor() {
  return (
    <div className="retractableSingleDoor">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Retractable Single Entry Doors</h2>
              <p>
                Are you in need of a screen door that does not draw a lot of
                attention or distract from your home’s current architectural
                style? If so, you may want to consider our single retractable
                screen doors at Dreamscreens. Our screen doors are made with a
                low-profile design that is meant to blend in perfectly with your
                door frame, helping to keep the screen out of view. <br></br>
                Since your screen is retractable, you can keep it hidden when it
                is not in use, allowing for an unobstructed doorway. When you
                want to use it, simply pull it across and our full length magnet
                will automatically catch, allowing you to benefit from fresh air
                flowing through your home without the worry of bugs.<br></br>
                We offer easy-to-use screen doors that are made with a
                top-quality design and durable components. Our single
                retractable screen doors have a maximum height of 100″, and they
                come in a wide range of colors. You can make your choice of
                whether you want your screen door mounted within the door frame
                or on the surface of the frame. Single door screens are ideal
                for entry doors, single garden doors, sliding patio doors, tilt
                and turn doors, and large windows.
                <br></br>
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

            {/* <div className="column item">
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
export default RetractableSingleEntryDoor;
