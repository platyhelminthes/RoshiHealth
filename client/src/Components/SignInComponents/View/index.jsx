import React from 'react';
import {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class View extends Component {
    state = {
        email: null,
        password: null,
        emailLog: null,
        passwordLog: null
    }
    CreateAccount = (email, password) => {
        axios.post('/api/users/createUser', {
          email: email,
          password: password,
        });
      };

    Login = (emailLog, passwordLog) => {
        axios.post('/api/login/login', {
            email: emailLog,
            password: passwordLog
        });
    };

    Check = () => {
        axios.get('/api/login/check', {

        })
    }


    render(){
        return (<div>
            <h1>Create Account</h1>
            <input type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })}/>
            <input type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })}/>
            <button href="/" variant="primary" type="submit" onClick={() => this.CreateAccount(this.state.email, this.state.password, this.state.name)}>Submit</button>
            <h1>Login To Account</h1>
            <input type="email" placeholder="Enter email" onChange={(e) => this.setState({ emailLog: e.target.value })}/>
            <input type="password" placeholder="Password" onChange={(e) => this.setState({ passwordLog: e.target.value })}/>
            <button href="/" variant="primary" type="submit" onClick={() => this.Login(this.state.emailLog, this.state.passwordLog)}>Submit</button>
            <h1>Check Login</h1>
            <button onClick={() => this.Check()}>Check</button>
            <Link to="/user">Go To Your User Info</Link>
            </div>)
    }
}

export default View