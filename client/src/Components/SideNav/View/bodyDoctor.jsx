import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import '../style/sideNav.css'
import HouseIcon from '@material-ui/icons/House';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


const dropDown = {
    background: '#31353D',
    width: '100%',
    height: '2vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '1.3vw',
    margin: '0',
    border: '0'
}

const dropDownBack = {
    marginTop: '3vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: '#31353D',
    boxShadow: 'none',
    minHeight: '0',
    margin: '0',
    padding: '0'
}

const dropDownHead = {
    fontFamily: "'Play', sans-serif",
    color: 'white',
    fontWeight: '600',
    fontSize: '15px',
    textDecoration: 'none',
    paddingLeft: '10px',
    verticalAlign: 'center',
    paddingTop: '5px',
    margin: '0'
}


const dropDownActive={
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    margin: '0'
}



class doctorBody extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
<div className='__body-main'>
                <div className='__SideLinks-Static-Box'>
                    <HouseIcon/>
                    <Link to='/main/overview'className='__SideLinks-Static'>Overview</Link>
                </div>
                <ExpansionPanel style={dropDownBack} >
                <ExpansionPanelSummary
                        expandIcon={<KeyboardArrowRightIcon style={{color: 'orange'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={dropDown}
                        className='__DD-header'
                    >
                        <HouseIcon style={{color: 'white'}}/>
                        <p style={dropDownHead}>View your info</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        
                            <Link to="/main/availability" className='__SideLinks'>Set Your Shedule</Link>
                            <Link to="/main/bio" className='__SideLinks'>Change your bio</Link>
                        
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel style={dropDownBack} >
                        <ExpansionPanelSummary
                            expandIcon={<KeyboardArrowRightIcon style={{color: 'orange'}}/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={dropDown}
                        >
                        <HouseIcon style={{color: 'white'}}/>
                        <p to="/main/overview" style={dropDownHead}>Your Patients</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        <Link to="/main/Patients" className='__SideLinks'>View Your Patients</Link>
                        <Link to="/main/appointments" className='__SideLinks'>View Your Appointments</Link>
                        <Link to="/main/Tasks" className='__SideLinks'>Send Tasks</Link>
                        
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default doctorBody