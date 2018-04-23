import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">StrayTracker</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">Login</a>
                </li>
              </ul>
            </div>
          </nav>

        <Router>
            <div>
              <Route exact path="/register" component={RegisterForm}/>
              <Route exact path="/login" component={LoginForm}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
