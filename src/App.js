import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Route from './router.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route />
      </div>
    );
  }
}

export default App;
