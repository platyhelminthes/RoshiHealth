import React from 'react'
import {Component} from 'react'
import Calendar from 'react-calendar'


class CalendarComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null
        }
    }

render(){

    return(
            <div style={{paddingLeft: '5%', paddingRight: '5%', height: '90%', marginTop: '5%', marginBottom: '10%', borderRight: '1px solid black'}}>
                <Calendar
                  onChange={this.props.handleChange}
                  value={this.state.date}
                />
            </div>
        )
    }
}

export default CalendarComp