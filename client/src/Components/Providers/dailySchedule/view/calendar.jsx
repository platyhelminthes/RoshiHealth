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

                  style={{borderRadius: '0', marginTop: '0'}}
                />
            </div>
        )
    }
}

export default CalendarComp