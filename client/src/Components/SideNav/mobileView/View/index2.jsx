import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "../../../App.css"
import Axios from 'axios';
import {Redirect} from 'react-router-dom'




class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null,
            sub: null,
            subCheckBut: null,
            linkT: '/main/subscription',
            textT: 'Only Subs May View Tasks',
            linkP: '/main/subscription',
            textP: 'Only Subs May View Providers',
            linkS: '/main/subscription',
            textS: 'Only Subs May Schedule an appointment',
            providerType: 'Patient',
            email: null


        };
    }

    componentDidMount(){
        this.getInfo()
    }
    
    getInfo = () => {
        Axios.get('/api/users/getUser').then(
            (res)=>{
                console.log(res.data)
                this.setState({
                    sub: res.data.data.subLevel,
                    providerType: res.data.data.providerInfo.providerType,
                    email: res.data.data.email
                })
            }
        )
        .catch(
            (err) => {
              
              this.setState({redirect: true})
            }).then(this.load())
    }

    load = () => {
        console.log(this.state.sub)
        if(this.state.sub == null) {
            setTimeout(this.load, 1000)
        }
        else if(this.state.sub == 'nonSub'){this.subButtons = ('')}
        else if(this.state.sub == 'A1237'){this.subButton = ('')}
    }
    render() {
        var sub = this.state.sub
        if(this.state.redirect == true){return(<Redirect to='/login'/>)}
        else if(this.state.providerType != 'Patient'){
            return(
                <div className="sidebar">

                <div style={{height: '75vh',display: 'flex', flexDirection: 'column', justifyContent: 'start', fontSize: '13.5px'}}>
                <Link to='/main/sendTasks' style={{marginTop: '1vh'}} className="SideLinks">Tasks</Link>
                <Link to="/main/appointments" className="SideLinks">Appointments</Link>
                <Link to='/main/sendDoctor' className="SideLinks">Patients</Link>
                </div>
                <div style={{backgroundColor: '#36393F', height: '5vh', border: '2px solid #26262b', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
                <p style={{justifySelf: 'center', alignSelf: 'center', margin: 0, width: '100%',paddingTop: '.75vh', fontSize: '.75vw', textAlign: 'center'}}>{this.state.email}</p>
            </div>
                
              </div>
            )
        }
        //else if(sub == 'nonSub'){return(
        //    <div className="sidebar">
        //    <div style={{height: '75vh',display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
        //    <Link to="/main/cart" style={{marginTop: '1vh'}} className="SideLinks">Cart</Link>
        //    <Link to="/main/subscription" className="SideLinks">Subscription</Link>
        //    </div>
        //    <div style={{backgroundColor: '#36393F', height: '5vh', border: '2px solid #26262b', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
        //        <p style={{justifySelf: 'center', alignSelf: 'center', margin: 0, width: '100%',paddingTop: '.75vh', fontSize: '.75vw', textAlign: 'center'}}>{this.state.email}</p>
        //    </div>
        //    
        //  </div>
        //)}
        else {
        return (
        <div className="sidebar">

            <div style={{height: '75vh',display: 'flex', flexDirection: 'column', justifyContent: 'start', borderTop: 'solid 1px white' }}>
            <Link to="/main/cart" style={{marginTop: '1vh'}} className="SideLinks">Cart</Link>
            <Link to='/main/addProviders' className="SideLinks">Team</Link>
            <Link to='/main/scheduler' className="SideLinks">Make Appointment</Link>
            <Link to='/main/tasks' className="SideLinks">Tasks</Link>
            <Link to='/main/video' className="SideLinks">Video Appointment</Link>
            <Link to='/main/store' className="SideLinks">Store</Link>
            </div>
            <div style={{backgroundColor: 'gray', height: '5vh', border: '2px solid #26262b'}}>
                <p style={{justifySelf: 'center', alignSelf: 'center', margin: 0, width: '100%',paddingTop: '.75vh', fontSize: '.75vw', textAlign: 'center'}}>{this.state.email}</p>
            </div>
            
          </div>
        )};
    }
}

export default Tasks;
