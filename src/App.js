import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Route from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <Route />
        </div>
      </div>
    );
  }
}

export default App;
