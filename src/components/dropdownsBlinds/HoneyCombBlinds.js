import "../../styles/styles.scss";

import waveblue from "../../images/wave-blue-light.png";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import react from "react";
import honeycomb1 from "../../images/HoneyComb/honeycomb1.jpg";
import honeycomb2 from "../../images/HoneyComb/honeycomb2.jpg";
import honeycomb3 from "../../images/HoneyComb/honeycomb3.jpg";
import honeycomb4 from "../../images/HoneyComb/honeycomb4.jpg";
import honeycomb5 from "../../images/HoneyComb/honeycomb5.jpg";
import honeycomb6 from "../../images/HoneyComb/honeycomb6.jpg";
import honeycomb7 from "../../images/HoneyComb/honeycomb7.jpg";
import honeycomb8 from "../../images/HoneyComb/honeycomb8.jpg";
import honeycomb9 from "../../images/HoneyComb/honeycomb9.jpg";
import honeycomb10 from "../../images/HoneyComb/honeycomb10.jpg";
import honeycomb11 from "../../images/HoneyComb/honeycomb11.jpg";
import honeycomb12 from "../../images/HoneyComb/honeycomb12.jpg";
import honeycomb13 from "../../images/HoneyComb/honeycomb13.jpg";
import honeycomb14 from "../../images/HoneyComb/honeycomb14.jpg";
import honeycomb15 from "../../images/HoneyComb/honeycomb15.jpg";
import honeycomb16 from "../../images/HoneyComb/honeycomb16.jpg";
import honeycomb17 from "../../images/HoneyComb/honeycomb17.jpg";
import honeycomb18 from "../../images/HoneyComb/honeycomb18.jpg";


function HoneyCombBlinds() {
  return (
    <div className="honeyCombBlinds">
      <div>
        <Header />
        <Sliders />
      </div>
      {/* <h1>Roller Blinds</h1>  */}
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
            <h2 className="title">Honey Comb Blinds</h2>
            <p>
                Honeycomb Shades are the original cellular shades, specifically
                engineered to provide beauty and energy efficiency at the window
                in both cold and warm climates. Their honeycomb construction
                traps air in distinct pockets, which creates insulation that can
                help lower your energy consumption and energy bills <br></br>
                Honeycomb shades are made from one continuous piece of fabric
                and they either roll up or fold up along their crisp pleats.
                Fabric is then bonded together to form the honeycomb shaped
                cells. There's either a single, double or triple layered design
                that traps air between the layers of the shade in individual
                cells to provide insulation. They also come in a variety of
                pleat sizes, colors and light control options from sheer to
                blackout. <br></br>
                Dust and dirt accumulate in the cells, so you need to clean each
                and every cell from the inside. This is not as complicated as it
                sounds, but it still can be challenging. <br></br>
                you can only see shadows of someone standing next to honeycomb
                blinds at night. Blackout honeycomb blinds provide better light
                control by blocking out all the light entering your spaces. They
                are excellent for bedrooms, kids' rooms, and other areas that
                require maximum privacy.<br></br>
              </p>
            </div>
            <div className="row">
              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb1} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb2} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb5} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb16} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb17} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb18} />
                  </div>
                </div>
              </div>

            </div>

            <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb6} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb7} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={honeycomb8} />
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
export default HoneyCombBlinds;
