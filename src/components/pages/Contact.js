import React from "react";
import styles from "../pages/Contact.module.css";
import Navbar from "../Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <h1 className={styles.contactHeading}>Contact our team</h1>
      </header>
      <div className={styles.contactFormHolder}>
        <form className={styles.contactForm}>
          <div>
            <input placeholder="Name" size="50" type="text" required></input>
          </div>
          <div>
            <input placeholder="Email" size="50" type="email" required></input>
          </div>
          <div className={styles.contactSelect}>
            <select name="" id="subject-select" required>
              <option value="">Please choose an option</option>
              <option value="">Sales</option>
              <option value="">Design</option>
            </select>
          </div>
          <div>
            <textarea rows="7" placeholder="Message"></textarea>
          </div>
          <div>
            <Button variant="primary" size="lg">
              Submit
            </Button>
          </div>
        </form>
        <div className={styles.contactMaps}>
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90627.50718146715!2d17.136127122963124!3d44.77857089601478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03062ccd6b05%3A0x73fe3280dfee195d!2sBanja%20Luka%2078000!5e0!3m2!1shr!2sba!4v1639013694098!5m2!1shr!2sba"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <section className={styles.nextContactSection}>
        <div></div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
