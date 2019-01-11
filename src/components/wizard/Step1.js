import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Step1 extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Property Name</p>
        <input
          name="name"
          value={this.state.name}
          placeholder="name"
          onChange={e => this.handleInput(e)}
        />
        <p>Address</p>
        <input
          name="address"
          value={this.state.address}
          placeholder="addres"
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
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

export default Step1;
