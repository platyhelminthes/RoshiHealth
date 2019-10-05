import React from 'react'
import { Component } from 'react'
import moment from 'moment';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import Doctors from './doctorPicker.jsx'
import CalendarComp from './calendar.jsx'
import CurrentAppointments from './currentAppointments'
import loadingCircle from '../../Pictures/loadingCircle.png'
import '../Styles/Schedule.css'



class Schedule extends Component {

    constructor() {
        super();

        this.state = {
            count: 0,
            redirect: false,
            APT: null,
            currentAPT: 0,
            docs: [],
            userAppointments: null,
            appointments: ['08:00 ppp', '08:30'],
            appointmentsPresort: [],
            appointmentsToShow: null,
            pickedDoctor: null,
            loading: true,
            providers: [],
            doctor: null,
            doctorType: null,
            docId: null,
            date: null,
            available1: 'available',
            available2: 'available',
            available3: 'available',
            available4: 'available',
            available5: 'available',
            available6: 'available',
            available7: 'available',
            available8: 'available',
            available9: 'available',
            available10: 'available',
            available11: 'available',
            available12: 'available',
            available13: 'available',
            available14: 'available',
            available15: 'available',
            available16: 'available',
            available17: 'available',
            available18: 'available',
            button1: 'book appointment',
            button2: 'book appointment',
            button3: 'book appointment',
            button4: 'book appointment',
            button5: 'book appointment',
            button6: 'book appointment',
            button7: 'book appointment',
            button8: 'book appointment',
            button9: 'book appointment',
            button10: 'book appointment',
            button11: 'book appointment',
            button12: 'book appointment',
            button13: 'book appointment',
            button14: 'book appointment',
            button15: 'book appointment',
            button16: 'book appointment',
            button17: 'book appointment',
            button18: 'book appointment',
            value1: '08:00',
            value2: '08:30',
            value3: '09:00',
            value4: '09:30',
            value5: '10:00',
            value6: '10:30',
            value7: '11:00',
            value8: '11:30',
            value9: '12:00',
            value10: '12:30',
            value11: '13:00:',
            value12: '13:30',
            value13: '14:00',
            value14: '14:30',
            value15: '15:00',
            value16: '15:30',
            value17: '16:00',
            value18: '16:30',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }


    handleChange = (date) => {
        var dateClean = moment(date).format('YYYY-MM-DD')
        this.setState({date: dateClean})
        this.dateCheck(dateClean)
        console.log(this.state.appointments)
    }
    dateCheck = (date) => {
        var matching = []
        for (var i = 0; i < this.state.appointmentsPresort.length; i++) {

            if (moment(this.state.appointmentsPresort[i].date).format('YYYY-MM-DD') == date) {
                matching.push(moment(this.state.appointmentsPresort[i].date).format('LT'))

            }
        }
        console.log(matching)
        this.setState({ appointments: matching })
        matching = []
        setTimeout(this.checkAvailable, 200)
        console.log(this.state.appointments)
    }
    componentDidMount() {
        this.getUser()
        this.getProviders()
    }
    load = () => {
        if (this.state.providers.length == 0) {
            this.setState({count: this.state.count + 1})
            setTimeout(this.checkLoad, 100)
            }

        else {
                console.log('step3')
                this.setState({ loading: false })
            }
        
    }

    checkLoad = () => {
        console.log(this.state.count)
        if(this.state.count > 5){
            this.setState({count: 0})
            this.getProviders()
        }
        else{setTimeout(this.load, 100)}
    }

    nullCheck = () => {
        console.log(this.state.providers)
    }

    handleSubmit(e) {
        (e).preventDefault()
        this.checkAvailable()

    }

    handleSubmit2(e) {
        (e).preventDefault()
        console.log(e.target.value)
        this.getAppointments(e.target.value)
        setTimeout(this.checkAppointments, 300)
        setTimeout(this.checkAPT, 700)
    }

    handleSubmit3(e) {
        (e).preventDefault()
        if(this.state.date == null) {
            alert('Please choose a date')
        }
        else if(this.state.doctor == null){
            alert('Please choose a doctor')
        }
        else if(this.state.doctor == null && this.state.date == null) {
            alert('Please pick a doctor and a date')
        }
        else if(this.state.currentAPT <= 0){
            alert('Please purchase an appointment for this doctor type')
        }
        else{
        this.createAppointment(e.target.value)
        this.setState({ redirect: true })
        }
    }

    createAppointment = (time) => {

        if (time == '') { alert('sorry that time is not available!') }
        else {
            console.log(this.state.doctorType + 'please')
            Axios.post('/api/users/removeAPT',
            {
                ATType: this.state.doctorType
            })

            var dateTime = '' + this.state.date + 'T' + time + ':00.000+00:00'
            console.log(dateTime)
            console.log(moment(dateTime).add(7, 'hours'))
            Axios.post('/api/providers/makeAppointment',
                {
                    date: moment(dateTime).add(7, 'hours'),
                    id: this.state.docId,
                    name: this.state.doctor
                }
            )
        }
    }
    getUser = () => {
        Axios.get('/api/users/getUser')
        .then((res)=>{
            this.setState({
                APT: res.data.data.appointmentTokens,
                userAppointments: res.data.data.appointments
            })
            
        })
    }

    checkDocs = () => {
        console.log(this.state.docs)
    }
    checkAPT = () => {
        console.log(this.state.providers.length)
        console.log(this.state.doctorType)
        console.log(this.state.appointmentsToShow)
        for(var i=0; i < this.state.APT.length; i++) {                  
                if(this.state.doctorType == this.state.APT[i].type){
                    console.log(this.state.APT[i])
                    this.setState({currentAPT: this.state.APT[i].ammount})
            }
        }
    }

    checkAppointments = (name) => {
        console.log('itRand')
        console.log(this.state.doctor)
        var show = []
        for(var i=0; i<this.state.userAppointments.length; i++){
            if(this.state.userAppointments[i].userName == this.state.doctor && moment(this.state.userAppointments[i].date).isAfter()){
                console.log('pushed')
                show.push(this.state.userAppointments[i])
            }
        }
        this.setState({appointmentsToShow: show})
    }
    getProviders = () => {
        Axios.get('/api/users/getProviders')
            .then(
                (res) => {
                    this.setState({ providers: res.data.data })
                }
            ).then(this.load())
    }

    getAppointments = (id) => {
        Axios.post('/api/providers/getAppointments',
            { id: id }
        ).then(
            (res) => {
                this.setState({
                    currentAPT: 0,
                    appointmentsPresort: res.data.data[0].appointments,
                    doctorType: res.data.data[0].providerInfo.providerType,
                    doctor: res.data.data[0].fullName,
                    docId: res.data.data[0]._id
                })
            }
        ).then(this.checkAvailable)
    }

    checkAvailable = () => {
        console.log(moment('2019-09-12T08:00:00.000-07:00').format('LLL'))
        if (this.state.appointments.includes('8:00 AM')) {
            this.setState({ available1: "Not Available", button1: 'Not Available', value1: null })
        }
        else { this.setState({ available1: "Available", button1: 'Book Appointment', value1: '08:00' }) }
        if (this.state.appointments.includes('8:30 AM')) {
            console.log('tester')
            this.setState({ available2: "Not Available", button2: 'Not Available', value2: null })
        }
        else { this.setState({ available2: "Available", button2: 'Book Appointment', value2: '08:30' }) }
        if (this.state.appointments.includes('9:00 AM')) {
            this.setState({ available3: "Not Available", button3: 'Not Available', value3: null })
        }
        else { this.setState({ available3: "Available", button3: 'Book Appointment', value3: '09:00' }) }
        if (this.state.appointments.includes('9:30 AM')) {
            this.setState({ available4: "Not Available", button4: 'Not Available', value4: null })
        }
        else { this.setState({ available4: "Available", button4: 'Book Appointment', value4: '09:30' }) }
        if (this.state.appointments.includes('10:00 AM')) {
            this.setState({ available5: "Not Available", button5: 'Not Available', value5: null })
        }
        else { this.setState({ available5: "Available", button5: 'Book Appointment', value5: '10:00' }) }
        if (this.state.appointments.includes('10:30 AM')) {
            this.setState({ available6: "Not Available", button6: 'Not Available', value6: null })
        }
        else { this.setState({ available6: "Available", button6: 'Book Appointment', value6: '10:30' }) }
        if (this.state.appointments.includes('11:00 AM')) {
            this.setState({ available7: "Not Available", button7: 'Not Available', value7: null })
        }
        else { this.setState({ available7: "Available", button7: 'Book Appointment', value7: '11:00' }) }
        if (this.state.appointments.includes('11:30 AM')) {
            this.setState({ available8: "Not Available", button8: 'Not Available', value8: null })
        }
        else { this.setState({ available8: "Available", button8: 'Book Appointment', value8: '11:30' }) }
        if (this.state.appointments.includes('12:00 PM')) {
            this.setState({ available9: "Not Available", button9: 'Not Available', value9: null })
        }
        else { this.setState({ available9: "Available", button9: 'Book Appointment', value9: '12:00' }) }
        if (this.state.appointments.includes('12:30 PM')) {
            this.setState({ available10: "Not Available", button10: 'Not Available', value10: null })
        }
        else { this.setState({ available10: "Available", button10: 'Book Appointment', value10: '12:30' }) }
        if (this.state.appointments.includes('01:00 PM')) {
            this.setState({ available11: "Not Available", button11: 'Not Available', value11: null })
        }
        else { this.setState({ available11: "Available", button11: 'Book Appointment', value11: '13:00' }) }
        if (this.state.appointments.includes('01:30 PM')) {
            this.setState({ available12: "Not Available", button12: 'Not Available', value12: null })
        }
        else { this.setState({ available12: "Available", button12: 'Book Appointment', value12: '13:30' }) }
        if (this.state.appointments.includes('02:00 PM')) {
            this.setState({ available13: "Not Available", button13: 'Not Available', value13: null })
        }
        else { this.setState({ available13: "Available", button13: 'Book Appointment', value13: '14:00' }) }
        if (this.state.appointments.includes('02:30 PM')) {
            this.setState({ available14: "Not Available", button14: 'Not Available', value14: null })
        }
        else { this.setState({ available14: "Available", button14: 'Book Appointment', value14: '14:30' }) }
        if (this.state.appointments.includes('03:00 PM')) {
            this.setState({ available15: "Not Available", button15: 'Not Available', value15: null })
        }
        else { this.setState({ available15: "Available", button15: 'Book Appointment', value15: '15:00' }) }
        if (this.state.appointments.includes('03:30 PM')) {
            this.setState({ available16: "Not Available", button16: 'Not Available', value16: null })
        }
        else { this.setState({ available16: "Available", button16: 'Book Appointment', value16: '15:30' }) }
        if (this.state.appointments.includes('04:00 PM')) {
            this.setState({ available17: "Not Available", button17: 'Not Available', value17: null })
        }
        else { this.setState({ available17: "Available", button17: 'Book Appointment', value17: '16:00' }) }
        if (this.state.appointments.includes('04:30 PM')) {
            this.setState({ available18: "Not Available", button18: 'Not Available', value18: null })
        }
        else { this.setState({ available18: "Available", button18: 'Book Appointment', value18: '16:30' }) }
    }

    render() {
        var providers = this.state.providers
        var date = this.state.date
        if (this.state.date == null){date = "please choose a date"}
        if (this.state.redirect == true) { return (<Redirect to='/main/overview' />) }
        else if (this.state.loading == true) {
            return (
                <div style={{ alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h1 style={{ marginLeft: '6vw', marginTop: '20vh' }}>Loading...</h1>
                    <img style={{ marginTop: '5vh', width: '300px', height: '297px' }} src={loadingCircle} id="loadingCircle" />
                </div>
            )
        }
        else {
            return (
                <div style={{width: '100%', display: 'flex', flexDirection: 'row', paddingLeft: '5vw', paddingTop: '2vh'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginRight: '10vw', flexDirection: 'column' }}>

                            <Doctors handleSubmit2={this.handleSubmit2} providers={this.state.providers}/>
                            <CurrentAppointments appointments={this.state.appointmentsToShow}/>
                            <CalendarComp handleChange={this.handleChange}/>
                    </div>
                    <div style={{width: '200%', display: 'flex', flexDirection: 'column', marginTop: '4vh'}}>
                    
                    <div style={{backgroundColor: 'gray', width: '45vw', height: '5vh', marginBottom: '5vh', borderRadius: '15px', alignItems: 'center', display: 'flex', justifyContent: 'space-around'}}>
                        <h4 style={{textAlign: 'center', margin: '0', marginTop: '.5vh', width: '50%'}}>{date}</h4>
                        <h4 style={{textAlign: 'center', margin: '0', marginTop: '.5vh', width: '50%'}}> Appointment Tokens Left: {this.state.currentAPT}</h4>
                    </div> 
                    <table style={{justifyContent:'center', width: '89%', backgroundColor: 'gray'}}>
                        <thead>
                            <tr>
                                <th style={{ border: '2px solid black', float: 'left', width: '40%' }}>Time</th>
                                <th style={{ border: '2px solid black', float: 'left', width: '40%' }}>Available</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>8:00AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available1}</td>
                                <button value={this.state.value1} onClick={this.handleSubmit3}>{this.state.button1}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>8:30AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available2}</td>
                                <button value={this.state.value2} onClick={this.handleSubmit3}>{this.state.button2}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>9:00AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available3}</td>
                                <button value={this.state.value3} onClick={this.handleSubmit3}>{this.state.button3}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>9:30AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available4}</td>
                                <button value={this.state.value4} onClick={this.handleSubmit3}>{this.state.button4}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>10:00AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available5}</td>
                                <button value={this.state.value5} onClick={this.handleSubmit3}>{this.state.button5}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>10:30AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available6}</td>
                                <button value={this.state.value6} onClick={this.handleSubmit3}>{this.state.button6}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>11:00AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available7}</td>
                                <button value={this.state.value7} onClick={this.handleSubmit3}>{this.state.button7}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>11:30AM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available8}</td>
                                <button value={this.state.value8} onClick={this.handleSubmit3}>{this.state.button8}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>12:00pm</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available9}</td>
                                <button value={this.state.value9} onClick={this.handleSubmit3}>{this.state.button9}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>12:30pm</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available10}</td>
                                <button value={this.state.value10} onClick={this.handleSubmit3}>{this.state.button10}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>1:00pm</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available11}</td>
                                <button value={this.state.value11} onClick={this.handleSubmit3}>{this.state.button11}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>1:30PM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available12}</td>
                                <button value={this.state.value12} onClick={this.handleSubmit3}>{this.state.button12}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>2:00PM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available13}</td>
                                <button value={this.state.value13} onClick={this.handleSubmit3}>{this.state.button13}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>2:30PM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available14}</td>
                                <button value={this.state.value14} onClick={this.handleSubmit3}>{this.state.button14}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>3:00PM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available15}</td>
                                <button value={this.state.value15} onClick={this.handleSubmit3}>{this.state.button15}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>3:30PM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available16}</td>
                                <button value={this.state.value16} onClick={this.handleSubmit3}>{this.state.button16}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>4:00PM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available17}</td>
                                <button value={this.state.value17} onClick={this.handleSubmit3}>{this.state.button17}</button>
                            </tr>
                            <tr>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>4:30PM</td>
                                <td style={{ border: '2px solid black', float: 'left', width: '40%' }}>{this.state.available18}</td>
                                <button value={this.state.value18} onClick={this.handleSubmit3}>{this.state.button18}</button>
                            </tr>
                        </tbody>


                    </table>
                    </div>





                </div>
            )
        }
    }


}

export default Schedule