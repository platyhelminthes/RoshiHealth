import React, { Component } from 'react';
import axios from 'axios'
import Header from '../../Header/views/index'

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            task: []
        };
    }

    componentDidMount(){
        axios.get('/api/users/getUserInfo').then(
            (res)=>{
                console.log(res.data.task)
                this.setState({task: res.data.task})
            }
        )
    }

    render() {
        var tasks = this.state.task
        console.log(tasks)
        return (
        <div>
            <Header/>
            {
                tasks.map(row => (
                    <div key={row._id}>
                        <h1>provider: {row.providerName}</h1>
                        <h1>Task: {row.text}</h1>
                    </div>
                    )
                )
            }
          </div>
        );
    }
}

export default Tasks;
