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
            linkT: '/subscription',
            textT: 'Only Subs May View Tasks',
            linkP: '/subscription',
            textP: 'Only Subs May View Providers',
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
            linkT: '/tasks', 
            textT: 'Tasks', 
            linkP: '/addProviders', 
            textP: 'Add a provider'
        })}
    }
    render() {
        if(this.state.providerType != 'Patient'){
            return(
                <div className="sidebar">
                {this.state.subCheckBut}
                <Link to='/sendTasks' className="SideLinks">Send a task to your patients</Link>
                <Link to="/appointments" className="SideLinks">See appointments</Link>
                
              </div>
            )
        }
        else{
        return (
        <div className="sidebar">
            {this.state.subCheckBut}
            <Link to={this.state.linkT} className="SideLinks">{this.state.textT}</Link>
            <Link to="/cart" className="SideLinks">Cart</Link>
            <Link to="/subscription" className="SideLinks">Subscription</Link>
            <Link to={this.state.linkP} className="SideLinks">{this.state.textP}</Link>
            
          </div>
        )};
    }
}

export default Tasks;
