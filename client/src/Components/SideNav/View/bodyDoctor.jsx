import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import '../style/sideNav.css'
import HouseIcon from '@material-ui/icons/House';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {isMobile} from 'react-device-detect'


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
<div className={isMobile ? '__body-main-mobile':'__body-main'}>
                <div className={isMobile ? '__SideLinks-Static-Box-Mobile' : '__SideLinks-Static-Box'}>
                    <HouseIcon style={{color: 'white'}}/>
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
                        <p style={dropDownHead}>Set Your Schedule</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        
                            <Link to="/main/provider/availability" className='__SideLinks'>Reoccurring Schedule</Link>
                            <Link to="/main/provider/dailySchedule" className='__SideLinks'>Set A Specific Date</Link>
                            {/* <Link to="/main/provider/holidaySchedule" className='__SideLinks'>Set Your Holidays</Link> */}
                        
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
                        <p style={dropDownHead}>Your Patients</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        <Link to="/main/provider/Patients" className='__SideLinks'>View Your Patients</Link>
                        <Link to="/main/provider/appointments" className='__SideLinks'>View Your Appointments</Link>
                        <Link to="/main/provider/sendtasks" className='__SideLinks'>Send Tasks</Link>
                        <Link to="/main/provider/sendSubTasks" className='__SideLinks'>Send a Subscription Task</Link>
                        
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
                        <p to="/main/overview" style={dropDownHead}>Help</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        <Link to="/main/support/FAQ" className='__SideLinks'>FAQ</Link>
                        <Link to="/main/support/tutorial" className='__SideLinks'>Basic Tutorial</Link>
                        <Link to="/main/support/askSupport" className='__SideLinks'>Ask Support</Link>
                        
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default doctorBody