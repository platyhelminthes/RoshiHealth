import React from 'react'
import { Component } from 'react'
import moment from 'moment';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import Doctors from './doctorPicker.jsx'
import CalendarComp from './calendar.jsx'
import CurrentAppointments from './currentAppointments'
import loadingCircle from '../../Pictures/loadingCircle.png'
import '../styles/subSchedule.css'
import Appointments from './availableAppointments'
import { isMobile } from 'react-device-detect';



class Schedule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            redirect: false,
            APT: this.props.APT,
            currentAPT: 0,
            docs: [],
            userAppointments: this.props.UAPP,
            appointments: ['08:00 ppp', '08:30'],
            appointmentsPresort: [],
            appointmentsToShow: null,
            pickedDoctor: null,
            loading: false,
            appointmentTimes: [],
            doctor: null,
            doctorType: null,
            docId: null,
            date: null,
            days: null,
            dateDay: null,
            openAppointments: [],
            pickType: null,
            cost: 'doctors price',
            availableDays: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }
    


    handleChange = (date) => {
        if(moment(date).isBefore()){alert('Please only schedule future appointments')}
        else{
        var dateClean = moment(date).format('YYYY-MM-DD')
        var Day = moment(date).format('dddd')
        this.setState({ date: dateClean, dateDay: moment(date).format('dddd')})
        this.dateCheck(dateClean, Day)}
    }

    dateCheck = (date, day12) => {
        var matching = []
        for (var i = 0; i < this.state.appointmentsPresort.length; i++) {

            if (moment(this.state.appointmentsPresort[i].date).format('YYYY-MM-DD') == date) {
                matching.push(moment(this.state.appointmentsPresort[i].date).format('LT'))

            }
        }
        this.setState({ appointments: matching })
        matching = []
        setTimeout(this.checkAvailable, 500)
    }
    componentDidMount() {
        //this.getUser()
        //this.getProviders()
        this.props.closeNav()
        console.log(this.props.UAPP)
        this.load()
    }

    load = () => {
        if (this.state.userAppointments == null) {
            this.setState({ count: this.state.count + 1 })
            setTimeout(this.checkLoad, 100)
        }

        else {
            this.setState({ loading: false })
        }

    }

    // checkLoad = () => {
    //     if (this.state.count > 5) {
    //         this.setState({ count: 0 })
    //         // this.getProviders()
    //     }
    //     else { setTimeout(this.load, 100) }
    // }

    nullCheck = () => {
        console.log(this.state.providers)
    }

    handleSubmit(e) {
        (e).preventDefault()
        this.checkAvailable()
    }

    handleSubmit2(e) {
        (e).preventDefault()
        this.setState({docSelected: e.target.name})
        this.getAppointments(e.target.value)
        setTimeout(this.checkAppointments, 300)
        //setTimeout(this.checkAPT, 700)
    }

    handleSubmit3(e) {
        (e).preventDefault()
        if (this.state.date == null) {
            alert('Please choose a date')
        }
        else if (this.state.doctor == null) {
            alert('Please choose a doctor')
        }
        else if (this.state.doctor == null && this.state.date == null) {
            alert('Please pick a doctor and a date')
        }
        else if (this.props.wallet <= this.props.cost) {
            alert('You do not have enough funds in your wallet to afford this doctor')
        }
        else {
            this.createAppointment(e.target.value)
            
        }
    }

    createAppointment = (time) => {
            var cleanTime = null
        alert(this.state.docSelected + this.props.state.subscription.nurse.initialConsultation)
        if (time == '') { alert('sorry that time is not available!') }
        else {
        var dateTime = '' + this.state.date + 'T' + time + ':00.000+00:00'
        if(this.state.docSelected == 'Nurse'){
            if(this.props.state.subscription.nurse.initialConsultation == false){ 
                Axios.get('/api/users/initialConsultationDone')
            }
            Axios.post('/api/providers/makeAppointment',
            {
                date: moment(dateTime).add(8, 'hours'),
                id: this.state.docId,
                name: this.state.doctor,
                price: 0,
                subAPP: true,
                type: 'Nurse'
            }
            
            )
            this.setState({redirect: true})
        }   
        if(this.state.docSelected == 'Health Counselor'){
            if(this.props.state.subscription.healthCounselor.appointmentTokens > 0){
            Axios.post('/api/users/removeAPT')
            Axios.post('/api/users/updateNextAPPHC', {
                date: moment(dateTime).add(8, 'hours')
            })
            Axios.post('/api/providers/makeAppointment',
            {
                date: moment(dateTime).add(8, 'hours'),
                id: this.state.docId,
                name: this.state.doctor,
                price: 1,
                subAPP: true,
                type: 'Health Counselor'
            }
        )
        this.setState({redirect: true})
        }
    else{alert('not enough tokens')}}
        if(this.state.docSelected == 'Dietitian'){
            if(this.props.state.subscription.dietitian.appointmentTokens > 0){

            Axios.get('/api/users/removeAPTDiet')
            Axios.post('/api/users/updateNextAPPD', {
                date: moment(dateTime).add(8, 'hours')
            })
            Axios.post('/api/providers/makeAppointment',
            {
                date: moment(dateTime).add(8, 'hours'),
                id: this.state.docId,
                name: this.state.doctor,
                price: 1,
                subAPP: true,
                type: 'Dietitian'
            }
        )
        this.setState({redirect: true})
        }
    else{alert('not enought tokens')}}

        

        
        }
    }
    //getUser = () => {
    //    Axios.get('/api/users/getUser')
    //        .then((res) => {
    //            this.setState({
    //                APT: res.data.data.appointmentTokens,
    //                userAppointments: res.data.data.appointments
    //            })
