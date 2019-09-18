import React, { Component } from 'react';
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Redirect} from 'react-router-dom';
import moment from 'moment'

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            task: [],
            sub: null,
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      (e).preventDefault()

      this.finishTask(e.target.value)
  }
  tasks = []
    componentDidMount(){
      axios.get('/api/users/getUserInfo').then(
        (res)=>{
          if(res.data.sub != 'A1237'){
          this.setState({
            redirect: true
          })}
        }
      )
        axios.get('/api/tasks/getTasks').then(
            (res)=>{
                console.log(res.data.data[0].tasks)
                this.tasks = res.data.data[0].tasks
                //this.setState({task: results})
            }
        ).then(
          setTimeout(this.sortTasks, 1000)
        )
    }
    sortTasks = () => {
      var push = []
      for(var i=0;i<this.tasks.length;i++){
        if(this.tasks[i].finished == 'Active') {
          push.push(this.tasks[i])
        }
      }
      this.setState({task: push})
    }

    finishTask = (id) => {
      axios.post('/api/tasks/finishTask',
      {
        id: id
      })
    }

    render() {
        var tasks = this.state.task
        if(this.state.redirect == true) {
          return(<Redirect to='/main/overview'/>)
        }
        return (
        <div>
            <Table>
            <TableHead>
          <TableRow>
            <TableCell style={{color: 'white'}}>Task</TableCell>
            <TableCell style={{color: 'white'}} align="left">Doctor</TableCell>
            <TableCell style={{color: 'white'}} align="right">Due Date</TableCell>
            <TableCell style={{color: 'white'}} align="right">Finish Task</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(
            
            
            row => (
            <TableRow key={row._id}>
              <TableCell style={{color: 'white'}} component="th" scope="row">
                {row.text}
              </TableCell>
              <TableCell style={{color: 'white'}} align="left">{row.providerName}</TableCell>
              <TableCell style={{color: 'white'}} align="right">{moment(row.dueDate).format('dddd')}</TableCell>
              <TableCell style={{color: 'white'}} align="right"><button onClick={this.handleSubmit} value={row._id}>Finish</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </div>
        );
    }
}

export default Tasks;
