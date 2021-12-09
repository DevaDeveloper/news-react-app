import React from "react";
import styles from "./Navbar.module.css";
import { FaVideo } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Videos",
    },

    {
      id: 1,
      path: "/about",
      text: "About",
    },

    {
      id: 2,
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div className={styles.navContent}>
      <div className={styles.navHeading}>
        <a href="." className={styles.linkHolder}>
          <div className={styles.navIcon}>
            <i>
              <FaVideo />
            </i>
            <h1 style={{ color: "#fff" }}>Video Catalog</h1>
          </div>
        </a>
      </div>

      <nav className={styles.navBar}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink to={link.path} activeClassName="active-link" exact>
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
