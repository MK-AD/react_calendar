import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div id="headerButtons">
          <div className="navButton"><Link to="">Home</Link></div>
        </div>
      </header>
    )
  }
}

export default NavBar;