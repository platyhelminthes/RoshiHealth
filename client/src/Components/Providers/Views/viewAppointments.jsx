import React, { Component } from 'react';
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Redirect} from 'react-router-dom';
import moment from 'moment'
import {isMobile} from 'react-device-detect'
import '../viewAppointments/styles/viewAppointments.css'

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
      this.props.closeNav()
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
      var sortedArray = this.props.state.appointments.sort((a,b) => new moment(a.date).format('YYYYMMDD') - new moment(b.date).format('YYYYMMDD'))
        var ID = this.state.APID
        if(this.state.redirect == true) {
          return(<Redirect to={{
            pathname: '/video',
            state: {id: ID, clicked: true}
          }}/>)
        }
        else if(this.state.loading == true){return(
          <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <h1 style={{marginLeft: '6vw', marginTop: '20vh'}}>Loading...</h1>
              <img style={{marginTop: '5vh', width:'300px', height:'297px'}}src={loadingCircle} id="loadingCircle"/>
          </div>
          )}
        return (
        <div className='__d-appointments-main'>
            <Table>
            <TableHead>
          <TableRow>
            <TableCell style={{color: 'black'}} align="left">Patient</TableCell>
            <TableCell style={{color: 'black'}} align="right">Appointment Time</TableCell>
            <TableCell style={{color: 'black'}} align="right">Go to your appointment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedArray.map(
            
            
            row => (
            <TableRow key={row._id}>
              <TableCell style={{color: 'black'}} align="left">{row.userName}</TableCell>
              <TableCell style={{color: 'black'}} align="right">{moment(row.date).format('dddd MMMM DD [at] LT')}</TableCell>
              <TableCell style={{color: 'black'}} align="right"><button onClick={this.handleSubmit} value={row.user}>Go to appointment</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </div>
        );
    }
}

export default Tasks;
