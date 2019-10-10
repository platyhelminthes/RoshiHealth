import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import '../styling/team.css'
import Picker from './Picker'


class ChooseDoctor extends Component {
    constructor() {
        super();

        this.state = {
            search: null,
            searched: false,
            doctors: null,
            redirect: false,
            allowed: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        
    }
    componentDidMount(){
        axios.get('/api/users/getUser').then(
            (res)=>{
                this.setState({allowed: res.data.data.doctorsToAdd})
            }
        )
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        (e).preventDefault()
        
        this.setState({search: e.target.value})
        console.log(this.state.search)
        this.findProviders(e.target.value)
        setTimeout(this.changePage, 700)
    }
    handleSubmit2(e) {
        (e).preventDefault()
        this.addDoctor(e.target.value, this.state.search)
        this.addPatient(e.target.value)
        this.setState({redirect: true})
    }

    findProviders = (search) => {
        
        
        axios.post('/api/providers/searchProviders',
        {search: search})
        .then(
            (res)=>{
                this.setState({doctors: res.data.data})
            }
            
        )
    }

    changePage = () => {
        this.setState({searched: true})
        console.log(this.state.doctors)
    }
    addDoctor = (id, type) => {
        axios.post('/api/providers/addProvider',
        {
            id: id,
            type: type
        })
    }
    addPatient = (id) => {
        axios.post('/api/providers/addPatient',
        {
            id: id
        })
    }

    
    sanatize = (string) => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(format.test(string)){
            return true
        }
        else{
            return false
        }
        
    }

    render() {
      var redirect = this.state.redirect
      var searched = this.state.searched
      var doctors = this.state.doctors
      var allowed = this.state.allowed
    if(this.state.redirect == true){return(<Redirect to='/main'/>)}
    if(allowed.length == 0){return(<h1>You currently dont have any providers to add to your team. Please contact your nurse if you would like to make a change</h1>)}
    else if(searched == true){
          return(
              <div>
              {
                doctors.map(row => (
                    <div key={row._id}>
                        <h1>Name: {row.fullName}</h1>
                        <h1>Type: {row.providerInfo.providerType}</h1>
                        <button onClick={this.handleSubmit2} value={row._id}>Choose this doctor?</button>
                    </div>
                    )
                )
              }
              </div>
          )
      }
      else if(redirect == true) {return(<Redirect to="/main/overview"/>)}
      else{
        return (
            <div className="__team-container">
                <Picker/>
                {/* {
                allowed.map(row => (

                        <button value={row} onClick={this.handleSubmit}>{row}</button>

                    )
                )
              } */}
          </div>
        )};
    }
}

export default ChooseDoctor;
