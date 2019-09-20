import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "../../../App.css"
import Axios from 'axios';


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
        ).then(this.load())
    }

    load = () => {
        if(this.state.sub == null) {
            setTimeout(this.load, 200)
            setTimeout(this.getInfo, 500)
        }
        else if(this.state.sub == 'notSub'){this.subButtons = ('')}
        else if(this.state.sub == 'A1237'){this.subButton = ('')}
    }
    subButton = (<React.Fragment>
            <Link to="/main/subscription" className="SideLinks">Subscription</Link>
        </React.Fragment>)

    subButtons = (<React.Fragment>
    <Link to='/main/addProviders' className="SideLinks">Team</Link>
    <Link to='/main/scheduler' className="SideLinks">Make Appointment</Link>
    <Link to='/main/tasks' className="SideLinks">Tasks</Link>
    </React.Fragment>)
    render() {
        if(this.state.providerType != 'Patient'){
            return(
                <div className="sidebar">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',alignContent: 'center', backgroundColor: '#36393F', height: '10vh', border: '2px solid #26262b', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                <div style={{backgroundColor: 'white', width: '6vw', height: '.5vh'}}></div>
                <div style={{backgroundColor: 'white', width: '6vw', height: '.5vh'}}></div>
                <div style={{backgroundColor: 'white', width: '6vw', height: '.5vh'}}></div>
                </div>
            </div>
                
                <Link to='/main/sendTasks' style={{marginTop: '1vh'}} className="SideLinks">Tasks</Link>
                <Link to="/main/appointments" className="SideLinks">Appointments</Link>
                <Link to='/main/sendDoctor' className="SideLinks">Patients</Link>
                <div style={{backgroundColor: '#36393F', height: '5vh', border: '2px solid #26262b', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
                <p style={{justifySelf: 'center', alignSelf: 'center', margin: 0, width: '100%',paddingTop: '.75vh', fontSize: '.75vw', textAlign: 'center'}}>{this.state.email}</p>
            </div>
                
              </div>
            )
        }
        else{
        return (
        <div className="sidebar">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',alignContent: 'center', backgroundColor: '#36393F', height: '10vh', border: '2px solid #26262b', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                <div style={{backgroundColor: 'white', width: '6vw', height: '.5vh'}}></div>
                <div style={{backgroundColor: 'white', width: '6vw', height: '.5vh'}}></div>
                <div style={{backgroundColor: 'white', width: '6vw', height: '.5vh'}}></div>
                </div>
            </div>
            <div style={{height: '75vh',display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
            <Link to="/main/cart" style={{marginTop: '1vh'}} className="SideLinks">Cart</Link>
            {this.subButton}
            {this.subButtons}
            </div>
            <div style={{backgroundColor: '#36393F', height: '5vh', border: '2px solid #26262b', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
                <p style={{justifySelf: 'center', alignSelf: 'center', margin: 0, width: '100%',paddingTop: '.75vh', fontSize: '.75vw', textAlign: 'center'}}>{this.state.email}</p>
            </div>
            
          </div>
        )};
    }
}

export default Tasks;