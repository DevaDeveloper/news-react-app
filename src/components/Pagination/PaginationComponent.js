import React from "react";
import Pagination from "react-bootstrap/Pagination";
import styles from "./Pagination.module.css";

const PaginationComponent = () => {
  return (
    <div className={styles.pagination}>
      <>
        <Pagination>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </>
    </div>
  );
};

export default PaginationComponent;
