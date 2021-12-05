import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FirstPage from "./components/pages/MainPages/FirstPage";
import SecondPage from "./components/pages/MainPages/SecondPage";
import ThirdPage from "./components/pages/MainPages/ThirdPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div>
            <Hero />
            <Main />
            <Footer />
          </div>
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/firstpage">
          <FirstPage />
        </Route>
        <Route path="/secondpage">
          <SecondPage />
        </Route>
        <Route path="/thirdpage">
          <ThirdPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
