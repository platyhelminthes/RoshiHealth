import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Main extends Component {

    constructor() {
        super();

        this.state = {
            email: null,
            fullName: null,
            task: null,
            email2: null,
            task2: null,
            loading: true
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
        console.log(this.state.email2);
        this.sendTask(this.state.task2, this.state.email2)
    }



    componentDidMount(){
        setTimeout(this.getInfo, 3000)
    }

    getInfo = () => {
        axios.get('/api/users/getUserInfo').then(
            (res)=>{
                console.log(res.data.task[0].text)
                this.setState({email: res.data.email, fullName: res.data.name, task: res.data.task[0].text, loading: false})
            }
        )
    }

    sendTask = (task, email) => {
        console.log('CLICKED!')
        axios.post('/api/tasks/addTask', {
            task: task,
            email: email
        })
    }



    render() {
        var email = this.state.email;
        var name = this.state.fullName;
        var task = this.state.task
        var loading = this.state.loading
        if(loading == true){return(<h1>Loading...</h1>)}
        return (
        <div>
            <h1>Email: {email}</h1>
            <h1>Name: {name}</h1>
            <h1>First Task: {task}</h1>
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
            <label className="FormField__Label" htmlFor="email">Users Email</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter Users Email" name="email2" value={this.state.email2} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="text">Task</label>
            <input type="text" id="task" className="FormField__Input" placeholder="Enter Task" name="task2" value={this.state.task2} onChange={this.handleChange} />
          </div>
            <button className="FormField__Button mr-20">Send Task</button>
            </form>
          </div>
        );
    }
}

export default Main;
