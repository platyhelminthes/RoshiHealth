import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import login from './Components/Login/Views/main'
import Redir from './Components/redirect'
import main from './Components/Main/View/Main'
import home from './Components/LandingPage/index'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
              <Route exact path="/home" component={home}/>
              <Route exact path="/" component={Redir}/>
              <Route path="/login" component={login}/>
              <Route path="/main" component={main}/>
      </Router>
    );
  }
}

export default App;
