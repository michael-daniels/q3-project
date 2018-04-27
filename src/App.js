import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import DatabaseView from './components/DatabaseView'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
            <nav className="navbar navbar-expand-lg custom-navbar">
              <Link to="/" className="navbar-brand">straybase</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="registerloginlinks">
                <Link className="registerlogin-a" to="/register">Register</Link> / <Link className="registerlogin-a" to="/login">Login</Link>
              </div>
            </nav>
              <div>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/register" component={RegisterForm}/>
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/profile/:username" component={Profile}/>
                <Route exact path="/database" component={DatabaseView}/>
              </div>
        </div>
      </Router>
    );
  }
}

export default App;
