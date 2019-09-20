import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "../../../App.css"
import Axios from 'axios';



class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null,
            email: null,
            name: null

        };
    }
    componentDidMount(){
        this.getInfo()
    }

    getInfo = () => {
        Axios.get('/api/users/getUserInfo')
        .then(
            (res) => {
                this.setState({email: res.data.email, name: res.data.name})
            }
        )
    }
    logOut = () => {
        Axios.get('/api/login/logOut')
    }

    render() {

        return (
        <div className="Header">
            <h3>{this.state.email}</h3>
            <h3>{this.state.name}</h3>
            <div style={{marginTop: '3vh'}}>
            <Link to='/main/overview' style={{marginRight: '2vw', marginTop:'2vh', color: 'white', textDecoration: 'none'}}>Home</Link>
            <Link to='/login' onClick={this.logOut}style={{marginRight: '2vw', marginTop:'2vh', color: 'white', textDecoration: 'none'}}>Logout?</Link>
            </div>
          </div>
        );
    }
}

export default Tasks;
