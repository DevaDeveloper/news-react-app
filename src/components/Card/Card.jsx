import React from "react";
import styles from "./Card.module.css";
import CardComponent from "../Card/CardComponent";

function Card() {
  const cards = [
    {
      id: "e1",
      title: "First Card",
      text: "Drone text in first card",
      src: "https://economictimes.indiatimes.com/thumb/msid-85649831,width-1200,height-900,resizemode-4,imgsize-35746/drone-rules.jpg?from=mdr",
    },
    {
      id: "e2",
      title: "Second Card",
      text: "Tesla motors",
      src: "https://www.bug.hr/img/najavljena-nova-jeftina-tesla-narodski-auto-za-25000-usd_69Llk8.jpg",
    },
    {
      id: "e3",
      title: "Third Card",
      text: "Ford",
      src: "https://www.vmax.si/wp-content/uploads/2021/02/Ford-F-150-Raptor-1.jpg?is-pending-load=1",
    },
  ];

  return (
    <div className={styles.card}>
      <ul>
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <CardComponent
                id={card.id}
                title={card.title}
                text={card.text}
                src={card.src}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Card;
