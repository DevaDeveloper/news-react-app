import { React, useState } from "react";
import styles from "./MainNavbar.module.css";
import { NavLink } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const MainNavbar = () => {
  const [key, setKey] = useState("home");

  const links = [
    {
      id: "d1",
      path: "/firstpage",
      text: "First Page",
    },
    {
      id: "d2",
      path: "/secondpage",
      text: "Second Page",
    },
    {
      id: "d3",
      path: "/thirdpage",
      text: "Third Page",
    },
  ];

  return (
    <nav>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="All">
          All tabs in one place
        </Tab>
        <Tab eventKey="profile" title="Tesla">
          Tesla motors tab
        </Tab>
        <Tab eventKey="contact" title="Ford">
          Ford tab
        </Tab>
      </Tabs>
      {/*  <ul className={styles.mainNav}>
        {links.map((link) => {
             return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul> */}
    </nav>
  );
};

export default MainNavbar;
