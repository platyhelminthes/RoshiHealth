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
            providerType: 'Patient'


        };
    }

    componentDidMount(){
        Axios.get('/api/users/getUserInfo').then(
            (res)=>{
                console.log(res.data)
                this.setState({
                    sub: res.data.sub,
                    providerType: res.data.providerType
                })
            }
        )
        setTimeout(this.subCheck, 100)
        setTimeout(this.subCheck, 200)
        setTimeout(this.subCheck, 500)
        setTimeout(this.subCheck, 1000)
    }
    subCheck = () => {
        if(this.state.sub == 'A1237'){this.setState({
            linkT: '/main/tasks', 
            textT: 'Tasks', 
            linkP: '/main/addProviders', 
            textP: 'Add a provider',
            linkS: '/main/scheduler',
            textS: 'Schedule an appointment'
        })}
    }
    render() {
        if(this.state.providerType != 'Patient'){
            return(
                <div className="sidebar">
                {this.state.subCheckBut}
                <Link to='/main/sendTasks' className="SideLinks">Send a task to your patients</Link>
                <Link to="/main/appointments" className="SideLinks">See appointments</Link>
                
              </div>
            )
        }
        else{
        return (
        <div className="sidebar">
            {this.state.subCheckBut}
            <Link to={this.state.linkT} className="SideLinks">{this.state.textT}</Link>
            <Link to="/main/cart" className="SideLinks">Cart</Link>
            <Link to="/main/subscription" className="SideLinks">Subscription</Link>
            <Link to={this.state.linkP} className="SideLinks">{this.state.textP}</Link>
            <Link to={this.state.linkS} className="SideLinks">{this.state.textS}</Link>
            
          </div>
        )};
    }
}

export default Tasks;
