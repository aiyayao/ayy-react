import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const propTypes = {};

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='counter'>Counter</Link></li>
          <li><Link to='page1'>Page1</Link></li>
          <li><Link to='userinfo'>UserInfo</Link></li>
        </ul>
      </div>
    );
  }
}

Nav.propTypes = propTypes;

export default Nav;
