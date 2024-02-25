import "../styles/styles.scss";
// import React, { useState } from "react";
import { useRef } from "react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import waveblue from "../images//wave-blue-light.png";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import shake from "../images/shake6.jpg";
// import emaillogo from "../images/email2.png"
import emaillogo from "../images/email.png";
// function BookConsultation() {
const ContactUs = () => {
  const form = useRef();


  const [formState, setFormState] = useState({});

  const changehandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value});
  };

  const submitHandler= (event) => {
    event.preventDefault();
    const config = {
      Host: "mail.megastarblinds.com",
      UserName: "info@megastarblinds.com",
      Password:"Muradveer@2023",
      Port: "465",
      To : "info@megastarblinds.com",
      From : "formState.Email",
      Subject : "This is the from MegaStar Blinds",
      Body : "${formState.name} connected to you over email",
  }

    if(window.Email){
      window.Email.send(config).then ((message) => alert("sent successfully"));
    }
  }

  return (
    <div className="consultation">
      <div>
        <Header />
        <Sliders />
      </div>

       <h2 className='title'>Book A Consultation</h2>
       

      <section>
      <div>
              <form className="flex flex-col justify-center" items-center onSubmit={submitHandler}>
              <input type="text" placeholder="Your Name" name="name" value={formState.name || ''} onChange={changehandler}></input>
              <input type="text" placeholder="Email" name="email" value={formState.email || ''} onChange={changehandler}/>
              <input type="submit" value="Send Email" />
              </form>
            </div>
        {/* <div className="container">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="--form-control --card --flex-center --dir-column"
          >
             
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="user_phoneNumber"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea placeholder="Message" name="message" cols="30" rows="10"></textarea>
            <button type="submit" className="--btn --btn-primary">
              Send Message
            </button>
          </form>
        </div> */}
      </section>
      <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
      </div>
    </div>
  );
};
export default ContactUs;