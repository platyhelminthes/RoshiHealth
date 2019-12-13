import React from 'react'
import {Component} from 'react'
import '../availability/styles/availability.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';
import moment from 'moment'


class Availability extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            daySelected: null,
            timesAM: ['12:00 AM', '1:00 AM','2:00 AM','3:00 AM','4:00 AM','5:00 AM','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM'],
            timesPM: ['12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM'],
            monday: [1],
            tuesday: [1],
            wednesday: [1],
            thursday: [1],
            friday: [1],
            saturday: [1],
            sunday: [1],
            displayTimesAM: ['select ', 'a', ' time'],
            displayTimesPM: ['select ', 'a', ' time']
        }
        this.clickHandle = this.clickHandle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.resetDay = this.resetDay.bind(this)
    }

    componentDidMount(){

        this.getUser()
        this.props.closeNav()
    }

   

    timesToSendAM = []
    timesToSendPM = []

    getUser = () => {
        Axios.get('/api/users/getUser')
        .then((res)=> {
            console.log(res)
            this.setState({
                name: res.data.data.fullName,
                monday: res.data.data.providerInfo.availability.monday,
                tuesday: res.data.data.providerInfo.availability.tuesday,
                wednesday: res.data.data.providerInfo.availability.wednesday,
                thursday: res.data.data.providerInfo.availability.thursday,
                friday: res.data.data.providerInfo.availability.friday,
                saturday: res.data.data.providerInfo.availability.saturday,
                sunday: res.data.data.providerInfo.availability.sunday,
            })
        })
    }

    clickHandle = (e) => {
        (e).preventDefault()
        this.timesToSendAM.length = 0
        this.timesToSendPM.length = 0
        this.setState({daySelected: e.target.value})
        setTimeout(this.reset, 50)
        setTimeout(this.checkTimes, 100)
    }

    resetDay = (e) => {
        (e).preventDefault()
        if(this.state.daySelected == null){
            alert('select a day')
        }
        else{
            alert('day resetting')
        Axios.post('/api/providers/resetDay', {
            day: this.state.daySelected
        })}
    }

    reset = () => {
        this.setState({timesAM: ['12:00 AM', '1:00 AM','2:00 AM','3:00 AM','4:00 AM','5:00 AM','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM']})
        this.setState({timesPM: ['12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM']})
    }

    checkTimes = () => {
        var timeAM = ['12:00 AM', '1:00 AM','2:00 AM','3:00 AM','4:00 AM','5:00 AM','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM']
        var timePM = ['12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM']
        if(this.state.daySelected == 'monday'){
            if(this.state.monday.length > 0){
                alert('You already have a schedule for today')
            }
            if(this.state.monday != null){
        
        for(var i=0; i<this.state.monday.length; i++){
            if(this.state.timesAM.includes(this.state.monday[i])){
                var number = timeAM.indexOf(this.state.monday[i])
                timeAM.splice(number, 1)
            }
            if(this.state.timesPM.includes(this.state.monday[i])){
                var number = timePM.indexOf(this.state.monday[i])
                timePM.splice(number, 1)
            }
        }}
    }

        if(this.state.daySelected == 'tuesday'){
            console.log(this.state.tuesday)
            if(this.state.tuesday != null){
            for(var i=0; i<this.state.tuesday.length; i++){
                if(this.state.timesAM.includes(this.state.tuesday[i])){
                    var number = timeAM.indexOf(this.state.tuesday[i])
                    timeAM.splice(number, 1)
                }
                if(this.state.timesPM.includes(this.state.tuesday[i])){
                    var number = timePM.indexOf(this.state.tuesday[i])
                    timePM.splice(number, 1)
                }
            }}
        }

        if(this.state.daySelected == 'wednesday'){
            for(var i=0; i<this.state.wednesday.length; i++){
                if(this.state.timesAM.includes(this.state.wednesday[i])){
                    var number = timeAM.indexOf(this.state.wednesday[i])
                    timeAM.splice(number, 1)
                }
                if(this.state.timesPM.includes(this.state.wednesday[i])){
                    var number = timePM.indexOf(this.state.wednesday[i])
                    timePM.splice(number, 1)
                }
            }}

        if(this.state.daySelected == 'thursday'){
            for(var i=0; i<this.state.thursday.length; i++){
                if(this.state.timesAM.includes(this.state.thursday[i])){
                    var number = timeAM.indexOf(this.state.thursday[i])
                    timeAM.splice(number, 1)
                }
                if(this.state.timesPM.includes(this.state.thursday[i])){
                    var number = timePM.indexOf(this.state.thursday[i])
                    timePM.splice(number, 1)
                }
            }}

        if(this.state.daySelected == 'friday'){
            for(var i=0; i<this.state.friday.length; i++){
                if(this.state.timesAM.includes(this.state.friday[i])){
                    var number = timeAM.indexOf(this.state.friday[i])
                    timeAM.splice(number, 1)
                }
                if(this.state.timesPM.includes(this.state.friday[i])){
                    var number = timePM.indexOf(this.state.friday[i])
                    timePM.splice(number, 1)
                }
            }}

            if(this.state.daySelected == 'saturday'){
                for(var i=0; i<this.state.saturday.length; i++){
                    if(this.state.timesAM.includes(this.state.saturday[i])){
                        var number = timeAM.indexOf(this.state.saturday[i])
                        timeAM.splice(number, 1)
                    }
                    if(this.state.timesPM.includes(this.state.saturday[i])){
                        var number = timePM.indexOf(this.state.saturday[i])
                        timePM.splice(number, 1)
                    }
                }}
                
                if(this.state.daySelected == 'sunday'){
                    for(var i=0; i<this.state.sunday.length; i++){
                        if(this.state.timesAM.includes(this.state.sunday[i])){
                            var number = timeAM.indexOf(this.state.sunday[i])
                            timeAM.splice(number, 1)
                        }
                        if(this.state.timesPM.includes(this.state.sunday[i])){
                            var number = timePM.indexOf(this.state.sunday[i])
                            timePM.splice(number, 1)
                        }
                    }}                      
            
        setTimeout(()=>{this.setState({timesAM: timeAM, timesPM: timePM})},100)
    }

    handleClick = (e) => {
        if(this.timesToSendAM.includes(e.target.value) || this.timesToSendPM.includes(e.target.value)){console.log('null')}
        else{
        if(e.target.value.includes('AM')){
        this.timesToSendAM.push(e.target.value)
        this.timesToSendAM.push(moment(e.target.value, 'hh:mm A').add( 30, 'minutes').format('h:mm A'))
        this.timesToSendAM.sort()
        setTimeout(()=>{
            this.setState({displayTimesAM: this.timesToSendAM})
        }, 300)
    }
    else{this.timesToSendPM.push(e.target.value)
        this.timesToSendPM.push(moment(e.target.value, 'hh:mm A').add( 30, 'minutes').format('h:mm A'))
        this.timesToSendPM.sort()
        setTimeout(()=>{
            this.setState({displayTimesPM: this.timesToSendPM})
        }, 300)}}
}

    handleClick2 = (e) => {
        (e).preventDefault()
        if(this.state.daySelected == null){alert('choose a day')}
        else if(this.timesToSendAM.length == 0 || this.timesToSendPM.length == 0){alert('select a time')}
        else{
        this.sendTimes()
        setTimeout(this.getUser, 500)
        setTimeout(this.reset, 700)
        setTimeout(this.checkTimes, 900)
        }
        
    }

    sendTimes = () => {
        var timesToSendFinal = this.timesToSendAM.concat(this.timesToSendPM)
        
        Axios.post('/api/providers/addAvailability', {
            day: this.state.daySelected,
            time: this.timesToSendFinal
        })
    }


    render(){
        var timesAM = this.state.timesAM
        var timesPM = this.state.timesPM
        return(
            <div className='__availability-Main'>
                <div className='__availability-Days'>
                    <button onClick={this.clickHandle}value='monday'>monday</button>
                    <button onClick={this.clickHandle}value='tuesday'>tuesday</button>
                    <button onClick={this.clickHandle}value='wednesday'>wednesday</button>
                    <button onClick={this.clickHandle}value='thursday'>thursday</button>
                    <button onClick={this.clickHandle}value='friday'>friday</button>
                    <button onClick={this.clickHandle}value='saturday'>saturday</button>
                    <button onClick={this.clickHandle}value='sunday'>sunday</button>
                </div>
                <div className='__action-buttons'>
                <button onClick={this.handleClick2}>Set Day</button>
                <button onClick={this.resetDay}>Reset This Day</button>
                </div>
                <div className='__display-times'>
                    <div className="__display-times-AM">
                    {this.state.displayTimesAM.map((row)=>(
                    <p>{row}</p>
                    ))}
                    </div>
                    <div className="__display-times-PM">
                    {this.state.displayTimesPM.map((row)=>(
                    <p>{row}</p>
                    ))}
                    </div>
                </div>
                <div className='__availability-Bottom'>
                <div className='__availability-Left'>
                    <div>
                    <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'white'}}>Time</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                {timesAM.map(
                    row=>(
                <TableRow >
                <TableCell style={{color: 'white'}} component="th" scope="row">{row}</TableCell>
                <TableCell align="left"><button value={row} onClick={this.handleClick} className='__availability-Table-Buttons'>Available</button></TableCell>
                </TableRow>
                ))}
        </TableBody>
      </Table>
                    </div>
                </div>
                <div className='__availability-Right'>
                    <div>
                    <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'white'}}>Time</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                {timesPM.map(row=>(
                <TableRow >
                <TableCell style={{color: 'white'}} component="th" scope="row">{row}</TableCell>
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

export default Availability