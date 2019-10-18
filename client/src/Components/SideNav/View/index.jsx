import React from 'react'
import {Component} from 'react'
import '../style/sideNav.css'
import Header from './header'
import Body from './body'
import moment from 'moment'
import BodyD from './bodyDoctor'





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
            <div id='__side-Nav'>
                <Header name={this.props.name} email={this.props.email}/>
                {this.props.doctor == 'Patient' ?
                (<Body doctors={this.props.doctors} allowed={this.props.allowed} APtime={this.state.APTime}/>)
                :
                (<BodyD/>)
                }
            </div>
        )
    }
}

export default Sidenav