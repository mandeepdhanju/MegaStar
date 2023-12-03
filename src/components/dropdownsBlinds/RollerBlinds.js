import "../../styles/styles.scss";

import waveblue from "../../images/wave-blue-light.png";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import react from "react";
import blind1 from "../../images/Blinds-Verosol-Square-1.jpg";
import blind2 from "../../images/Blinds-Verosol-Square-2.jpg";
import blind3 from "../../images/Blinds-Verosol-Square-3.jpg";
import blind4 from "../../images/Blinds-Verosol-Square-4.jpg";
import blind5 from "../../images/Blinds-Verosol-Square-5.jpg";
import blind6 from "../../images/Blinds-Verosol-Square-6.jpg";
import blind7 from "../../images/Blinds-Verosol-Square-7.jpg";
// import blind8 from "../../images/Blinds-Verosol-Square-8.jpg";
import blind9 from "../../images/Blinds-Verosol-Square-4-1.jpg";

function RollerBlinds() {
  return (
    <div className="rollerBlinds">
      <div>
        <Header />
        <Sliders />
      </div>
      {/* <h1>Roller Blinds</h1>  */}
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
            <h2 className="title">Roller Blinds</h2>
              <p>
                Not all windows are created equal. Often the space for a curtain
                is not available and the functionality of our world-leading
                custom roller blinds is required. Integrated motorised blinds
                are an architect’s delight. With a sleek minimalist look when
                closed, blinds can be almost entirely hidden when open. If your
                requirements include easy-clean, small footprint and the ability
                to reveal a window from the bottom or top, we provide solutions
                from leading brands that you will love. <br></br>
                At Indeko, we offer an enormous range of finishes and options to
                best match your window treatment with your décor. <br></br>
                Design options include blockout roller blinds, screen roller
                blinds, non-transclucent and transclucent roller blinds. Roller
                blinds can be configured as a twin roller blind, screen at the
                back, blockout at the front as well as the option to multi-link
                your blinds.<br></br>
                Roller blinds are the perfect solution to increase privacy or to
                maintain the view, while controlling heat and glare.
              </p>
            </div>
            <div className="row">
              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind1} />
                  </div>
                  {/* <div className="detail">
                                    <h3 className="product-title">BLINDS</h3>
                                </div> */}
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind2} />
                  </div>
                  {/* <div className="detail">
                                    <h3 className="product-title">PATIO DOORS</h3>
                                </div> */}
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind3} />
                  </div>
                  {/* <div className="detail">
                                    <h3 className="product-title">SCREENS</h3>
                                </div> */}
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind4} />
                  </div>
                  {/* <div className="detail">
                                    <h3 className="product-title">BLINDS</h3>
                                </div> */}
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind5} />
                  </div>
                  {/* <div className="detail">
                                    <h3 className="product-title">PATIO DOORS</h3>
                                </div> */}
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={blind6} />
                  </div>
                  {/* <div className="detail">
                                    <h3 className="product-title">SCREENS</h3>
                                </div> */}
                </div>
              </div>
            </div>
            <div className="row">
            <div className="project-container">
              <div className="item zebra-blinds">
                <img src={blind2} alt="Zebra Shades" />
                {/* <a href="zebraBlinds">Zebra Blinds</a> */}
              </div>
              <div className="info">
                <h3>Zebra Shades Blinds</h3>
                <p>
                  For a stylish spin on a roller shade, try a transitional shade in
                  Detroit. Dual panels of fabric easily roll up and down so you can
                  scroll between translucent sheer and opaque blackout shades. When
                  you want to let the light in, adjust the shade panels so you see
                  “zebra” stripes. Then when you want to block out glare, just tug
                  the shade slightly up or down, and the privacy sections will align
                  to block the outside. If you want an unobstructed view, just slide
                  the shade up like a traditional roller blind.
                </p>
                <a href="zebraBlinds"><button className="btn-primary">
                  More Info
                </button></a>
              </div>
            </div>
            <div className="project-container">
              <div className="item zebra-blinds">
                <img src={blind2} alt="Zebra Shades" />
                {/* <a href="zebraBlinds">Zebra Blinds</a> */}
              </div>
              <div className="info">
                <h3>Zebra Shades Blinds</h3>
                <p>
                  For a stylish spin on a roller shade, try a transitional shade in
                  Detroit. Dual panels of fabric easily roll up and down so you can
                  scroll between translucent sheer and opaque blackout shades. When
                  you want to let the light in, adjust the shade panels so you see
                  “zebra” stripes. Then when you want to block out glare, just tug
                  the shade slightly up or down, and the privacy sections will align
                  to block the outside. If you want an unobstructed view, just slide
                  the shade up like a traditional roller blind.
                </p>
                <a href="zebraBlinds"><button className="btn-primary">
                  More Info
                </button></a>
              </div>
            </div>
            <div className="project-container">
              <div className="item zebra-blinds">
                <img src={blind2} alt="Zebra Shades" />
                {/* <a href="zebraBlinds">Zebra Blinds</a> */}
              </div>
              <div className="info">
                <h3>Zebra Shades Blinds</h3>
                <p>
                  For a stylish spin on a roller shade, try a transitional shade in
                  Detroit. Dual panels of fabric easily roll up and down so you can
                  scroll between translucent sheer and opaque blackout shades. When
                  you want to let the light in, adjust the shade panels so you see
                  “zebra” stripes. Then when you want to block out glare, just tug
                  the shade slightly up or down, and the privacy sections will align
                  to block the outside. If you want an unobstructed view, just slide
                  the shade up like a traditional roller blind.
                </p>
                <a href="zebraBlinds"><button className="btn-primary">
                  More Info
                </button></a>
              </div>
            </div>
            </div>
            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind9} />
                </div>
                {/* <div className="detail">
                                    <h3 className="product-title">SCREENS</h3>
                                </div> */}
              </div>
            </div>
            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={blind7} />
                </div>
                {/* <div className="detail">
                                    <h3 className="product-title">SCREENS</h3>
                                </div> */}
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
export default RollerBlinds;
