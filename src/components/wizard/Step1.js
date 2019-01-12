import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class Step1 extends Component {
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // createHouse = () => {
  //   axios.post(`/api/house`, this.state);
  // };

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Property Name</p>
        <input
          name="name"
          value={this.props.name}
          placeholder="name"
          onChange={e => this.handleInput(e)}
        />
        <p>Address</p>
        <input
          name="address"
          value={this.props.address}
          placeholder="addres"
          onChange={e => this.handleInput(e)}
        />
        <p>City</p>
        <input
          name="city"
          value={this.props.city}
          placeholder="city"
          onChange={e => this.handleInput(e)}
        />
        <p>State</p>
        <input
          name="state"
          value={this.props.state}
          placeholder="state"
          onChange={e => this.handleInput(e)}
        />
        <p>Zip</p>
        <input
          name="zipcode"
          value={this.props.zipcode}
          placeholder="zipcode"
          onChange={e => this.handleInput(e)}
        />
        <Link to="/wizard/step2">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

let stateToProps = state => {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode,
  };
};

export default connect(stateToProps)(Step1);
