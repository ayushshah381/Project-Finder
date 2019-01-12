import React, { Component } from 'react';
import './css/buddy.css';
import './css/buddy.css.map';
import './js/buddy';
import './js/buddy.js.map';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Creation from './components/Creation';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Creation />
        <div className="last">

        </div>
      </div>
    );
  }
}

export default App;
