import React, {Component} from 'react';
import House from '../house/House.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './dashboard.scss';

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
      <div className="dashboard">
        <div className="dashboard_nav">
          <h2 className="dashboard_h2"> Dashboard </h2>
          <Link to="/wizard/step1">
            <button className="dashboard_button"> Add New Property </button>
          </Link>
        </div>
        <p className="dashboard_p">Home Listings</p>
        <div className="dashboard_list">
          {houses}
        </div>
      </div>
    );
  }
}

export default Dashboard;
