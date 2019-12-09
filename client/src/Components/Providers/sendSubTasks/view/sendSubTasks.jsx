import React, {Component} from 'react'
import Axios from 'axios'
import '../styles/sendSubTasks.css'
import {Link} from 'react-router-dom'

import { Table, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core'

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


    handleSubmit(e){
        if(this.state.body == null || e.target.value == null || this.state.DueDate == null){
            alert('there was an issue sending this task')
        }
        else{
        Axios.post('/api/providers/sendSubTask',
        {
            text: this.state.body,
            email: e.target.value,
            date: this.state.DueDate
        })}
    }
    
    render(){
        return(
            <div className='__send-sub-tasks-main'>
                <div className='__send-sub-tasks-container'>
                <form onSubmit={this.handleSubmit} style={{padding: '1vw', borderBottom: '1px solid white'}} className="FormFields">

            <div className="FormField">
                <label className="FormField__Label" htmlFor="body">body</label>
                <textarea required='required' type="text-area" id="body" className="FormField__Input" placeholder="Enter your body" name="body" value={this.state.body} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                <label className="FormField__Label" htmlFor="DueDate">DueDate</label>
                <input required='required' type="date" id="DueDate" className="FormField__Input" placeholder="Enter your DueDate" name="DueDate" value={this.state.DueDate} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                
              </div>
            </form>
            <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white'}}>
                                Name
                            </TableCell>
                            <TableCell style={{color: 'white'}}>
                                Email
                            </TableCell>
                            <TableCell style={{color: 'white'}}>
                                Phone
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.patients.map(
                                row => (
                                    <TableRow>
                                        <TableCell style={{color: 'white'}}>
                                            {row.fullName}
                                        </TableCell>
                                        <TableCell style={{color: 'white'}}>
                                            {row.email}
                                        </TableCell>
                                        <TableCell>
                                        <button value={row.email} onClick={this.handleSubmit}>Send</button>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
                </div>
            </div>
        )
    }


}

export default sendSubtasks