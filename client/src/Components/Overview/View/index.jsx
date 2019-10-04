import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment'
import Alerts from './upcomingAlerts'
import News from './news'
import SubInfo from './subscriberInfo'
import Promotion from './promotion'

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
            appointments: null,
            AK: null
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
    }





    componentDidMount(){
        setTimeout(this.getInfo, 300)
        setTimeout(this.load, 1000)
    }

    load = () => {
        if(this.state.appointments == null){
            setTimeout(this.load, 1000)
        }
        else{this.setState({loading: false})}
    }

    getInfo = () => {
        axios.get('/api/users/getUser').then(
            (res)=>{
                if(!res.data.data.email){this.setState({redirect: true})}
                this.setState({
                    sub: res.data.data.subLevel, 
                    email: res.data.data.email,
                    fullName: res.data.data.fullName,
                    providerType: res.data.data.providerInfo.providerType,
                    AK: res.data.data._id
                })
                if(res.data.data.appointments.length > 0){
                for(var i=0; i<res.data.data.appointments.length; i++){
                    console.log(moment(res.data.data.appointments[i].date).format('LLL') + " This is the APPOINTMENT")
                    console.log(moment().format('LLL') +'what')
                    if(moment(moment(res.data.data.appointments[i].date).format('LLL')).isBefore()){
                        console.log('What the actual fuck')
                        res.data.data.appointments.splice(i, 1)
                        }else{
                        console.log(moment(moment(res.data.data.appointments[i].date).format('LLL'), 'LLL').fromNow() + "hoohah")
                    res.data.data.appointments[i].date = moment(moment(res.data.data.appointments[i].date).format('LLL'), 'LLL').fromNow()
                    }
                }}
                console.log(res.data.data.appointments)
                console.log('After appointment')
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
        var appointments = this.state.appointments
        if(appointments != null){console.log(appointments)}
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
        <div style={{display: "flex", flexDirection: "column", height: '90vh', overflow: 'hidden'}}>

            <div style={{display: "flex"}}>

            <div style={{minWidth: '25vw', marginLeft: '5vw'}}>
            <SubInfo/>
            <Promotion/>
            </div>
            <div style={{minWidth: '35vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <News/>
            </div>
            <div style={{minWidth: '30vw'}}>
            <Alerts AP={this.state.appointments}/>
            </div>
            </div>

          </div>
        );
    }




}

export default Overview


//<h1>Email: {email}</h1>
//<h1>Name: {name}</h1>


//<Table>
//<TableHead>
//<TableRow>
//<TableCell></TableCell>
//<TableCell align="left"></TableCell>
//</TableRow>
//</TableHead>
//<TableBody>
//{this.noAppointments}
//
//{appointments.map(row => (
//<TableRow key={row._id}>
//  <TableCell component="th" scope="row">
//    You have an appointment with {row.userName} in
//  </TableCell>
//  <TableCell align="left">{row.date}</TableCell>
//</TableRow>
//))}
//</TableBody>
//</Table>