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

function RenderTest(props){
    if(props.true == true){
        return(
            <div className='__SideLinks-Static-Box' style={{paddingLeft: '1.3vw', paddingRight: '5vw'}}>
                    <HouseIcon/>
                    <Link to={{
  pathname: '/video',
  state: {
    clicked: true
  }}} className='__SideLinks-Static' style={{width: '20vw', paddingLeft: '.7vw'}} >Go to Appointment</Link>
            </div>
        )
    }
    else{ return(null)}
}


class body extends Component {

    constructor(props){
        super(props)

        this.state = {
            true: false
        }
    }

componentDidMount(){
    setTimeout(this.checkAP, 3000)
}

checkAP = () => {
    console.log(this.props.APtime)
    if(this.props.APtime == true){
        this.setState({true: true})
    }
}

 renderStuff = {}


    render(){
        return(
            <div className='__body-main'>
                <div className='__SideLinks-Static-Box'>
                    <HouseIcon/>
                    <Link to='/main/overview'className='__SideLinks-Static'>Overview</Link>
                </div>
                <div className='__SideLinks-Static-Box'>
                    <HouseIcon/>
                    <Link to='/main/tasks'className='__SideLinks-Static'>Tasks</Link>
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
                        <p style={dropDownHead}>Store</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        
                            <Link to="/main/cart" className='__SideLinks'>Cart</Link>
                            <Link to="/main/store" className='__SideLinks'>Store</Link>
                        
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
                        <p to="/main/overview" style={dropDownHead}>Team</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        <Link to="/main/addProviders" className='__SideLinks'>View Team</Link>
                        <Link className='__SideLinks'>Something Else</Link>
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
                        <p to="/main/overview" style={dropDownHead}>Appointments</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={dropDownActive}>
                        <Link  to="/main/scheduler"  className='__SideLinks'>Make An Appointment</Link>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <RenderTest true={this.state.true}/>
            </div>
        )
    }

}

export default body