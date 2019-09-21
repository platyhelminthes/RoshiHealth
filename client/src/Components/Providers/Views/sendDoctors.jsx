import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import loadingCircle from '../../Pictures/loadingCircle.png'


class SendTasks extends Component {
    constructor() {
        super();

        this.state = {
            doctor: null,
            patients: null,
            loading: true,
            id: null
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
        this.sendDoctor(this.state.doctor, e.target.value)
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

    sendDoctor = (name, id) => {
        if(this.sanatize(name) || this.sanatize(id)){alert('No injections allowed!')}
        else{
            console.log(id)
            console.log(name)
        axios.post('/api/providers/sendDoctor',
            {
                name: name,
                id: id
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

        if(this.state.loading == true){return(
          <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <h1 style={{marginLeft: '6vw', marginTop: '20vh'}}>Loading...</h1>
              <img style={{marginTop: '5vh', width:'300px', height:'297px'}}src={loadingCircle} id="loadingCircle"/>
          </div>
          )}
      else if(redirect == true){return (<Redirect to="/main/overview"/>)}
        return (

            <div>
    <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="doctor">Doctor Type</label>
            <input type="text" id="doctor" className="FormField__Input" placeholder="Enter type of doctor" name="doctor" onChange={this.handleChange} />
          </div>


        </form>
      </div>
      <Table>
            <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="right">Send</TableCell>
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