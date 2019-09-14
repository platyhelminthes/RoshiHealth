import React, { Component } from 'react';
import axios from 'axios'
import Header from '../../Header/views/index'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
            <Table>
            <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell align="left">Doctor</TableCell>
            <TableCell align="right">Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.text}
              </TableCell>
              <TableCell align="left">{row.providerName}</TableCell>
              <TableCell align="right">{Date.now}</TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </div>
        );
    }
}

export default Tasks;
