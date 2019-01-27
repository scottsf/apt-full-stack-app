import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';
import {connect} from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to='/'>
          <h2 className="header_h2">Houser</h2>
          {
            this.props.user
            ?
            <h4 className="header_h4"> Logout </h4>
            :
            <h4 className="header_h4"> Login </h4>
          }
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {user: state.user}
)


export default connect(mapStateToProps)(Header);
