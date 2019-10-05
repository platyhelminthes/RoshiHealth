import React from 'react'
import {Component} from 'react'
import moment from 'moment'


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
        <div style={{backgroundColor: 'gray', height: '35vh', width: '23vw', borderRadius: '15px'}}>
    <h4>Current appointments will go here</h4>
    </div>
    )}
    else{
    return(
            <div style={{backgroundColor: 'gray', height: '35vh', width: '23vw', borderRadius: '15px'}}>
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