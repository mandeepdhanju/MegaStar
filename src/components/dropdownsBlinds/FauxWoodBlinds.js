import "../../styles/styles.scss";

import waveblue from "../../images/wave-blue-light.png";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import react from "react";
import fauxwood1 from "../../images/Fauxwood/fauxwoodBlinds1.jpg";
import fauxwood2 from "../../images/Fauxwood/fauxwoodBlinds2.jpg";
import fauxwood3 from "../../images/Fauxwood/fauxwoodBlinds15.jpg";
import fauxwood4 from "../../images/Fauxwood/fauxwoodBlinds4.jpg";
import fauxwood5 from "../../images/Fauxwood/fauxwoodBlinds7.jpg";
import fauxwood6 from "../../images/Fauxwood/fauxwoodBlinds3.jpg";
import fauxwood7 from "../../images/Fauxwood/fauxwoodBlinds13.jpg";
import fauxwood8 from "../../images/Fauxwood/fauxwoodBlinds14.jpg";
import fauxwood9 from "../../images/Fauxwood/fauxwoodBlinds16.jpg";
import fauxwood10 from "../../images/Fauxwood/fauxwoodBlinds10.jpg";
import fauxwood11 from "../../images/Fauxwood/fauxwoodBlinds11.jpg";
import fauxwood12 from "../../images/Fauxwood/fauxwoodBlinds12.jpg";
import fauxwood13 from "../../images/Fauxwood/fauxwoodBlinds13.jpg";
import fauxwood14 from "../../images/Fauxwood/fauxwoodBlinds14.jpg";
import fauxwood15 from "../../images/Fauxwood/fauxwoodBlinds15.jpg";


function FauxWoodBlinds() {
  return (
    <div className="fauxWoodBlinds">
      <div>
        <Header />
        <Sliders />
      </div>
      {/* <h1>Roller Blinds</h1>  */}
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Fauxwood Blinds</h2>
              <p>
                Faux wood blinds are made from a unique composite material that looks and feels
                like real wood but is far more affordable. Faux wood blinds are
                the best choice in bathrooms and other rooms where direct
                contact with water from a shower, bathtub or sink is a
                possibility, since NuWood resists warping caused by contact with
                water. <br></br>
                Faux wood blinds are excellent at keeping glaring sun and
                extreme heat out during the summer, once more with the caveat
                that they need to be fully closed in order to achieve this.{" "}
                <br></br>
                Faux wood blinds are heavier in weight than Real wood blinds,
                this extra weight can become an issue for large windows,
                especially if you are going to lift them frequently. So factor
                in the size of your windows when choosing between real and faux
                wood blinds.<br></br>
                The quality of materials used in the construction of blinds can
                significantly affect their price. Blinds made from high-quality
                materials such as genuine wood, premium fabrics, or specialized
                fabrics with unique properties may be more expensive than blinds
                made from cheaper materials.
              </p>
            </div>
            <div className="row">
              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={fauxwood1} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={fauxwood2} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={fauxwood3} />
                  </div>
                </div>
              </div>

              {/* <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={fauxwood4} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={fauxwood5} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={fauxwood6} />
                  </div>
                </div>
              </div> */}

            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={fauxwood7} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={fauxwood8} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={fauxwood9} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={fauxwood10} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={fauxwood11} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={fauxwood12} />
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
export default FauxWoodBlinds;
