import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false,
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
  sanatize = (string) => {
    var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/
    if(format.test(string)){
        return true
    }
    else{
        return false
    }
    
}

  handleSubmit(e) {
    e.preventDefault();
    this.CreateAccount(this.state.name, this.state.email, this.state.password)


    console.log('The form was submitted with the following data:');
    console.log(this.state);

  }

  Login = () => {
    if(this.sanatize(this.state.email)){alert('No injections allowed!')}
    else{
    axios.post('/api/login/login', {
        email: this.state.email,
        password: this.state.password
    }).then(
      
      (res) => {
        if(!res){alert('Thats it!')}
        else(alert('INCORRECT'))
        this.setState({redirect: true})
        console.log(res)
      }

      )
      .catch(
        (err) => {
          if(err.response.data == 'Unauthorized') {
            alert('Incorrect password or email!')
          }
          console.log(err.request)
        })
    }
}
 //handleSubmit2(e) {
 //  e.preventDefault();
 //  this.Login(this.state.email, this.state.password))
 //}

  CreateAccount = (name, email, password) => {
    if(this.sanatize(name) || this.sanatize(email)){alert('no injections allowed')}
    else{
    axios.post('/api/users/createUser', {
      fullName: name,
      email: email,
      password: password,
    }).then(setTimeout(this.Login, 500))
  }
  };

  render() {
    if(this.state.redirect == true){return(<Redirect to='/main'/>)}
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
