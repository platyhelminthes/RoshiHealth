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
            <div>
                <Calendar
                  onChange={this.props.handleChange}
                  value={this.state.date}
                />
            </div>
        )
    }
}

export default CalendarComp