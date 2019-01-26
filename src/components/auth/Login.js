import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
  };

  checkUser = () => {
    axios.post('/api/login', this.state);
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
