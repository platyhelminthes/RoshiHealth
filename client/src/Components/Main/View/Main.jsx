import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Sidebar from '../../SideNav/View/index'
import Header from '../../Header/views/index'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Main extends Component {



    constructor() {
        super();

        this.state = {
            email: null,
            fullName: null,
            loading: true,
            redirect: false,
            providers: [],
            sub: null,
            providerType: 'Patient'
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
        this.sendTask(this.state.task2, this.state.email2)
    }





    componentDidMount(){
        setTimeout(this.getInfo, 200)
        setTimeout(this.getProviders, 1000)
        setTimeout(this.getProviders2, 2000)
        setTimeout(this.getProviders2, 3000)
    }

    getInfo = () => {
        axios.get('/api/users/getUserInfo').then(
            (res)=>{
                if(!res.data.email){this.setState({redirect: true})}
                this.setState({
                    sub: res.data.sub, 
                    email: res.data.email,
                    fullName: res.data.name, 
                    task: res.data.task[0].text, 
                    loading: false,
                    providerType: res.data.providerType
                })
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
        if(this.state.redirect == true){return(<Redirect to="/login"/>)}
        else if(loading == true){return(<h1>Loading...</h1>)}
        else if(this.state.providerType != "Patient") {
            return(
<div style={{display: "flex", flexDirection: "column"}}>
            <Header/>
            <div style={{display: "flex"}}>
            <Sidebar/>
            <div>
            <h1>Your Provider Email: {email}</h1>
            <h1>Your Provider Name: {name}</h1>
        

            </div>
            </div>

          </div>
            )
        }
        return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Header/>
            <div style={{display: "flex"}}>
            <Sidebar/>
            <div>
            <h1>Email: {email}</h1>
            <h1>Name: {name}</h1>
            <h1>Your provider team</h1>
            <Table>
            <TableHead>
            <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">Type</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {providers.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.providerInfo.providerType}</TableCell>
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

export default Main;


