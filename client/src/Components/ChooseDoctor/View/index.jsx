import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import userImg from '../../Pictures/UserPicTemp.jpg'
import '../styling/team.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom'


class ChooseDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searched: false,
            doctors: null,
            redirect: false,
            allowed: [],
            selected: null,
            selector: 0
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        
    }

    componentDidMount(){
        console.log(this.props.location.state.search)
        this.findProviders(this.props.location.state.search)
    }

    handleClick(e) {
        (e).preventDefault()
        if(this.state.selector == this.state.doctors.length -1){}
        else{
        this.setState({selector: this.state.selector+1})
        }
    }

    handleClick2(e) {
        (e).preventDefault()
        if(this.state.selector == 0){}
        else{
        this.setState({selector: this.state.selector-1})}
    }

    handleSubmit2(e) {
        this.setState({redirect: true})
        this.addDoctor(e.target.value, this.props.location.state.search)
        this.addPatient(e.target.value)
        this.props.resetTruth()
    }

    findProviders = (search) => {
        console.log(search + 'whathadhawwadiu')
        axios.post('/api/providers/searchProviders',
        {search: search})
        .then(
            (res)=>{
                console.log(res)
                this.setState({doctors: res.data.data, searched: true})
            }
        )
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

    render() {
      var redirect = this.state.redirect
      var searched = this.state.searched
      var doctors = this.state.doctors
      var allowed = this.state.allowed
    if(this.props.redirect == true){return(<Redirect to='/main'/>)}
    if(doctors == null){return(<h1>test</h1>)}
    else if(searched == true){
        return (
            <div className="__team-container">
                <div className='__add-Doctor-Main'>
                    <div className='__add-Doctor-Left'>
                    <button style={{height: '5vh', background: 'gray', borderRadius: '13px', border: '0', width: '5vw'}} onClick={this.handleClick2}><ArrowBackIcon/></button>
                        <img className='__add-Doctor-Img' src={userImg} />
                        <div className='__add-Doctor-Fluff'></div>
                    </div>
                    <div className='__add-Doctor-Right'>
                        <div className='__add-Doctor-Bio-Right'>
                            <h2>Name: {this.state.doctors[this.state.selector].fullName}</h2>
                            <h2>Profession: {this.state.doctors[this.state.selector].providerInfo.providerType}</h2>
                            <h2>About: TEST TEST TEST TEST</h2>
                            <button onClick={this.handleSubmit2} value={this.state.doctors[this.state.selector]._id}>choose this doctor</button>
                        </div>
                        <button style={{height: '5vh', marginTop: '40vh', marginLeft: '3vw', background: 'gray', borderRadius: '13px', border: '0', width: '5vw'}} onClick={this.handleClick}><ArrowForwardIcon/></button>
                    </div>
                </div>
          </div>
        )
      }
      else if(redirect == true) {return(<Redirect to="/main/overview"/>)}
    }
}

export default ChooseDoctor;
