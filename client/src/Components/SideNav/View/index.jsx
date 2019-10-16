import React from 'react'
import {Component} from 'react'
import '../style/sideNav.css'
import Header from './header'
import Body from './body'
import Axios from 'axios'
import moment from 'moment'
import BodyD from './bodyDoctor'





class Sidenav extends Component {
    constructor(props){
        super(props)
        this.state={
            name: null,
            email: null,
            appointments: [],
            APTime: false,
            true: false,
            allowed: ['none'],
            doctor: 'Patient'
            
        }
    }

    componentDidMount(){
        Axios.get('/api/users/getUser').then(
            (res)=>{
                this.setState({
                    name: res.data.data.fullName,
                    email: res.data.data.email,
                    appointments: res.data.data.appointments,
                    allowed: res.data.data.doctorsToAdd,
                    doctor: res.data.data.providerInfo.providerType
                })
            }
        ).then(setTimeout(this.checkApp, 1000))
        
        
    }

    checkApp = () => {
        for(var i=0; i < this.state.appointments.length; i++){
            var time = moment().subtract(30, 'minutes')
            var APtime = moment(this.state.appointments[i])
            if(moment(APtime).isBefore(time)){
                this.setState({APTime: true})
            }
            else{
                console.log('appointment not ready')
            }
        }
    }

    render(){
        return(
            <div id='__side-Nav'>
                <Header name={this.state.name} email={this.state.email}/>
                {this.state.doctor == 'Patient' ?
                (<Body allowed={this.state.allowed} APtime={this.state.APTime}/>)
                :
                (<BodyD/>)
                }
            </div>
        )
    }
}

export default Sidenav