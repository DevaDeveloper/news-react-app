import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import Navvideo from "../video/wheat-field.mp4";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "0",
            top: "0",
            height: "100%",
            objectFit: "cover",
            zIndex: "-999",
          }}
        >
          <source src={Navvideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.heroText}>
        <p>
          Video Catalog is brought to you by TemplateMo. <br></br> This is a
          full-width video banner.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
