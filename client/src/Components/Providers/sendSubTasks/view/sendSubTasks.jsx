import React, {Component} from 'react'
import Axios from 'axios'
import '../styles/sendSubTasks.css'
import {Link} from 'react-router-dom'

class sendSubtasks extends Component {

    constructor(props){
        super(props)
        this.state = {
            body: null,
            DueDate: null,
            email: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }


    handleSubmit(){
        Axios.post('/api/providers/sendSubTask',
        {
            text: this.state.body,
            email: this.state.email,
            date: this.state.DueDate
        })
    }
    
    render(){
        return(
            <div className='__send-sub-tasks-main'>
                <div className='__send-sub-tasks-container'>
                <form onSubmit={this.handleSubmit} className="FormFields">

                <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Patient Email</label>
                <input required='required' type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

            <div className="FormField">
                <label className="FormField__Label" htmlFor="body">body</label>
                <textarea required='required' type="text-area" id="body" className="FormField__Input" placeholder="Enter your body" name="body" value={this.state.body} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                <label className="FormField__Label" htmlFor="DueDate">DueDate</label>
                <input required='required' type="date" id="DueDate" className="FormField__Input" placeholder="Enter your DueDate" name="DueDate" value={this.state.DueDate} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  
                    <button className="FormField__Button mr-20">Send Task</button>
                     <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
                </div>
            </div>
        )
    }


}

export default sendSubtasks