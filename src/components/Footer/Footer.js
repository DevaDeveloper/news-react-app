import React from "react";
import styles from "./Footer.module.css";
import ButtonBootstrap from "../Button/ButtonBootstrap";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <article>
        <div className={styles.first_footer}>
          <h3>Do you want to get latest updates?</h3>
          <p>
            Please subscribe our newsletter for upcoming new videos and latest
            information <br></br>about our work. Thank you.
          </p>
          <form action="">
            <input
              type="email"
              id="email"
              size="40"
              placeholder="Your Email..."
              style={{ marginRight: "10px", height: "50px" }}
            />
            <div>
              <ButtonBootstrap />
            </div>
          </form>
        </div>

        <div className={styles.second_footer}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="www">Drone Shots</a>
            </li>
            <li>
              <a href="www">Images</a>
            </li>
            <li>
              <a href="www">Videos</a>
            </li>
            <li>
              <a href="www">Nature</a>
            </li>
            <li>
              <a href="www">About Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.second_footer}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="www">Drone Shots</a>
            </li>
            <li>
              <a href="www">Images</a>
            </li>
            <li>
              <a href="www">Videos</a>
            </li>
            <li>
              <a href="www">Nature</a>
            </li>
            <li>
              <a href="www">About Us</a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Footer;
