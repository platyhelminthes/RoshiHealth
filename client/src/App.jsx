import React from 'react';
import './App.css';
import SignIn from './Components/SignInComponents/View/index'
import user from './Components/userPage/View'
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/user" component={user}/>
    </div>
    </Router>
  );
}

export default App;
