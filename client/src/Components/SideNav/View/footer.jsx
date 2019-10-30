import React from 'react'
import {Component} from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom'
import anime from 'animejs'

class footer extends Component {

    constructor(props){
        super(props)
        
        this.state={
            settingsPopup: false,
            FacebookPopup: false,
            InstagramPopup: false,
            LinkedInPopup: false
        }

        this.handleHover = this.handleHover.bind(this)
        this.handleHover2 = this.handleHover2.bind(this)
        this.handleHoverFB = this.handleHoverFB.bind(this)
        this.handleHoverFB2 = this.handleHoverFB2.bind(this)
        this.handleHoverIN = this.handleHoverIN.bind(this)
        this.handleHoverIN2 = this.handleHoverIN2.bind(this)
        this.handleHoverLI = this.handleHoverLI.bind(this)
        this.handleHoverLI2 = this.handleHoverLI2.bind(this)
    }

    handleHover(e){
        this.setState({settingsPopup: true})
    }

    handleHover2(e){
        this.setState({settingsPopup: false})
    }

    handleHoverFB(e){
        this.setState({FacebookPopup: true})
    }

    handleHoverFB2(e){
        this.setState({FacebookPopup: false})
    }

    handleHoverIN(e){
        this.setState({InstagramPopup: true})
    }

    handleHoverIN2(e){
        this.setState({InstagramPopup: false})
    }

    handleHoverLI(e){
        this.setState({LinkedInPopup: true})
    }

    handleHoverLI2(e){
        this.setState({LinkedInPopup: false})
    }


render(){
    return(
        <div class='__main-footer'>
                        <div>
            <div className={`${this.state.FacebookPopup ? 'FacebookPopup' : 'FacebookPopupHidden'}`}>
                <p>Facebook</p>
            </div>
            <Link onMouseEnter={this.handleHoverFB} onMouseLeave={this.handleHoverFB2} id='settingsLink' to='/main/AccountInfo' style={{textDecoration: 'none'}}><FacebookIcon id="SetIcon"/></Link>
            </div>
            <div>
            <div className={`${this.state.InstagramPopup ? 'InstagramPopup' : 'InstagramPopupHidden'}`}>
                <p>Instagram</p>
            </div>
            <Link onMouseEnter={this.handleHoverIN} onMouseLeave={this.handleHoverIN2} id='settingsLink' to='/main/AccountInfo' style={{textDecoration: 'none'}}><InstagramIcon id="SetIcon"/></Link>
            </div>
            <div>
            <div className={`${this.state.LinkedInPopup ? 'LinkedInPopup' : 'LinkedInPopupHidden'}`}>
                <p>LinkedIn</p>
            </div>
            <Link onMouseEnter={this.handleHoverLI} onMouseLeave={this.handleHoverLI2} id='settingsLink' to='/main/AccountInfo' style={{textDecoration: 'none'}}><LinkedInIcon id="SetIcon"/></Link>
            </div>
            <div>
            <div className={`${this.state.settingsPopup ? 'settingsPopup' : 'settingsPopupHidden'}`}>
                <p>Settings</p>
            </div>
            <Link onMouseEnter={this.handleHover} onMouseLeave={this.handleHover2} id='settingsLink' to='/main/AccountInfo' style={{textDecoration: 'none'}}><SettingsIcon id="SetIcon"/></Link>
            </div>
        </div>
    )
}

}

export default footer