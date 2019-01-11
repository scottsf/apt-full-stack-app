import React, {Component} from 'react';
import House from '../house/House.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.getHouses();
  }

  getHouses = () => {
    axios.get(`/api/houses`).then(res => {
      console.log(res);
      let houses = res.data;
      this.setState({houses});
    });
  };

  removeHouse = id => {
    axios.delete(`/api/house/${id}`).then(res => {
      this.getHouses();
    });
  };

  render() {
    let houses = this.state.houses.map((item, i) => (
      <House key={i} {...item} removeHouse={id => this.removeHouse(id)} />
    ));

    return (
      <div>
        Dashboard
        <Link to="/wizard/step1">
          <button> Add New Property </button>
        </Link>
        {houses}
      </div>
    );
  }
}

export default Dashboard;
