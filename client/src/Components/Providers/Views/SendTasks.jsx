import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Header from '../../Header/views/index'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class SendTasks extends Component {
    constructor() {
        super();

        this.state = {
            task: null,
            patients: null,
            loading: true,
            date: null
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
        this.sendTasks(this.state.task, e.target.value, this.state.date)
    }

    componentDidMount(){
        setTimeout(this.getPatients,500)
        setTimeout(this.finishLoading, 700)
    }
    
    finishLoading = () => {
        if(this.state.patients != null){
            this.setState({loading: false})
        }
        else{
            setTimeout(this.finishLoading, 500)
        }
    }

    getPatients = () => {
        axios.post('/api/providers/getPatients')
        .then(
            (res)=>{
                this.setState({
                    patients: res.data.data
                })
            }
        )
    }

    sendTasks = (task, id, date) => {
        if(this.sanatize(task)){alert('No injections allowed!')}
        else{
            console.log(id)
            console.log(date)
        axios.post('/api/tasks/addTask',
            {
                task: task,
                id: id,
                date: date
            }
        )}
    }

    sanatize = (string) => {
        var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(format.test(string)){
            return true
        }
        else{
            return false
        }
        
    }

    render() {
        var patients = this.state.patients
      var redirect = this.state.redirect
        var loading = this.state.loading

      if(loading == true){return(<h1>loading</h1>)}
      else if(redirect == true){return (<Redirect to="/Main"/>)}
        return (

            <div style={{backgroundColor: '#9DA6B1'}}>
            <Header/>
    <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="task">Task</label>
            <input type="text" id="task" className="FormField__Input" placeholder="Enter Task" name="task" onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="date">Due Date</label>
            <input type="Date" id="date" className="FormField__Input" placeholder="Enter Task" name="date" onChange={this.handleChange} />
          </div>

        </form>
      </div>
      <Table>
            <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell align="left">Doctor</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Finish Task</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map(
            
            
            row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="right"><button onClick={this.handleSubmit} value={row._id}>Send</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
      </div>
        );
    }
}

export default SendTasks;