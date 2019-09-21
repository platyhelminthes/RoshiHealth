import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

import '../../../App.css';
import axios from 'axios';

class App extends Component {
    state={
        loggedIn: null,
        redirect: false
    }

    componentDidMount(){
        this.CheckLogin()
    }


    CheckLogin = () => {
        axios.get('/api/users/getUserInfo')
        .then((res)=>{
            if(res.data.email){
                this.setState({redirect: true})
            }
        })
    }

  render() {
      if(this.state.redirect==true){
          return(
              <Redirect to='/main/overview'/>
          )
      }
      else{
    return (

        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/login/sign-in" activeClassName="PageSwitcher__Item--Active" 
                className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/login/sign-in" activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/login" 
                  activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/login" component={SignUpForm}/>
              <Route exact path="/login/sign-in" component={SignInForm}/>
          </div>

        </div>

    );
  }}
}

export default App;
