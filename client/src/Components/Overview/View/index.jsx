import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import News from './news'
import SubInfo from './subscriberInfo'
import Promotion from './promotion'
import '../Styling/overview.css'
import Alerts from './alerts'

import loadingCircle from '../../Pictures/loadingCircle.png'



class Overview extends Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            redirect: false,
            providerType: 'Patient',
        };
        
    }

    componentDidMount() {

        setTimeout(this.load, 100)
    }


    render() {
        var appointments = this.state.appointments
        if (appointments != null) { console.log(appointments) }
        if (this.state.redirect == true) { return (<Redirect to="/login" />) }
        else if (this.state.loading == true) {
            return (
                <div style={{ alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h1 style={{ marginLeft: '6vw', marginTop: '20vh' }}>Loading...</h1>
                    <img style={{ marginTop: '5vh', width: '300px', height: '297px' }} src={loadingCircle} id="loadingCircle" />
                </div>
            )
        }
        return (
            <div className="overview-container">

                {/* <div > */}
                {/* style={{ display: "flex" }} */}
                    <div className="overview-panel-one" >
                        {
                        this.props.state.subscription ?
                        (<SubInfo subLevel={this.props.subLevel} state={this.props.state.subscription} address={this.props.state.address}/>)
                        :
                        (null)}
                        {/* <Promotion /> */}
                    </div>
                    <div className="overview-panel-two" >
                        <News />
                        <Alerts />
                    </div>
                    {/* <div className="overview-panel-three" >
                        <Alerts AP={this.state.appointments} />
                    </div> */}
                {/* </div> */}

            </div>
        );
    }




}

export default Overview