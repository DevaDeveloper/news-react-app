import React from "react";
import styles from "./Button.module.css";
import Button from "react-bootstrap/Button";

const ButtonBootstrap = () => {
  return (
    <div className={styles.buttonBotts}>
      <Button variant="primary" size="lg">
        Subscribe
      </Button>
    </div>
  );
};

export default ButtonBootstrap;
