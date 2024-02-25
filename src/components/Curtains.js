import "../styles/styles.scss";
import waveblue from "../images//wave-blue-light.png";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import curtains1 from "../images/Curtain/curtains1.jpg";
import curtains2 from "../images/Curtain/curtains2.jpg";
import curtains3 from "../images/Curtain/curtains3.jpg";
import curtains4 from "../images/Curtain/curtains4.jpg";
import curtains5 from "../images/Curtain/curtains5.jpg";
import curtains6 from "../images/Curtain/curtains6.jpg";
import curtains7 from "../images/Curtain/curtains7.jpg";
import curtains8 from "../images/Curtain/curtains8.jpg";
import curtains9 from "../images/Curtain/curtains9.jpg";
function Curtains() {
  return (
    <div className="curtains">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Customised Curtains</h2>
              {/* <Link to="/bookConsultation"><li className="btn-primary">Book A Consultation</li></Link> */}
              <p>
                When it comes to fabric selection for your home, there are so
                many factors to consider including; energy-efficiency levels,
                natural fibre options and pattern choice to name a few. These
                elements have a big impact on how they make your living space
                look and feel. Do they provide the feeling or comfort and warmth
                you’re looking for? Or, are they regulating light so you can
                sleep better? Whatever you choose should match your style and
                purpose. <br></br>
                The perfect time to begin planning for custom curtains is before
                your builder or architect finalise the plans for your home. When
                redecorating, renovating or extending your home, our experienced
                design consultants will provide a thorough review of your plans
                to help create a strategy for your window treatments. <br></br>
                Custom curtains add personality and sophistication to your home
                but can also provide significant functional benefits. From
                temperature and natural light control through to noise
                protection and security, custom curtain fabrics are recommended
                based on the way you live your life. For world-leading
                motorisation and automation solutions, Indeko Studio provides
                solutions from Somfy, Acmeda and Oslo. A large range of
                motorised displays can be tested in our showroom.<br></br>
                One of the advantages of selecting Indeko Studio is our
                connection to fabric houses worldwide.
              </p>
            </div>
            <div className="row">

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={curtains1} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={curtains2} />
                  </div>

                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={curtains3} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={curtains4} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={curtains5} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={curtains6} />
                  </div>
                </div>
              </div>

            </div>
            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={curtains7} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={curtains8} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={curtains9} />
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

export default Curtains;
