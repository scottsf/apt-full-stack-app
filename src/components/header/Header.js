import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer.js'
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Header extends React.Component {

  logOut = () => {
    axios.get('/api/logout')
    this.props.updateUser('')
    this.props.history.push('/login')
  }

  logIn = () => {
    this.props.history.push('/api/login')
  }

  checkMe = () => {
    axios.get('/api/me');
  }

  register = () => {
    this.props.history.push('/api/register')
  }

  render() {
    console.log(this.props)
    return (
      <div className="header">
        <Link to='/' className="header_link">
          <h2 className="header_h2">Houser</h2>
        </Link>
        <button onClick={() => this.checkMe()}>CHECK ME </button>
        {
          !!this.props.user
          ?
            <h4 className="header_h4" onClick={() => this.logOut()}> Logout </h4>
          :
          <div className="header_register">
            <h4 className="header_h4" onClick={() => this.logIn()}> Login </h4>
            <h4 className="header_h4" onClick={() => this.register()}> Register </h4>

          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {user: state.user}
)


export default withRouter(connect(mapStateToProps, {updateUser})(Header));
