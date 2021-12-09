import React from "react";
import styles from "../pages/About.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <header className={styles.aboutPageHeading}>
        <Navbar></Navbar>
        <h1 className={styles.firstHeadingAbout}>
          Content will simply slide over.
        </h1>
      </header>
      <div>
        <h3 className={styles.aboutHeading}>About the video catalog</h3>
        <p className={styles.aboutPar}>
          Video Catalog is free HTML CSS template for your website. This
          Bootstrap v4.4.1 website template is 100% free download for everyone.
          You can modify and expand this template for your CMS websites. You can
          use it for commercial or non-commercial work. If you wish to support
          TemplateMo, please contact us. You are not allowed to re-distribute
          the template ZIP file on any template collection website. Vivamus sit
          amet justo sed erat iaculis consequat. Nulla suscipit posuere lectus
          ut venenatis. Proin sed orci eget tellus euismod vulputate eu eu arcu.
          Etiam a bibendum lorem. Curabitur ac bibendum odio. Vivamus euismod
          dui mauris, ut tincidunt mi congue quis. Phasellus luctus orci dolor,
          a luctus massa tincidunt vitae. Integer sit amet odio id libero
          tincidunt dignissim in eget arcu. Aliquam tristique ut magna sit amet
          tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt
          id. Cras duismod leo a urna placerat, vel blandit turpis fermentum.
        </p>
      </div>
      <section className={styles.nextAboutSection}>
        <div></div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
