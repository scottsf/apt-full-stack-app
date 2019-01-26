import React, {Component} from 'react';
import axios from 'axios';
import {history} from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    axios.get('/api/me').then(res => {
      if (res.data === this.state.username) {
        console.log('USER IS LOGGED IN');
      }
    });
  }

  checkUser = () => {
    axios.post('/api/login', this.state).then(res => {
      if (res.data) {
        this.props.history.push('/');
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
        <button onClick={() => this.checkUser()}> Login </button>
      </div>
    );
  }
}

export default Login;
