import React from 'react'
import {Component} from 'react'
import '../style/mobile.css'
import Header from './header'
import MobileBody from './body'
import Axios from 'axios'
import moment from 'moment'





class SidenavMobile extends Component {
    constructor(props){
        super(props)
        this.state={
            name: null,
            email: null,
            appointments: [],
            APTime: false,
            true: false
        }
    }

    componentDidMount(){
        Axios.get('/api/users/getUser').then(
            (res)=>{
                this.setState({
                    name: res.data.data.fullName,
                    email: res.data.data.email,
                    appointments: res.data.data.appointments
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

            }

        }
    }

    render(){
        return(
            <div id='__mobile-side-Nav'>
                <Header name={this.state.name} email={this.state.email}/>
                <MobileBody APtime={this.state.APTime}/>
            </div>
        )
    }
}

export default SidenavMobile;