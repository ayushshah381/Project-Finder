import React, { Component } from 'react';
// import './css/buddy.css';
// import './css/buddy.css.map';
// import './js/buddy';
// import './js/buddy.js.map';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Creation from './components/Creation';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Creation 
          projects={this.state.projects}
        />
        <div className="last">

        </div>
      </div>
    );
  }
}

export default App;
