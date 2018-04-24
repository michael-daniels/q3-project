import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
            <nav class="navbar navbar-expand-lg custom-navbar">
              <Link to="/" class="navbar-brand">straytracker</Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link to="/register" class="nav-link">Register</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/login" class="nav-link">Login</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/profile" class="nav-link">Profile</Link>
                  </li>
                </ul>
              </div>
            </nav>
              <div>
                <Route exact path="/register" component={RegisterForm}/>
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/profile/:username" component={Profile}/>
              </div>
        </div>
      </Router>
    );
  }
}

export default App;
