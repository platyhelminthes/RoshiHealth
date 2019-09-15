import React, { Component } from 'react';
import axios from 'axios'
import Header from '../../Header/views/index'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            task: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      (e).preventDefault()

      this.finishTask(e.target.value)
  }
  tasks = []
    componentDidMount(){
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
        return (
        <div>
            <Header/>
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
          {tasks.map(
            
            
            row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.text}
              </TableCell>
              <TableCell align="left">{row.providerName}</TableCell>
              <TableCell align="right">{Date.now}</TableCell>
              <TableCell align="right"><button onClick={this.handleSubmit} value={row._id}>Finish</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </div>
        );
    }
}

export default Tasks;
