import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {createHouse} from '../../ducks/reducer';
import './step1.scss';

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode,
    });
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    return (
      <div className="step1">
        <p>Property Name</p>
        <input
          className="step1_property"
          name="name"
          value={this.state.name}
          onChange={e => this.handleInput(e)}
        />
        <p>Address</p>
        <input
          className="step1_address"
          name="address"
          value={this.state.address}
          onChange={e => this.handleInput(e)}
        />
        <div className="step1_group">
          <div>
            <p>City</p>
            <input
              name="city"
              value={this.state.city}
              placeholder="city"
              onChange={e => this.handleInput(e)}
            />
           </div>
          <div>
            <p>State</p>
            <input
              className="step1_state"
              name="state"
              value={this.state.state}
              placeholder="state"
              onChange={e => this.handleInput(e)}
            />
           </div>
           <div>
            <p>Zip</p>
            <input
              className="step1_zip"
              name="zipcode"
              value={this.state.zipcode}
              placeholder="zipcode"
              onChange={e => this.handleInput(e)}
            />
           </div>
         </div>
        <Link to="/wizard/step2">
          <button
            className="step1_complete"
            onClick={() => this.props.createHouse(this.state)}>
            Complete
          </button>
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

let actionCreators = {
  createHouse,
};

export default connect(
  stateToProps,
  actionCreators,
)(Step1);
