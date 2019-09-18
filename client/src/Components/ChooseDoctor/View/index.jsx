import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class ChooseDoctor extends Component {
    constructor() {
        super();

        this.state = {
            search: null,
            searched: false,
            doctors: null,
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        
    }
    componentDidMount(){
        axios.get('/api/users/getUserInfo').then(
            (res)=>{
                if(res.data.sub != 'A1237') {
                    this.setState({redirect: true})
                }
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
        if(this.sanatize(this.state.search)){alert('No injections!')}
        else{
        console.log(this.state.search)
        this.findProviders(this.state.search)
        setTimeout(this.changePage, 3000)}
    }
    handleSubmit2(e) {
        (e).preventDefault()
        this.addDoctor(e.target.value)
        this.addPatient(e.target.value)
        this.setState({redirect: true})
    }

    findProviders = (search) => {
        if(this.sanatize(search)){alert('No injections allowed sorry')}
        else{
        axios.post('/api/providers/searchProviders',
        {search: search})
        .then(
            (res)=>{
                this.setState({doctors: res.data.data})
            }
            
        )}
    }

    changePage = () => {
        this.setState({searched: true})
        console.log(this.state.doctors)
    }
    addDoctor = (id) => {
        axios.post('/api/providers/addProvider',
        {
            id: id
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

    if(searched == true){
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
            <div>
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="text">Provider Type</label>
                <input type="type" id="type" className="FormField__Input" placeholder="Enter your type" name="search" value={this.state.search} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  
                    <button className="FormField__Button mr-20">Search Doctors</button>
              </div>
            </form>
          </div>
          </div>
        )};
    }
}

export default ChooseDoctor;
