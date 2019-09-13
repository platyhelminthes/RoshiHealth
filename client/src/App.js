import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import login from './Components/Login/Views/main'
import Main from './Components/Main/View/Main'
import tasks from './Components/Tasks/View/Tasks'
import cart from './Components/ShoppingCart/View/Cart'
import subscription from './Components/PurchaseSubscription/View/PurchaseSub'
import admin from './Components/AdminCommands/View/Admin'
import findProviders from './Components/ChooseDoctor/View/index'
import sendTasks from './Components/Providers/Views/SendTasks'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
              
              <Route path="/login" component={login}/>
              <Route exact path="/Main" component={Main}/>
              <Route exact path="/tasks" component={tasks}/>
              <Route exact path="/cart" component={cart}/>
              <Route exact path="/subscription" component={subscription}/>
              <Route exact path="/adminPage" component={admin}/>
              <Route exact path="/addProviders" component={findProviders}/>
              <Route exact path="/sendTasks" component={sendTasks}/>
      </Router>
    );
  }
}

export default App;
