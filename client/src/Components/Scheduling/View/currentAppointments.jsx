import React from 'react'
import {Component} from 'react'
import moment from 'moment'
import {isMobile} from 'react-device-detect'


class CurrentAppointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null
        }
    }

render(){
    var appointments = this.props.appointments
    if(appointments == null){return(
        <div className={isMobile ? 'appt-card-mobile' : "appt-card"} >
    <h4>Current appointments will go here</h4>
    </div>
    )}
    else{
    return(
            <div className="idk-wtf-this-is" >
                {            
                    appointments.map(
                        row => (
                            <p>{row.userName} on {moment(row.date).format('LLLL')}</p>
                        )
            )}
            </div>
        )}
    }
}

export default CurrentAppointments