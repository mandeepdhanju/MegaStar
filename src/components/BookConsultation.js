import "../styles/styles.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import waveblue from "../images//wave-blue-light.png";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import Waves from '../images//waves-top.png';

// sendForm(
//   "service_v5pd27s",
//   "template_ti5pegn",
//   form.current,
//   "ird2GoqMDz7vrYHKz"
// )
library.add(faEnvelope, faKey);

const BookConsultation = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ahgbp7e",
        "template_yjfjj4i",
        form.current,
        "hICifK_UY8lK_IrUx"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Email sent successfully")
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactus">
      <div>
        <Header />
        <Sliders />
      </div>
      {/* <img src={Waves} alt="" className="waves-top-divider"/> */}
      <section>
        {/* <h4 className="sectionHeader">Contact Us</h4> */}
        <h1 className="heading consultation">Book A Consultation </h1>
        <p className="para">
          {" "}
          Book a private consultation. After hours times available by appointment.
        </p>

        <div className="contactForm">
          
          {/* <form action="#"> */}
          <form
          ref={form}
          onSubmit={sendEmail}
          >
            <h1 className="sub-heading">Need Support!</h1>
            <p className="para para2">
              Contact us for a quote, help to join them.
            </p>

            <input
              type="text"
              className="input"
              placeholder="Your Name"
              name="user_name"
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="user_email"
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Phone Number"
              name="user_phoneNumber"
              required
            />
            <textarea
              className="input"
              placeholder="Message"
              name="message"
              cols="30"
              rows="5"
            ></textarea>
            <input
              type="submit"
              className="input submit"
              value="Send Message"
            />
          </form>

          <div className="map-container">
            <div className="mapBg"></div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.288066863879!2d-122.841268!3d49.138154799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485da2efb167d6f%3A0xc8e605d3a2a6c1f0!2s13733%2074%20Ave%2C%20Surrey%2C%20BC%20V3W%201B8!5e0!3m2!1sen!2sca!4v1705540990289!5m2!1sen!2sca"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="contactMethod">
          <div class="method">
            <i class="fa-solid fa-location-dot contactIcon"></i>
            <article class="text">
              <h1 class="sub-heading">Location</h1>
              <p className="para">
                #206-13733 74 Avenue, Surrey <br /> British Columbia Canada
              </p>
            </article>
          </div>

          <div class="method">
            <i class="fa-solid fa-envelope contactIcon"></i>
            <article class="text">
              <h1 class="sub-heading">Email</h1>
              <p class="para">megastarscreens@gmail.com</p>
            </article>
          </div>

          <div class="method">
            <i class="fa-solid fa-phone contactIcon"></i>
            <article class="text">
              <h1 class="sub-heading">Phone</h1>
              <p class="para">+1 778-995-8205</p>
            </article>
          </div>
        </div>
      </section>
      <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
      </div>
    </div>
  );
};

export default BookConsultation;


