import React, {Component} from 'react';
import axios from 'axios';
import {history} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer.js';

class Register extends Component {
  state = {
    username: '',
    password: '',
  };

  registeruser = () => {
    axios.post('/api/register', this.state).then(res => {
      if (res.data) {
        this.props.history.push('/');
        this.props.updateUser(this.state.username);
      }
    });
  };

  render() {
    return (
      <div>
        <h5> Username: </h5>
        <input
          name="username"
          value={this.state.username}
          onChange={e => this.setState({username: e.target.value})}
        />
        <input
          name="password"
          value={this.state.password}
          onChange={e => this.setState({password: e.target.value})}
        />
        <button onClick={() => this.registerUser()}> Login </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {updateUser})(Register);
