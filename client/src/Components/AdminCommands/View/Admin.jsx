import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class Admin extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            type: null,
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
      this.props.closeNav()
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
        console.log(this.state.email)
        console.log(this.state.type)
        this.makeProvider(this.state.email, this.state.type)
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
    
    makeProvider = (email, type) => {
      if(this.sanatize(email) || this.sanatize(type)) {alert('No injections allowed!')}
      else{
        axios.post('/api/providers/setProvider',
        {
            email: email,
            type: type
        })
    }}


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
                <label className="FormField__Label" htmlFor="type">Provider Type</label>
                <input type="type" id="type" className="FormField__Input" placeholder="Enter your type" name="type" value={this.state.type} onChange={this.handleChange} />
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

export default Admin;
