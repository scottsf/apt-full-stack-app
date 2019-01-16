import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {createHouse} from '../../ducks/reducer';

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

    // console.log(prevProps);
    // if (prevProps !== this.props) {
    //   this.setState({
    //     this.state
    //   });
    // }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // createHouse = () => {
  //   axios.post(`/api/house`, this.state);
  // };

  render() {
    return (
      <div>
        <p>Property Name</p>
        <input
          name="name"
          value={this.state.name}
          onChange={e => this.handleInput(e)}
        />
        <p>Address</p>
        <input
          name="address"
          value={this.state.address}
          onChange={e => this.handleInput(e)}
        />
        <p>City</p>
        <input
          name="city"
          value={this.state.city}
          placeholder="city"
          onChange={e => this.handleInput(e)}
        />
        <p>State</p>
        <input
          name="state"
          value={this.state.state}
          placeholder="state"
          onChange={e => this.handleInput(e)}
        />
        <p>Zip</p>
        <input
          name="zipcode"
          value={this.state.zipcode}
          placeholder="zipcode"
          onChange={e => this.handleInput(e)}
        />
        <Link to="/wizard/step2">
          <button onClick={() => this.props.createHouse(this.state)}>
            Next Step
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
