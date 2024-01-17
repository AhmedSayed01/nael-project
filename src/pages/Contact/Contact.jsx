import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import socialimg1 from "../../assets/img/instagramLogo.png";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="submit" value="Send" />
          </div>
        </div>
        <br />
        <div className="instaLogoContainer">
          <a
            href="https://www.instagram.com/cravexcapture/"
            className="instaLogo"
          >
            <img src={socialimg1} alt="" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
