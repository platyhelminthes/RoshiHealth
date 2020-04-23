import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import login from './Components/Login/Views/main'
import Redir from './Components/redirect'
import main from './Components/Main/View/Main'
import home from './Components/LandingPage/index'
import redir2 from './Components/redirectMain'
import video from './Components/Video/View/index'
import confirmAcc from './Components/confirmAccount/views/index'
import ForgotPass from './Components/forgotPass/view/forgotPass'
import ResetPass from './Components/resetPass/view/resetPass'
import Store from './store/main'
import About from './AboutSection/aboutMain'
import Blog from './blog/main'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
              <Route exact path="/home" component={home}/>
              <Route exact path="/" component={Redir}/>
              <Route path="/login" component={login}/>
              <Route path="/main" component={main}/>
              <Route exact path="/main" component={redir2}/>
              <Route exact path="/video" component={video}/>
              <Route path="/confirmAccount" component={confirmAcc}/>
              <Route exact path='/forgotPass'
                render={(props)=><ForgotPass {...props}/>}/>
              <Route path='/resetPass' component={ResetPass}/>
              <Route path='/store' component={Store}/>
              <Route path='/about' component={About}/>
              <Route path='/news' component={Blog}/>
      </Router>
    );
  }
}

export default App;
