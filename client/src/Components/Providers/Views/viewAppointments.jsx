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
            loading: true,
            appointments: [],
            APID: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      (e).preventDefault()

      this.goToAppointment(e.target.value)
  }
    componentDidMount(){
      axios.get('/api/users/getUser').then(
        (res)=>{
          this.setState({ appointments: res.data.data.appointments})
          }
        )
    .then(this.load())
    }

    goToAppointment = (id) => {
      this.setState({
        APID: id,
        redirect: true
      })

    }

    load = () => {
      if(this.state.appointments == null){
        console.log(this.state.task)
          setTimeout(this.load, 1000)
      }
      else{this.setState({loading: false})}
  }
    

    

    render() {
        var appointments = this.state.appointments
        var ID = this.state.APID
        if(this.state.redirect == true) {
          return(<Redirect to={{
            pathname: '/main/video',
            state: {id: ID}
          }}/>)
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
          {appointments.map(
            
            
            row => (
            <TableRow key={row._id}>
              <TableCell style={{color: 'white'}} component="th" scope="row">
                {row.text}
              </TableCell>
              <TableCell style={{color: 'white'}} align="left">{row.userName}</TableCell>
              <TableCell style={{color: 'white'}} align="right">{moment(row.dueDate).format('dddd')}</TableCell>
              <TableCell style={{color: 'white'}} align="right"><button onClick={this.handleSubmit} value={row.user}>Finish</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </div>
        );
    }
}

export default Tasks;
