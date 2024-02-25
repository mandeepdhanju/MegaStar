import "../../../styles/styles.scss";
import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../Header";
import Sliders from "../../Sliders";
import react from "react";
import blind1 from "../../../images/StormDoor/door1.jpg";
import blind2 from "../../../images/StormDoor/door2.jpg";
import blind3 from "../../../images/StormDoor/door3.jpg";
import blind4 from "../../../images/StormDoor/door4.jpg";
import blind5 from "../../../images/StormDoor/door5.jpg";
import blind6 from "../../../images/StormDoor/door6.jpg";
import blind7 from "../../../images/StormDoor/door7.jpg";
import blind8 from "../../../images/StormDoor/door8.jpg";
import blind9 from "../../../images/StormDoor/door9.jpg";
import blind10 from "../../../images/StormDoor/door10.jpg";
import blind11 from "../../../images/StormDoor/door11.jpg";
import blind12 from "../../../images/StormDoor/door12.jpg";

function Stormdoor() {
  return (
    <div className="stormdoor">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Storm Doors</h2>
              <p>
                Storm doors provide added protection from harsh weather and
                additional ventilation when it’s nice out. Lisbon Storm, Screen
                & Door is an authorized dealer for the best storm door brands in
                the industry. We have incredibly competitive pricing on new,
                replacement, and reclaimed storm doors. <br></br>A storm door
                protects your exterior door from the elements and gives an
                entryway additional curb appeal. Most types can also provide
                ventilation. A huge selection of options makes it easy to find
                the best storm door for your home. We’ll show you what you need
                to know when shopping for a storm door.<br></br>
                Without a doubt, Larson patio storm doors are your solution for
                energy efficiency. Thanks to an air space barrier that provides
                additional insulation, these doors reduce your home’s heat loss
                in the winter and reduce overall air infiltration year-round.
                <br></br>
                Storm doors come in a variety of colors that let you find the
                best look to complement your home, including white, brown,
                black, almond, sandstone and graphite.
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
          </div>
        </div>
      </div>
      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}
export default Stormdoor;
