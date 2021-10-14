import "./section4.css";
import Post from "../../images/contact.png";
import React from "react";
const Section4 = () => {
  return (
    <div>
      <section className="section-4" id="contact">
        <h1 className="section-heading">Contact</h1>
        <div className="form-container">
          <img src={Post} alt="contact" className="form-img" />
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
        <p className="copyright">
          Copyright &copy; Thilak Ramanie All Rights Reserved
        </p>
      </section>
    </div>
  );
};

export default Section4;
