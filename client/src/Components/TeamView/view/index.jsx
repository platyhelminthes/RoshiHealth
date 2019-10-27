import React from 'react'
import {Component} from 'react'
import userImg from '../../Pictures/UserPicTemp.jpg'
import '../styling/team-view.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Axios from 'axios';
import Loading from '../../Loading'


class Teamview extends Component {

    constructor(props){
        super(props)
        this.state= {
            selector: 0,
            doctors: this.props.doctors,
            loading: false,
            path: null
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.pickView = this.pickView.bind(this)
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

    pickView(e) {
        (e).preventDefault()
        this.setState({path: e.target.value})
    }

render(){

    if(this.state.loading == true){return(<Loading/>)}
    else if (this.state.path == null){
        return(
            <div className='__teamview-Picker'>
                <div className='Left'>
                    <button value='doctors' onClick={this.pickView}>View Your Doctors</button>
                </div>
                <div className='Right'>
                    <button value='healthteam' onClick={this.pickView}>View Your Health Team</button>
                </div>
            </div>
        )
    }
    else if (this.state.path == 'healthteam'){
        var doctor = this.state.doctors[this.state.selector]
        var name = this.state.doctors[this.state.selector].fullName
        console.log(name)
    return(
        <div className='__team-View'>
            <div className='__button-Left'>
                <button style={{height: '100%', background: 'gray', border: '0', borderLeft: '1px solid black', background: '#31353D', width: '5vw'}} onClick={this.handleClick2}><ArrowBackIcon/></button>
            </div>
            <div className="__team-View-Left">
                <div className='__left-Top'>
                    <img src={require('../../Pictures/'+ name +'.jpg')}/>
                </div>
                <div className='__left-Bottom'>
                    <img src={userImg}/>
                </div>
            </div>
            <div className="__team-View-Right">
                <div className='__right-Top'>
                    
                </div>
                <div className='__right-Bottom'>
                    <h2>Name: {doctor.fullName}</h2>
                    <h2>Title: {doctor.providerInfo.providerType}</h2>
                    <h2>About: This is a bio for a doctor. This doctor is a good accredited doctor.
                    </h2>
                    
                </div>
            </div>
            <div className='__button-Right'>
            <button style={{height: '100%', border: '0', background: '#31353D', width: '5vw', float: 'right'}} onClick={this.handleClick}><ArrowForwardIcon/></button>
            </div>
        </div>
    )
    }
    else if (this.state.path == 'doctors'){
        var doctor = this.state.doctors[this.state.selector]
        var name = this.state.doctors[this.state.selector].fullName
        console.log(name)
    return(
        <div className='__team-View'>
            <div className='__button-Left'>
                <button style={{height: '100%', background: 'gray', border: '0', borderLeft: '1px solid black', background: '#31353D', width: '5vw'}} onClick={this.handleClick2}><ArrowBackIcon/></button>
            </div>
            <div className="__team-View-Left">
                <div className='__left-Top'>
                    <img src={require('../../Pictures/'+ name +'.jpg')}/>
                </div>
                <div className='__left-Bottom'>
                    <img src={userImg}/>
                </div>
            </div>
            <div className="__team-View-Right">
                <div className='__right-Top'>
                    
                </div>
                <div className='__right-Bottom'>
                    <h2>Name: {doctor.fullName}</h2>
                    <h2>Title: {doctor.providerInfo.providerType}</h2>
                    <h2>About: This is a bio for a doctor. This doctor is a good accredited doctor.
                    </h2>
                    
                </div>
            </div>
            <div className='__button-Right'>
            <button style={{height: '100%', border: '0', background: '#31353D', width: '5vw', float: 'right'}} onClick={this.handleClick}><ArrowForwardIcon/></button>
            </div>
        </div>
    )}
}


}

export default Teamview