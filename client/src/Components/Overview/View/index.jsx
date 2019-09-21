import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'

import loadingCircle from '../../Pictures/loadingCircle.png'



class Overview extends Component{

    constructor() {
        super();

        this.state = {
            email: null,
            fullName: null,
            loading: true,
            redirect: false,
            providers: [],
            sub: null,
            providerType: 'Patient',
            appointments: null
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
        console.log(this.state.email2);
    }





    componentDidMount(){
        setTimeout(this.getInfo, 200)
        setTimeout(this.getProviders, 1000)
        setTimeout(this.getProviders2, 2000)
        setTimeout(this.getProviders2, 3000)
        this.load()
    }

    load = () => {
        if(this.state.appointments == null){
            setTimeout(this.load, 200)
        }
        else{this.setState({loading: false})}
    }

    getInfo = () => {
        axios.get('/api/users/getUser').then(
            (res)=>{
                if(!res.data.data.email){this.setState({redirect: true})}
                console.log(res)
                this.setState({
                    sub: res.data.data.subLevel, 
                    email: res.data.data.email,
                    fullName: res.data.data.fullName,
                    providerType: res.data.data.providerInfo.providerType
                })
                console.log(res.data.data.appointments)
                for(var i=0;i<res.data.data.appointments.length;i++){
                    if(moment(moment(res.data.data.appointments[i].date).format('LLL')).isBefore()){res.data.data.appointments.splice(i, 1)}
                    
                    res.data.data.appointments[i].date = moment(moment(res.data.data.appointments[i].date).format('LLL'), 'LLL').fromNow()
                    
                }
                this.setState({appointments: res.data.data.appointments})
            }
        ).then(this.getProviders)
    }

    getProviders2 = () => {
        if (!this.state.providers) {console.log('WhatthefUck')}
    }

    getProviders = () => {
        axios.get('/api/users/getProviders')
        .then(
            (res) => {
                this.setState({providers: res.data.data})
            }
        )
    }

    
    render() {
        var email = this.state.email;
        var name = this.state.fullName;
        var loading = this.state.loading
        var providers = this.state.providers
        var appointments = this.state.appointments
        if(this.state.redirect == true){return(<Redirect to="/login"/>)}
        else if(this.state.loading == true){return(
            <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
                <h1 style={{marginLeft: '6vw', marginTop: '20vh'}}>Loading...</h1>
                <img style={{marginTop: '5vh', width:'300px', height:'297px'}}src={loadingCircle} id="loadingCircle"/>
            </div>
            )}
        else if(this.state.providerType != "Patient") {
            return(
<div style={{display: "flex", flexDirection: "column"}}>

            <div style={{display: "flex"}}>

            <div>
            <h1>Your Provider Email: {email}</h1>
            <h1>Your Provider Name: {name}</h1>
        

            </div>
            </div>

          </div>
            )
        }
        return (
        <div style={{display: "flex", flexDirection: "column", height: '90vh'}}>

            <div style={{display: "flex"}}>

            <div>
            <h1>Email: {email}</h1>
            <h1>Name: {name}</h1>
            <Table>
            <TableHead>
            <TableRow>
            <TableCell></TableCell>
            <TableCell align="left"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {appointments.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                You have an appointment with {row.userName} in
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
            ))}
            </TableBody>
            </Table>
                </div>
            </div>

          </div>
        );
    }




}

export default Overview