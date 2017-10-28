import React, { Component } from 'react';
import {
  BrowserRouter as Router
  , Route
  , Link
} from 'react-router-dom';

import 'bulma/css/bulma.css';

import Navbar from './components/navbar';
import Analyzer from './components/analyzer/analyzer_index';
import Forecaster from './components/forecaster/forecaster_index';
import Projects from './components/projects/projects_index';
import Tracker from './components/tracker/tracker_index';
import logo from './storage/logo/Avatar2_Trans.png';


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
      <Route path="/tracker" component={placeHolder2}/>
      <Route path="/forecaster" component={placeHolder}/>
      <Route path="/projects" component={placeHolder2}/>
      <Route path="/analyzer" component={Analyzer}/>

    </div>

  </Router>
)

const placeHolder = () => (
  <div className="container">
    From Spain
  </div>
)

const placeHolder2 = () => (
  <div className="container">
    Portugal
  </div>
)

export default navbar;
