import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createHouse = () => {
    axios.post(`/api/house`, this.state)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        Wizard
        <Link to='/'>
          <button> Cancel </button>
        </Link>

        <input name='name' value={this.state.name} placeholder='name' onChange={(e) => this.handleInput(e)} />
        <input name='address' value={this.state.address} placeholder='addres' onChange={(e) => this.handleInput(e)} />
        <input name='city' value={this.state.city} placeholder='city' onChange={(e) => this.handleInput(e)} />
        <input name='state' value={this.state.state} placeholder='state' onChange={(e) => this.handleInput(e)} />
        <input name='zipcode' value={this.state.zipcode} placeholder='zipcode' onChange={(e) => this.handleInput(e)} />

        <Link to='/'>
          <button onClick={() => this.createHouse()}> Complete </button>
        </Link>
      </div>
    )
  }
}

export default Wizard;
