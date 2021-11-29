import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Button from './components/Button/Button';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
    <Hero />
    <Main />
    <Card />
    <Footer />
    </div>
  );
}

export default App;
