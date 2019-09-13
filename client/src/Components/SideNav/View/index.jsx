import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "../../../App.css"


class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null
        };
    }

    render() {

        return (
        <div className="sidebar">
            <Link to="/tasks" className="SideLinks">Tasks</Link>
            <Link to="/cart" className="SideLinks">Cart</Link>
            <Link to="/subscription" className="SideLinks">Subscription</Link>
            <Link to="/addProviders" className="SideLinks">Pick a new doctor</Link>
            
          </div>
        );
    }
}

export default Tasks;
