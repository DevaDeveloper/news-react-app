import React from "react";
import styles from "./Main.module.css";
import PaginationComponent from "../Pagination/PaginationComponent";
import Card from "../Card/Card";
import MainNavbar from "../Navbar/MainNavbar";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.hero_list}>
        <h1>Our Video Catalog</h1>
        <div className={styles.catalogList}>
          <h3>Categories:</h3>

          <MainNavbar />
          {/*  <li>
              <a className={styles.firstLink} href="www.google.com">
                All
              </a>
            </li>
            <li>
              <a href="www.google.com">Drone Shots</a>
            </li>
            <li>
              <a href="www.google.com">Nature</a>
            </li>
            <li>
              <a href="www.google.com">Actions</a>
            </li>
            <li>
              <a href="www.google.com">Featured</a>
            </li> */}
        </div>
      </div>

      <Card />

      {/*  <div className={styles.all_cards}>
        <div className={styles.card_components_one}>
          <div>
            <CardComponent />
          </div>
          <div className={styles.middle_card}>
            <CardComponent />
          </div>
          <div>
            <CardComponent />
          </div>
        </div>
        <div className={styles.card_components_one}>
          <CardComponent />
          <div className={styles.middle_card}>
            <CardComponent />
          </div>
          <CardComponent />
        </div>
        <div className={styles.card_components_one}>
          <CardComponent />
          <div className={styles.middle_card}>
            <CardComponent />
          </div>
          <CardComponent />
        </div>
      </div> */}

      <div>
        <PaginationComponent />
      </div>
    </div>
  );
};

export default Main;