//
    //        })
    //}

    checkDocs = () => {
    }
    //checkAPT = () => {
    //    for (var i = 0; i < this.state.APT.length; i++) {
    //        if (this.state.doctorType == this.state.APT[i].type) {
    //            this.setState({ currentAPT: this.state.APT[i].ammount })
    //        }
    //    }
    //}

    checkAppointments = (name) => {
        var show = []
        if(this.state.userAppointments == null) {}
        else{
        for (var i = 0; i < this.state.userAppointments.length; i++) {
            if (this.state.userAppointments[i].userName == this.state.doctor && moment(this.state.userAppointments[i].date).isAfter()) {
                show.push(this.state.userAppointments[i])
            }
        }
        this.setState({ appointmentsToShow: show })}
    }
    //getProviders = () => {
    //    Axios.get('/api/users/getProviders')
    //        .then(
    //            (res) => {
    //                this.setState({ providers: res.data.data })
    //            }
    //        ).then(this.load())
    //}

    getAppointments = (id) => {
        Axios.post('/api/providers/getAppointments',
            { id: id }
        ).then(
            
            (res) => {
                console.log(res)
                this.setState({
                    appointmentsPresort: res.data.data[0].appointments,
                    doctorType: res.data.data[0].providerInfo.providerType,
                    doctor: res.data.data[0].fullName,
                    docId: res.data.data[0]._id,
                    days: res.data.data[0].providerInfo.availability,
                    cost: res.data.data[0].providerInfo.cost,
                    availableDays: res.data.data[0].providerInfo.availableDays
                })
            }
        ).then(this.checkAvailable)
    }

    checkAvailable = () => {
        alert(this.state.date)
        var datematch = false
        var index = null
        for(var i=0;i<this.state.availableDays.length; i++){
            if(this.state.availableDays[i].date == this.state.date){
                datematch = true
                index = i
            }
        }
        if(this.state.doctor == null){
            return null
        }
        else if(datematch == true){
            for(var i=0; i<this.state.availableDays[index].times.length; i++){
                if(this.state.availableDays[index].times.includes(this.state.appointments[i])){
                    this.state.availableDays[index].times.splice(this.state.availableDays[index].times.indexOf(this.state.appointments[i], 1))
                }
            }
            this.setState({appointmentTimes: this.state.availableDays[index].times})
        }

        else if(this.state.dateDay == 'Monday'){
            for(var i=0; i < this.state.appointments.length;i++){
                if(this.state.days.monday.includes(this.state.appointments[i])){
                    this.state.days.monday.splice(this.state.days.monday.indexOf(this.state.appointments[i]), 1 )
                }
            }
            this.setState({appointmentTimes: this.state.days.monday})
        
        }

        else if(this.state.dateDay == 'Tuesday'){
            for(var i=0; i < this.state.appointments.length;i++){
                if(this.state.days.tuesday.includes(this.state.appointments[i])){
                    this.state.days.tuesday.splice(this.state.days.tuesday.indexOf(this.state.appointments[i]), 1 )
                }
            }
            this.setState({appointmentTimes: this.state.days.tuesday})
        }

        else if(this.state.dateDay == 'Wednesday'){
            for(var i=0; i < this.state.appointments.length;i++){
                if(this.state.days.wednesday.includes(this.state.appointments[i])){
                    this.state.days.wednesday.splice(this.state.days.wednesday.indexOf(this.state.appointments[i]), 1 )
                }
            }
            this.setState({appointmentTimes: this.state.days.wednesday})
        }

        else if(this.state.dateDay == 'Thursday'){
            for(var i=0; i < this.state.appointments.length;i++){
                if(this.state.days.thursday.includes(this.state.appointments[i])){
                    this.state.days.thursday.splice(this.state.days.thursday.indexOf(this.state.appointments[i]), 1 )
                }
            }
            this.setState({appointmentTimes: this.state.days.thursday})
        }

        else if(this.state.dateDay == 'Friday'){
            for(var i=0; i < this.state.appointments.length;i++){
                if(this.state.days.friday.includes(this.state.appointments[i])){
                    this.state.days.friday.splice(this.state.days.friday.indexOf(this.state.appointments[i]), 1 )
                }
            }
            this.setState({appointmentTimes: this.state.days.friday})
        }

        else if(this.state.dateDay == 'Saturday'){
            for(var i=0; i < this.state.appointments.length;i++){
                if(this.state.days.saturday.includes(this.state.appointments[i])){
                    this.state.days.saturday.splice(this.state.days.saturday.indexOf(this.state.appointments[i]), 1 )
                }
            }
            this.setState({appointmentTimes: this.state.days.saturday})
        }

        else if(this.state.dateDay == 'Sunday'){
            for(var i=0; i < this.state.appointments.length;i++){
                if(this.state.days.sunday.includes(this.state.appointments[i])){
                    this.state.days.sunday.splice(this.state.days.sunday.indexOf(this.state.appointments[i]), 1 )
                }
            }
            this.setState({appointmentTimes: this.state.days.sunday})
        }
    }

    render() {
        var date = this.state.date
        if (this.state.date == null) { date = "please choose a date" }
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
                <div className="appointment-cont" >
                    <div className={isMobile ? '__scheduler-doctorInfo-mobile' : '__scheduler-doctorInfo'}>
                        <Doctors handleSubmit2={this.handleSubmit2} providers={this.props.state.subdoctors} />
                        {/* <p>Appointments Left: {this.props.state.subscription.nurse.initialConsultation == false ? ('initial Consultation') : (null)}, Health Counselor: {this.props.state.subscription.healthCounselor.appointmentTokens}, dietitian: {this.props.state.subscription.dietitian.appointmentTokens}</p> */}
                    </div>
                    <div className={isMobile ? '__scheduler-main-mobile' : '__scheduler-main'}>
                        <div className={isMobile ? '__scheduler-left-mobile' : '__scheduler-left'}>
                            <CalendarComp style={{width: '10vw', height: '90%'}} handleChange={this.handleChange} />
                        </div>
                        <div className={isMobile ? '__scheduler-right-mobile' : '__scheduler-right'}>
                            <div className={isMobile ? '__scheduler-right-top-mobile' : '__scheduler-right-top'}>
                                <Appointments times={this.state.appointmentTimes} onClick={this.handleSubmit3}/>
                            </div>
                            <div className={isMobile ? '__scheduler-right-bottom-mobile' : '__scheduler-right-bottom'}>
                                <CurrentAppointments appointments={this.state.appointmentsToShow} />
                            </div>
                        </div>
                    </div>
                    





                </div>
            )
        }
    }


}

export default Schedule


//<div className="no-idea" >
//                        <Doctors handleSubmit2={this.handleSubmit2} providers={this.state.providers} />
//                        <CurrentAppointments appointments={this.state.appointmentsToShow} />
//                        <CalendarComp handleChange={this.handleChange} />
//                    </div>
//                    <div className="wtf" >
//                        <div className="info-bar" >
//                            <h4 style={{ textAlign: 'center', margin: '0', marginTop: '.5vh', width: '50%' }}>{date}</h4>
//                            <h4 style={{ textAlign: 'center', margin: '0', marginTop: '.5vh', width: '50%' }}> Appointment Tokens Left: {this.state.currentAPT}</h4>
//                        </div>
//                        <Appointments times={this.state.appointmentTimes} onClick={this.handleSubmit3}/>
//                    </div>