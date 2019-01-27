import React, {Component} from 'react';
import axios from 'axios';
import {history} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer.js';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    axios.get('/api/me').then(res => {
      if (res.data === this.props.user) {
        this.props.history.push('/')
        console.log('USER IS LOGGED IN');
      } else {
        console.log('not yet');
      }
    });
  }

  checkUser = () => {
    axios.post('/api/login', this.state).then(res => {
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
        <button onClick={() => this.checkUser()}> Login </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {updateUser})(Login);
