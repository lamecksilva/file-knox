import React, { Component } from 'react';
import './css/App.css';
import Naav from './Components/Naav';
import LogBox from './Components/LogBox';

class App extends Component {
  render() {
    return (
      <div className="appContainer" >
        <Naav />
        <LogBox />
      </div>
    );
  }
}

export default App;
