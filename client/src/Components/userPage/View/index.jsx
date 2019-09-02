import React from 'react';
import {Component} from 'react'
import axios from 'axios'

class View extends Component {
    state = {
        email: null,
    }


componentDidMount(){
    this.Check()
}

    Check = () => {
        axios.get('/api/users/getUserInfo', {
        }).then((res)=>{this.setState({email: res.data.email})})
    }


    render(){
        return (<div>
            <h1>{this.state.email}</h1>
            </div>)
    }
}

export default View