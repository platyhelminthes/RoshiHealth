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
      redirect: false,
      textsAllowed: null,
      number: null,
      state: null,
      city: null,
      postal: null,
      country: null,

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
    this.CreateAccount(this.state.name, this.state.email, this.state.password, this.state.number, this.state.textsAllowed, this.fixAdd(this.state.city), this.state.state.toUpperCase(), parseInt(this.state.postal), this.fixAdd(this.state.street), this.fixAdd(this.state.country))


    console.log('The form was submitted with the following data:');
    console.log(this.state);

  }

  fixAdd = (add) => {
    return add.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  Login = () => {
    if(this.sanatize(this.state.email)){alert('No injections allowed!')}
    else{
    axios.post('/api/login/login', {
        email: this.state.email.toLowerCase(),
        password: this.state.password
    }).then(
      
      (res) => {
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

  CreateAccount = (name, email, password, number, texts, city, state, postal, street, country) => {
    if(this.sanatize(name) || this.sanatize(email)){alert('no injections allowed')}
    else{
      axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json',
      {
          'params': {
              'app_id': 'cknViiHbBitKALTfsgfS',
              'app_code': '6FGojQdspXZo83PgXlLqng',
              'query': country+', '+state+', '+city+', '+street,
              'maxresults': 1
          }
      }).then(
          (res)=>{
              if(city == res.data.suggestions[0].address.city){
                axios.post('/api/users/createUser', {
                  fullName: name,
                  email: email.toLowerCase(),
                  password: password,
                  number: number,
                  texts: texts,
                  city: city,
                  state: state,
                  postal: postal,
                  street: street,
                  country: country
                }).then(
                  
                  (res2)=>{
                    console.log(res2.data)
                    if(res2.data.success == false){
                      alert('Sorry that email is taken')
                    }
                    else{
                    setTimeout(this.Login, 500)}
                  })
              }
              else(alert('This is an invalid address'))
          }
      )
  }
  };
  render() {
    if(this.state.redirect == true){return(<Redirect to='/main'/>)}
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" required='required' className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" required='required' minLength='8' className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" required='required' className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div style={{border: '1px solid gray', marginRight: '10%', padding: '1vw', marginBottom: '2vw'}}>
            <h3>Address</h3>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="text">Street</label>
            <input type="text" id="street" className="FormField__Input" placeholder="Street Address" name="street" value={this.state.street} onChange={this.handleChange} />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '75%'}}>
          <div className="FormField" style={{width: '50%'}}>
            <label className="FormField__Label" htmlFor="text">City</label>
            <input type="text" id="city" className="FormField__Input" placeholder="City" name="city" value={this.state.city} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="text">State</label>
            <input type="text" id="state" className="FormField__Input" maxLength='2' minLength='2' placeholder="State" name="state" value={this.state.state} onChange={this.handleChange} />
          </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '75%'}}>
          <div className="FormField" style={{width: '50%'}}>
            <label className="FormField__Label" htmlFor="text">Country</label>
            <input type="text" id="country" className="FormField__Input" placeholder="Country" name="country" value={this.state.country} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="text">Postal Code</label>
            <input type="text" id="postal" className="FormField__Input" placeholder="ZIP" name="postal" value={this.state.postal} onChange={this.handleChange} />
          </div>
          </div>
          </div>


          <div className="FormField">
            <label className="FormField__Label" htmlFor="tel">Cell Number</label>
            <input type="tel" id="number" className="FormField__Input" maxLength='10' minLength="10" placeholder="Enter your phone number (optional)" name="number" value={this.state.number} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="textsAllowed" value={this.state.textsAllowed} onChange={this.handleChange} /> Allow text alerts
            </label>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" required='required' type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
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
