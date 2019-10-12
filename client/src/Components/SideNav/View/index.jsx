import React from 'react'
import {Component} from 'react'
import '../style/sideNav.css'
import Header from './header'
import Body from './body'
import Axios from 'axios'
import moment from 'moment'





class Sidenav extends Component {
    constructor(props){
        super(props)
        this.state={
            name: null,
            email: null,
            appointments: [],
            APTime: false,
            true: false,
            allowed: null
        }
    }

    componentDidMount(){
        Axios.get('/api/users/getUser').then(
            (res)=>{
                this.setState({
                    name: res.data.data.fullName,
                    email: res.data.data.email,
                    appointments: res.data.data.appointments,
                    allowed: res.data.data.doctorsToAdd
                })
            }
        ).then(setTimeout(this.checkApp, 1000))
        
        
    }

    checkApp = () => {
        console.log('its working')
        console.log(this.state.appointments)
        for(var i=0; i < this.state.appointments.length; i++){
            console.log('hello?')
            var time = moment().subtract(30, 'minutes')
            var APtime = moment(this.state.appointments[i])
            if(moment(APtime).isBefore(time)){
                this.setState({APTime: true})
            }
            else{
                console.log('appointment not ready')
            }
            console.log(moment(this.state.appointments[i]).subtract(30, 'minutes'))
            console.log(moment(this.state.appointments[i]))
        }
    }

    render(){
        return(
            <div id='__side-Nav'>
                <Header name={this.state.name} email={this.state.email}/>
                <Body allowed={this.state.allowed} APtime={this.state.APTime}/>
            </div>
        )
    }
}

export default Sidenav