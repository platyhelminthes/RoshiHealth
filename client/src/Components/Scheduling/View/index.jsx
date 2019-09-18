import React from 'react'
import {Component} from 'react'
import moment from 'moment';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'



class Schedule extends Component{

    constructor() {
        super();

        this.state = {
            redirect: false,
            appointments: ['08:00 ppp', '08:30'],
            appointmentsPresort: [],
            loading: true,
            providers: null,
            doctor: null,
            docId: null,
            date: null,
            redirect: false,
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

    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
        this.dateCheck(e.target.value)
        console.log(this.state.appointments)
    }
    dateCheck = (date) => {
        var matching = []
        for(var i=0;i<this.state.appointmentsPresort.length;i++){
            
            if(moment(this.state.appointmentsPresort[i].date).format('YYYY-MM-DD') == date){
                matching.push(moment(this.state.appointmentsPresort[i].date).format('LT'))

            }
        }
        console.log(matching)
        this.setState({appointments: matching})
        matching = []
        setTimeout(this.checkAvailable, 200)
        console.log(this.state.appointments)
    }
    componentDidMount(){
        this.getProviders()
    }

    load = () => {

        if(this.state.providers == null){
            setTimeout(this.load, 100)
        }
        else{
            if(this.state.providers.length == 0){
                console.log('step1')
                setTimeout(this.getProviders, 200)
    
            }
            else{
            console.log('step3')
            this.setState({loading: false})}
        }
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
        this.getAppointments(e.target.value)
    }

    handleSubmit3(e){
        (e).preventDefault()
        this.createAppointment(e.target.value)
        this.setState({redirect: true})
    }

    createAppointment = (time) => {

        if(time == ''){alert('sorry that time is not available!')}
        else{

        var dateTime = ''+ this.state.date + 'T' + time + ':00.000+00:00'
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

    getProviders = () => {
        Axios.get('/api/users/getProviders')
        .then(
            (res) => {
                this.setState({providers: res.data.data})
            }
        ).then(this.load())
    }

    getAppointments = (id) => {
        Axios.post('/api/providers/getAppointments',
                {id: id}
        ).then(
            (res) => {
                this.setState({
                    appointmentsPresort: res.data.data[0].appointments,
                    doctor: res.data.data[0].fullName,
                    docId: res.data.data[0]._id
                })
            }
        ).then(this.checkAvailable)
    }

    checkAvailable = () => {
        console.log(moment('2019-09-12T08:00:00.000-07:00').format('LLL'))
        if(this.state.appointments.includes('8:00 AM')){
            this.setState({available1: "Not Available", button1:'Not Available', value1: null})
        }
        else{this.setState({available1: "Available", button1:'Book Appointment', value1: '08:00'})}
        if(this.state.appointments.includes('8:30 AM')){
            console.log('tester')
            this.setState({available2: "Not Available", button2:'Not Available', value2: null}) 
        }
        else{this.setState({available2: "Available", button2:'Book Appointment', value2: '08:30'})}
        if(this.state.appointments.includes('9:00 AM')){
            this.setState({available3: "Not Available" , button3:'Not Available', value3: null})
        }
        else{this.setState({available3: "Available", button3:'Book Appointment', value3: '09:00'})}
        if(this.state.appointments.includes('9:30 AM')){
            this.setState({available4: "Not Available", button4:'Not Available', value4: null})
        }
        else{this.setState({available4: "Available", button4:'Book Appointment', value4: '09:30'})}
        if(this.state.appointments.includes('10:00 AM')){
            this.setState({available5: "Not Available", button5:'Not Available', value5: null})
        }
        else{this.setState({available5: "Available", button5:'Book Appointment', value5: '10:00'})}
        if(this.state.appointments.includes('10:30 AM')){
            this.setState({available6: "Not Available", button6:'Not Available', value6: null})
        }
        else{this.setState({available6: "Available", button6:'Book Appointment', value6: '10:30'})}
        if(this.state.appointments.includes('11:00 AM')){
            this.setState({available7: "Not Available", button7:'Not Available', value7: null})
        }
        else{this.setState({available7: "Available", button7:'Book Appointment', value7: '11:00'})}
        if(this.state.appointments.includes('11:30 AM')){
            this.setState({available8: "Not Available", button8:'Not Available', value8: null})
        }
        else{this.setState({available8: "Available", button8:'Book Appointment', value8: '11:30'})}
        if(this.state.appointments.includes('12:00 PM')){
            this.setState({available9: "Not Available", button9:'Not Available', value9: null})
        }
        else{this.setState({available9: "Available", button9:'Book Appointment', value9: '12:00'})}
        if(this.state.appointments.includes('12:30 PM')){
            this.setState({available10: "Not Available", button10:'Not Available', value10: null})
        }
        else{this.setState({available10: "Available", button10:'Book Appointment', value10: '12:30'})}
        if(this.state.appointments.includes('01:00 PM')){
            this.setState({available11: "Not Available", button11:'Not Available', value11: null})
        }
        else{this.setState({available11: "Available", button11:'Book Appointment', value11: '13:00'})}
        if(this.state.appointments.includes('01:30 PM')){
            this.setState({available12: "Not Available", button12:'Not Available', value12: null})
        }
        else{this.setState({available12: "Available", button12:'Book Appointment', value12: '13:30'})}
        if(this.state.appointments.includes('02:00 PM')){
            this.setState({available13: "Not Available", button13:'Not Available', value13: null})
        }
        else{this.setState({available13: "Available", button13:'Book Appointment', value13: '14:00'})}
        if(this.state.appointments.includes('02:30 PM')){
            this.setState({available14: "Not Available", button14:'Not Available', value14: null})
        }
        else{this.setState({available14: "Available", button14:'Book Appointment', value14: '14:30'})}
        if(this.state.appointments.includes('03:00 PM')){
            this.setState({available15: "Not Available", button15:'Not Available', value15: null})
        }
        else{this.setState({available15: "Available", button15:'Book Appointment', value15: '15:00'})}
        if(this.state.appointments.includes('03:30 PM')){
            this.setState({available16: "Not Available", button16:'Not Available', value16: null})
        }
        else{this.setState({available16: "Available", button16:'Book Appointment', value16: '15:30'})}
        if(this.state.appointments.includes('04:00 PM')){
            this.setState({available17: "Not Available", button17:'Not Available', value17: null})
        }
        else{this.setState({available17: "Available", button17:'Book Appointment', value17: '16:00'})}
        if(this.state.appointments.includes('04:30 PM')){
            this.setState({available18: "Not Available", button18:'Not Available', value18: null})
        }
        else{this.setState({available18: "Available", button18:'Book Appointment', value18: '16:30'})}
    }

    render(){
        var providers = this.state.providers
        if (this.state.redirect == true){return(<Redirect to='/main/overview'/>)}
        else if(this.state.loading == true){return(<h1>loading...</h1>)}
        else if(this.state.doctor == null){return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Provider Name</th>
                        <th>Provider Type</th>
                        <th>------</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        providers.map(
                            row=>(
                                <tr>
                                    <td>{row.fullName}</td>
                                    <td>{row.providerInfo.providerType}</td>
                                    <button value={row._id} onClick={this.handleSubmit2}>Make Appointment?</button>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        )}
        else if(this.state.date == null || this.state.date == ''){return(
            <div style={{}}>
            <div className="FormField">
            <label className="FormField__Label" htmlFor="date">Date to check</label>
            <input type="Date" id="date" className="FormField__Input" placeholder="Enter Task" name="date" onChange={this.handleChange} />
          </div>
          </div>
        )}
        else {return(
            <div style={{}}>


                
                <div className="FormField">
            <label className="FormField__Label" htmlFor="date">Date to check</label>
            <input type="Date" id="date" className="FormField__Input" placeholder="Enter Task" name="date" onChange={this.handleChange} />
          </div>
          <h1>{this.state.doctor}</h1>
          <h1>{this.state.date}</h1>
                <table style={{width:'100vw'}}>
                    <thead>
                    <tr>
                        <th style={{border: '2px solid black',float:'left', width: '33%'}}>Time</th>
                        <th style={{border: '2px solid black',float:'left', width: '33%'}}>Available</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>8:00AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available1}</td>
                        <button value={this.state.value1} onClick={this.handleSubmit3}>{this.state.button1}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>8:30AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available2}</td>
                        <button value={this.state.value2} onClick={this.handleSubmit3}>{this.state.button2}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>9:00AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available3}</td>
                        <button value={this.state.value3} onClick={this.handleSubmit3}>{this.state.button3}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>9:30AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available4}</td>
                        <button value={this.state.value4} onClick={this.handleSubmit3}>{this.state.button4}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>10:00AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available5}</td>
                        <button value={this.state.value5} onClick={this.handleSubmit3}>{this.state.button5}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>10:30AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available6}</td>
                        <button value={this.state.value6} onClick={this.handleSubmit3}>{this.state.button6}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>11:00AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available7}</td>
                        <button value={this.state.value7} onClick={this.handleSubmit3}>{this.state.button7}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>11:30AM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available8}</td>
                        <button value={this.state.value8} onClick={this.handleSubmit3}>{this.state.button8}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>12:00pm</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available9}</td>
                        <button value={this.state.value9} onClick={this.handleSubmit3}>{this.state.button9}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>12:30pm</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available10}</td>
                        <button value={this.state.value10} onClick={this.handleSubmit3}>{this.state.button10}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>1:00pm</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available11}</td>
                        <button value={this.state.value11} onClick={this.handleSubmit3}>{this.state.button11}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>1:30PM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available12}</td>
                        <button value={this.state.value12} onClick={this.handleSubmit3}>{this.state.button12}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>2:00PM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available13}</td>
                        <button value={this.state.value13} onClick={this.handleSubmit3}>{this.state.button13}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>2:30PM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available14}</td>
                        <button value={this.state.value14} onClick={this.handleSubmit3}>{this.state.button14}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>3:00PM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available15}</td>
                        <button value={this.state.value15} onClick={this.handleSubmit3}>{this.state.button15}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>3:30PM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available16}</td>
                        <button value={this.state.value16} onClick={this.handleSubmit3}>{this.state.button16}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>4:00PM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available17}</td>
                        <button value={this.state.value17} onClick={this.handleSubmit3}>{this.state.button17}</button>
                    </tr>
                    <tr>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>4:30PM</td>
                        <td style={{border: '2px solid black',float:'left', width: '33%'}}>{this.state.available18}</td>
                        <button value={this.state.value18} onClick={this.handleSubmit3}>{this.state.button18}</button>
                    </tr>
                    </tbody>
                    
                    
                </table>






            </div>
        )}
    }


}

export default Schedule