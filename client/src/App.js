import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './Components/SignUpComponents/View/SignUpForm';
import SignInForm from './Components/SignInComponents/View/SignInForm';
import Main from './Components/Main/View/Main'
import tasks from './Components/Tasks/View/Tasks'
import cart from './Components/ShoppingCart/View/Cart'
import subscription from './Components/PurchaseSubscription/View/PurchaseSub'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" 
                className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" 
                  activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route exact path="/sign-in" component={SignInForm}>
              </Route>
              <Route exact path="/Main" component={Main}/>
              <Route exact path="/tasks" component={tasks}/>
              <Route exact path="/cart" component={cart}/>
              <Route exact path="/subscription" component={subscription}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
