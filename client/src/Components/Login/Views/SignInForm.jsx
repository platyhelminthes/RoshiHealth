import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            password: null,
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        (e).preventDefault()
        console.log('The form was submitted with the following data:');
        console.log(this.state);
        this.Login(this.state.email, this.state.password)
    }

    

    Login = (email, password) => {
      if(this.sanatize(email) || this.sanatize(password)){alert('No injections allowed!')}
      else{
      axios.post('/api/login/login', {
          email: email,
          password: password
      }).then(
        axios.get('/api/login/check', {

        }).then(this.setState({redirect: true}))
      )}
  }
  sanatize = (string) => {
    var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/
    if(format.test(string)){
        return true
    }
    else{
        return false
    }
    
}


    render() {
      var redirect = this.state.redirect
      if(redirect == true){return (<Redirect to="/main/overview"/>)}
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  
                    <button className="FormField__Button mr-20">Sign In</button>
                     <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;