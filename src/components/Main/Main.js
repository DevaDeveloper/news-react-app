import React from "react";
import styles from "./Main.module.css";
import PaginationComponent from "../Pagination/PaginationComponent";
import Card from "../Card/Card";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [allNews, setAllNews] = useState([]);
  const [teslaNews, setTeslaNews] = useState([]);
  const [appleNews, setAppleNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3978caf8e854578acfd1135c16ae98b"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllNews(data.articles.slice(0, 6));
        console.log(data.articles);
      });

    //tesla news
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-11-08&sortBy=publishedAt&apiKey=d3978caf8e854578acfd1135c16ae98b"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeslaNews(data.articles.slice(3, 9));
        console.log(data.articles);
      });

    //apple news
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2021-12-07&to=2021-12-07&sortBy=popularity&apiKey=d3978caf8e854578acfd1135c16ae98b"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAppleNews(data.articles.slice(3, 9));
        console.log(data.articles);
      });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.hero_list}>
        <h1>Our Video Catalog</h1>
      </div>

      <Card allNews={allNews} teslaNews={teslaNews} appleNews={appleNews} />

      <div>
        <PaginationComponent />
      </div>
    </div>
  );
};

export default Main;
