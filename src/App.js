import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from './components/navbar';
import logo from './storage/logo/Avatar2_Trans.png';
import {s
  BrowserRouter as Router
  , Route
  , Link
} from 'react-router-dom';

const navbar = () => (
  <Router>
    <div>
      <nav className="navbar is-dark" role="navigate menus" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/"><img src={logo} width="30" height="30" /></Link>
        </div>
          <Link className="navbar-item" to="/tracker">Tracker</Link>
          <Link className="navbar-item" to="/forecaster">Forecaster</Link>
          <Link className="navbar-item" to="/projects">Projects</Link>
          <Link className="navbar-item" to="/analyzer">Analyzer</Link>

      </nav>

      <Route exact path="/" component={placeHolder}/>
      <Route path="/tracker" component={placeHolder}/>
      <Route path="/forecaster" component={placeHolder}/>
      <Route path="/projects" component={placeHolder}/>
      <Route path="/analyzer" component={placeHolder}/>

    </div>

  </Router>
)

const placeHolder = () => (
  <div className="container">
    Hello thar!
  </div>
)

export default navbar;
