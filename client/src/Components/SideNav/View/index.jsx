import React from 'react'
import {Component} from 'react'
import '../style/sideNav.css'
import Header from './header'
import Body from './body'
import moment from 'moment'
import BodyD from './bodyDoctor'
import Footer from './footer'
import {isMobile} from 'react-device-detect'





class Sidenav extends Component {
    constructor(props){
        super(props)
        this.state={
            APTime: false,
            true: false,
        }
    }

    componentDidMount(){
        setTimeout(this.checkApp, 1000)
    }

    checkApp = () => {
        for(var i=0; i < this.props.appointments.length; i++){
            var time = moment().subtract(30, 'minutes')
            var APtime = moment(this.props.appointments[i])
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
            <div id={isMobile ? '__side-Nav-Mobile' : this.props.open == true ? '__side-Nav' : '__side-nav-closed'}>
                {isMobile ? 
                (null)
                :
                (<Header hidden={this.props.open} profilePic={this.props.profilePic} name={this.props.name} email={this.props.email} subLevel={this.props.subLevel}/>)}
                {this.props.doctor == 'Patient' ?
                (<Body subLevel={this.props.subLevel} sub={this.props.sub} doctors={this.props.doctors} allowed={this.props.allowed} APtime={this.state.APTime}/>)
                :
                (<BodyD/>)
                }
                {isMobile ? 
                (null)
            :
            (<Footer/>)}
            </div>
        )
    }
}

export default Sidenav