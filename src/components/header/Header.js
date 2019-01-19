import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => (
  <div className="header">
    <Link to='/'>
      <h2 className="header_h2">Houser</h2>
    </Link>
  </div>
);

export default Header;
