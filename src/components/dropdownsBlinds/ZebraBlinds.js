import "../../styles/styles.scss";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import waveblue from "../../images/wave-blue-light.png";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import react from "react";
import zebra1 from "../../images/Zebra/zebra_blinds1.jpg";
import zebra2 from "../../images/Zebra/zebra_blinds2.jpg";
import zebra3 from "../../images/Zebra/zebra_blinds3.jpg";
import zebra4 from "../../images/Zebra/zebra_blinds4.jpg";
import zebra5 from "../../images/Zebra/zebra_blinds5.jpg";
import zebra6 from "../../images/Zebra/zebra_blinds6.jpg";
import zebra7 from "../../images/Zebra/zebra_blinds7.jpg";
import zebra8 from "../../images/Zebra/zebra_blinds8.jpg";
import zebra9 from "../../images/Zebra/zebra_blinds9.jpg";
import zebra10 from "../../images/Zebra/zebra_blinds10.jpg";
import zebra11 from "../../images/Zebra/zebra_blinds11.jpg";
import zebra12 from "../../images/Zebra/zebra_blinds12.jpg";
import zebra13 from "../../images/Zebra/zebra_blinds13.jpg";
import zebra14 from "../../images/Zebra/zebra_blinds14.jpg";

import zebra15 from "../../images/Zebra/zebra_blinds15.jpg";
import zebra16 from "../../images/Zebra/zebra_blinds16.jpg";

function ZebraBlinds() {
  return (
    <div className="zebraBlinds">
      <div>
        <Header />
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="text">
              <h2 className="title">Zebra Blinds</h2>
              {/* <Link to="/bookConsultation"><li className="btn-primary">Book A Consultation</li></Link> */}
              <p>
                Zebra Blinds are the latest in light filtering and comes
                in many different styles, shapes and sizes. <br></br>
                Zebra blinds are a modern, functional option for your window
                treatments. With their sleek, linear design and easy operation,
                they make for a versatile choice. Yet, whether this type of
                window treatment is the right choice for your home will depend
                on your individual needs and preferences. <br></br>
                you can expect anywhere between 7-8 years but with regular
                maintenance, even longer. Zebra blinds will complement the clean
                look and feel of your home. They are affordable, and the
                benefits are endless!<br></br>
                Most of our zebra shades are fully private at night when in the
                closed position. A few of our fabrics are sheer and can be seen
                through in the closed position
              </p>
             
            </div>

           

            <div className="row">
              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={zebra9} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={zebra2} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={zebra3} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={zebra4} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={zebra5} />
                  </div>
                </div>
              </div>

              <div className="column item">
                <div className="home-product">
                  <div className="img-holder">
                    <img className="product-img" src={zebra6} />
                  </div>
                </div>
              </div>

            {/* </div> */}

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={zebra13} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={zebra14} />
                </div>
              </div>
            </div>

            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={zebra9} />
                </div>
              </div>
            </div>
            {/* <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={zebra10} />
                </div>
              </div>
            </div> */}
{/* 
            <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={zebra1} />
                </div>
              </div>
            </div> */}

            {/* <div className="column item">
              <div className="home-product">
                <div className="img-holder">
                  <img className="product-img" src={zebra12} />
                </div>
              </div>
            </div> */}

            </div>
            <div className="secondPart">
              <span className="">The Benefits of Layered Zebra Shades</span>
              <p>
                Layered shades are all about light control. Unlike shades that
                you can only raise or lower, these window coverings let you
                easily control the amount of light streaming into a room,
                tailoring it to your needs. Simply align the solid fabric bands
                over top of one another to let the sheers diffuse natural light
                (they also filter the view from the outside in). When you desire
                privacy, shift the solid bands so they overlap the sheers. (Of
                course, you can also raise the entire shade for a wide open
                view.)
                <br />
                <br />
                This distinctive design gives you lots of versatility—a view
                when you want it, along with filtered light, and privacy when
                you need it. Layered shades also pair well with many decorating
                styles; the clean lines, for example, complement a contemporary
                aesthetic, while the softness o f the sheers marries well with
                traditional décor.
              </p>
              <span className="special">
                Layered shades give you the best of a roller shade and a sheer
                shade—all in one
              </span>
            </div>

            <div className="layeredShades">
              <img src={zebra15} alt="" />
              <span>Designer Banded Shades Fabric: Zoey Color: Baltic Sea</span>
              <p className="title-rooms">Rooms for Layered Shades</p>
              <p>
                Practical for any space, these window coverings are ideal for
                rooms where you desire the warm, light-filtering glow you get
                from sheer shades, but also where you want privacy when you need
                it—like bedrooms and bathrooms.
                <br />
                <br />
                The living room is also a great space for layered window shades,
                as you can create a darker room for relaxing in the evening or
                streaming your favorite movie.
              </p>
              <img src={zebra16} alt="" />
              <span>
                Designer Banded Shades Fabric: South Beach Color: Platinum
              </span>
              <p className="title-rooms">Layered Shades from MegaStar</p>
              <p>
                The extensive line of Hunter Douglas window treatments includes
                layered shades, called Designer Banded Shades. Choose from
                small, medium and large band heights (the bigger the band
                height, the greater your exterior view), as well as
                light-filtering and room-darkening fabrics in an array of
                choices. Designer Banded Shades are also available in a
                geometric pattern, for modern interiors or where you want to add
                a hint of the unexpected.
                <br />
                <br />
                Seamlessly transition from open to closed shades or create
                varying dimensions of light with the alternating sheer and solid
                fabric bands. The bands align on adjacent windows, so you can
                enjoy a clean, uncluttered look.
              </p>
            </div>
            {/* <a href="bookConsultation"><button className="btn-primary">
              Book A Consultation
            </button></a> */}
            

          </div>
        </div>
      </div>
      <div className="image">
        <img src={waveblue} alt="" className="waveBlueLine" />
      </div>
    </div>
  );
}
export default ZebraBlinds;
