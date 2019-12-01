import React, { Component } from 'react'
import '../styles/dailySchedule.css'
import { Redirect } from 'react-router-dom'
import '../styles/dailySchedule.css'
import moment from 'moment'
import CalendarComp from './calendar'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';

class dailySchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: 'Please Choose A Date',
            dateDay: null,
            timesAM: ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'],
            timesPM: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'],
            displayTimes: ['select ', 'a', ' time' ,' (leave blank for unavailable)'],
            availableDays: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSend = this.handleSend.bind(this)
    }

    componentDidMount(){

        this.getUser()
        
    }

    timesToSend = []

    getUser = () => {
        Axios.get('/api/users/getUser')
        .then((res)=> {
            console.log(res.data.data.providerInfo)
            this.setState({
                name: res.data.data.fullName,
                availableDays: res.data.data.providerInfo.availableDays
            })
        })
    }

    handleClick = (e) => {
        if(this.timesToSend.includes(e.target.value)){alert('Time Already Selected')}
        else{
        this.checkTimes()
        this.timesToSend.push(e.target.value)
        this.timesToSend.push(moment(e.target.value, 'hh:mm A').add( 30, 'minutes').format('h:mm A'))
        this.setState({displayTimes: this.timesToSend})
        setTimeout(this.checkTimes, 100)}
    }

    handleChange = (date) => {
        var dateClean = moment(date).format('YYYY-MM-DD')
        var Day = moment(date).format('dddd')
        this.checkTimes(dateClean)
        this.setState({ date: dateClean, dateDay: moment(date).format('dddd') })
    }

    handleSend = () => {
        this.sendDate(this.state.date, this.timesToSend)
    }

    checkTimes = (date) => {
        var timeAM = ['12:00 AM', '1:00 AM','2:00 AM','3:00 AM','4:00 AM','5:00 AM','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM']
        var timePM = ['12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM']
        console.log(this.state.availableDays)
        for(var i=0; i<this.state.availableDays.length; i++){
            if(date == this.state.availableDays[i].date){
                alert('This day has already been set. To reset this date please go to your schedule info panel and reset this date')
                this.setState({timesAM: [], timesPM: []})
            }
        }
}

    sendDate(date, time){
        Axios.post('/api/providers/dailySchedule',
        { date: date,
          times: time})
    }

    render() {
        var timesAM = this.state.timesAM
        var timesPM = this.state.timesPM
        if (this.props.state.doctor == 'Patient') {
            return (<Redirect to='/main' />)
        }
        else {
            return (
                <div className='__daily-schedule-main'>
                    <div className='__daily-top-box'>
                        <div className='__top-box-left'>
                        <h3 style={{ textAlign: "center"}}>{this.state.date}</h3>
                        <button onClick={this.handleSend}>Finish</button>
                        </div>
                        <div className='__top-box-right'>
                        {this.state.displayTimes.map(
                            row=> (
                            <h5>{row} &nbsp;&nbsp;</h5>
                            )
                        )}
                        </div>
                    </div>
                    <div className='__daily-bottom-box'>
                        <div className='__daily-bottom-left'>
                            <CalendarComp handleChange={this.handleChange} />
                        </div>
                        <div className='__daily-bottom-right'>
                            <div className='__daily-bottom-am'>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ color: 'white' }}>Time</TableCell>
                                            <TableCell align="left"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {timesAM.map(
                                            row => (
                                                <TableRow >
                                                    <TableCell style={{ color: 'white' }} component="th" scope="row">{row}</TableCell>
                                                    <TableCell align="left"><button value={row} onClick={this.handleClick} className='__availability-Table-Buttons'>Available</button></TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className='__daily-bottom-pm'>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ color: 'white' }}>Time</TableCell>
                                            <TableCell align="left"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {timesPM.map(row => (
                                            <TableRow >
                                                <TableCell style={{ color: 'white' }} component="th" scope="row">{row}</TableCell>
                                                <TableCell align="left"><button value={row} onClick={this.handleClick} className='__availability-Table-Buttons'>Available</button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default dailySchedule