import React, {Component} from 'react';
import House from '../house/House.js';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <Link to='/wizard'>
        <button> Add New Property </button>
        </Link>
        <House />
      </div>
    )
  }
}

export default Dashboard;
