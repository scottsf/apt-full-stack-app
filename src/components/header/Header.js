import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer.js'

class Header extends React.Component {

  logOut = () => {
    this.props.updateUser({user: ''});
  }

  render() {
    return (
      <div className="header">
        <Link to='/' className="header_link">
          <h2 className="header_h2">Houser</h2>
        </Link>
          {
            !!this.props.user
            ?
            <h4 className="header_h4" onClick={() => this.logOut()}> <a href="/api/login">Logout</a> </h4>
            :
            <h4 className="header_h4"> <a href="/api/login">Login</a> </h4>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {user: state.user}
)


export default connect(mapStateToProps, {updateUser})(Header);
