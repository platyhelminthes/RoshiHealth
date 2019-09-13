import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class SendTasks extends Component {
    constructor() {
        super();

        this.state = {
            task: null,
            patients: null
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
        this.sendTasks(this.state.task)
    }

    componentDidMount(){
        this.getPatients()
    }
    
    getPatients = () => {
        axios.post('/api/providers/getPatients')
        .then(
            (res)=>{
                console.log(res)
            }
        )
    }

    sendTasks = (task) => {
        axios.post('/api/task/addTask',
            {
                task: task
            }
        )
    }


    render() {
      var redirect = this.state.redirect
      if(redirect == true){return (<Redirect to="/Main"/>)}
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

export default SendTasks;