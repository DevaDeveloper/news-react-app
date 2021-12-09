import { React, useState } from "react";
import styles from "./Card.module.css";
import CardComponent from "../Card/CardComponent";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Card(props) {
  const [key, setKey] = useState("home");

  return (
    <div>
      <div className={styles.catalogList}>
        <h3>Categories:</h3>

        <nav>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="All">
              <div className={styles.card}>
                <ul>
                  {props.allNews.map((card) => {
                    return (
                      <li key={card.id}>
                        <CardComponent
                          id={card.id}
                          title={card.title}
                          text={card.description}
                          src={card.urlToImage}
                          visit={card.url}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Tab>

            <Tab eventKey="profile" title="Tesla">
              <div className={styles.card}>
                <ul>
                  {props.teslaNews.map((card) => {
                    return (
                      <li key={card.id}>
                        <CardComponent
                          id={card.id}
                          title={card.title}
                          text={card.description}
                          src={card.urlToImage}
                          visit={card.url}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Tab>

            <Tab eventKey="contact" title="Apple">
              <div className={styles.card}>
                <ul>
                  {props.appleNews.map((card) => {
                    return (
                      <li key={card.id}>
                        <CardComponent
                          id={card.id}
                          title={card.title}
                          text={card.description}
                          src={card.urlToImage}
                          visit={card.url}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Tab>
          </Tabs>
        </nav>
      </div>
    </div>
  );
}

export default Card;
