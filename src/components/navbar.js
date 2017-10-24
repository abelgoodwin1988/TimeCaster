import React from 'react';
import { Component } from 'react';
import logo from '../storage/logo/Avatar2_Trans.png';

class navbar extends Component {
  render() {
    return(
      <nav className="navbar is-dark" role="navigate menus" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} width="30" height="30" />
          </a>
          <a className="navbar-item" href="#">Tracker</a>
          <a className="navbar-item" href="#">Forecaster</a>
          <a className="navbar-item" href="#">Projects</a>
          <a className="navbar-item" href="#">Analyzer</a>
        </div>
      </nav>
    );
  }
}

export default navbar;
