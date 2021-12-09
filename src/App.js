import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

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
      </Switch>
    </>
  );
}

export default App;
