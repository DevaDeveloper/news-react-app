import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const CardComponent = (props) => {
  const visitSite = () => {
    window.open(props.visit);
  };
  return (
    <div>
      <Card style={{ width: "25rem" /* height: "25rem" */ }}>
        <Card.Img style={{ height: "250px" }} variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary" onClick={visitSite}>
            Read more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
