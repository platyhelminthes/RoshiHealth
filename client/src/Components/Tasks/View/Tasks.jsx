import React, { Component } from 'react';
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Redirect} from 'react-router-dom';
import moment from 'moment'

import loadingCircle from '../../Pictures/loadingCircle.png'

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            task: null,
            sub: null,
            redirect: false,
            loading: true
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
        ).then(this.load())
    }

    load = () => {
      if(this.state.task == null){
        console.log(this.state.task)
          setTimeout(this.load, 200)
      }
      else{this.setState({loading: false})}
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
      }).then(this.setState({redirect: true}))
    }

    render() {
        var tasks = this.state.task
        if(this.state.redirect == true) {
          return(<Redirect to='/main/overview'/>)
        }
        else if(this.state.loading == true){return(
          <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <h1 style={{marginLeft: '6vw', marginTop: '20vh'}}>Loading...</h1>
              <img style={{marginTop: '5vh', width:'300px', height:'297px'}}src={loadingCircle} id="loadingCircle"/>
          </div>
          )}
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
