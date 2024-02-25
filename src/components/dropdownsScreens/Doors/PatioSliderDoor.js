import "../../../styles/styles.scss";
import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../../components/Header";
import Sliders from "../../../components/Sliders";
import react from "react";

import blind1 from "../../../images/PatioSliderScreen/pattioDoor22.jpg";
import blind2 from "../../../images/PatioSliderScreen/pattioDoor25.jpg";
import blind3 from "../../../images/PatioSliderScreen/pattioDoor24.jpg";
import blind4 from "../../../images/PatioSliderScreen/pattioDoor64.jpg";
import blind5 from "../../../images/PatioSliderScreen/pattioDoor66.jpg";
import blind6 from "../../../images/PatioSliderScreen/pattioDoor41.jpg";
import blind7 from "../../../images/PatioSliderScreen/pattioDoor32.jpg";
import blind8 from "../../../images/PatioSliderScreen/pattioDoor31.jpg";
import blind9 from "../../../images/PatioSliderScreen/pattioDoor46.jpg";
import blind10 from "../../../images/PatioSliderScreen/pattioDoor6.jpg";
import blind11 from "../../../images/PatioSliderScreen/pattioDoor4.jpg";
import blind12 from "../../../images/PatioSliderScreen/pattioDoor5.jpg";
import blind13 from "../../../images/PatioSliderScreen/pattioDoor1.jpg";
import blind14 from "../../../images/PatioSliderScreen/pattioDoor2.jpg";
import blind15 from "../../../images/PatioSliderScreen/pattioDoor1.jpg";
// import blind16 from "../../../images/PatioSliderScreen/pattioDoor1.jpg";
// import blind17 from "../../../images/PatioSliderScreen/pattioDoor2.jpg";
// import blind18 from "../../../images/PatioSliderScreen/pattioDoor1.jpg";
function PatioSliderDoor() {

  return (
    <div className="patioSliderDoor">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Patio Slider Screens</h2>
              <p>
                Custom sliding screen doors are a great way to open your home to
                light and fresh air while keeping bugs and other critters out.
                Screenmobile stocks a wide variety of sliding screen doors that
                are quick to install, long-lasting, durable and fit into many
                types of doorframes. <br></br>
                In addition, Screenmobile can manufacture and install your new
                custom sliding screen doors right at your home, offering
                different frame colors and fabrics to fit your needs. We do this
                by bringing a professional mobile workshop to you for one-stop
                service, giving you the comfort of staying home, all while
                having your screens custom made to fit your doors perfectly.
                You’ll enjoy style, comfort, and convenience with a sliding
                patio screen door or a custom sliding screen door from
                Screenmobile.<br></br>
                All homeowners want easy access to the backyard with a highly
                functional patio screen door. Most sliding screen doors that are
                installed by the builders, tend to fall apart fast. No one wants
                to struggle with a rickety screen door or look at a warped, torn
                screen door. If your sliding screen door is in need of an
                upgrade, Doctor Screen can help! We can get you back out onto
                your patio this spring.
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
export default PatioSliderDoor;
