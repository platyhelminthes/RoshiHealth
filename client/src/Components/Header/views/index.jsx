import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../HeaderNav/index';
import SideDrawer from '../HeaderSideDrawer/SideDrawer';
import Backdrop from '../HeaderBackDrop/Backdrop';
import "../../../App.css";
import Axios from 'axios';



class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null,
            email: null,
            name: null,
            sideDrawerOpen: false

        };
    }
    componentDidMount() {
        this.getInfo()
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
      };
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
      };

    getInfo = () => {
        Axios.get('/api/users/getUserInfo')
            .then(
                (res) => {
                    this.setState({ email: res.data.email, name: res.data.name })
                }
            )
    }
    logOut = () => {
        Axios.get('/api/login/logOut')
    }

    render() {
        let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

        return (
            <div className="Header">
                <HeaderNav drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
                <h3 className="JoeMax">{this.state.email}</h3>
                <h3 className="JoeMax">{this.state.name}</h3>
                <div style={{ marginTop: '3vh' }}>
                    <Link to='/main/overview' className="JoeMax" style={{ marginRight: '2vw', marginTop: '2vh', color: 'white', textDecoration: 'none' }}>Home</Link>
                    <Link to='/login' className="JoeMax" onClick={this.logOut} style={{ marginRight: '2vw', marginTop: '2vh', color: 'white', textDecoration: 'none' }}>Logout?</Link>
                </div>
            </div>
        );
    }
}

export default Tasks;
