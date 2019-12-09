import React from 'react'
import { Component } from 'react'
import userImg from '../../Pictures/UserPicTemp.jpg'
import '../styling/team-view.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Axios from 'axios';
import Loading from '../../Loading'


class Teamview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selector: 0,
            doctors: this.props.doctors,
            loading: false,
            path: null,
            subSelect: 1
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.pickView = this.pickView.bind(this)
        this.pickSubLeft = this.pickSubLeft.bind(this)
        this.pickSubRight = this.pickSubRight.bind(this)
    }



    handleClick(e) {
        (e).preventDefault()
        if (this.state.selector == this.state.doctors.length - 1) { }
        else {
            this.setState({ selector: this.state.selector + 1 })
        }
    }

    handleClick2(e) {
        (e).preventDefault()
        if (this.state.selector == 0) { }
        else {
            this.setState({ selector: this.state.selector - 1 })
        }
    }

    pickView(e) {
        (e).preventDefault()
        this.setState({ path: e.target.value })
    }

    pickSubLeft(e) {
        (e).preventDefault()
        if(this.state.subSelect == 1) {}
        else{
        this.setState({ subSelect: this.state.subSelect - 1 })}
    }

    pickSubRight(e) {
        (e).preventDefault()
        if(this.state.subSelect == 3) {}
        else{
        this.setState({ subSelect: this.state.subSelect + 1 })}
    }

    render() {

        if (this.state.loading == true) { return (<Loading />) }
        else if (this.state.path == null) {
            return (
                <div className='__teamview-Picker'>
                    {
                        this.state.doctors.length == 0 ?
                        (   <div className='Left'>
                                <button>Please add a doctor</button>
                            </div>)
                        :
                        (   <div className='Left'>
                                <button value='doctors' onClick={this.pickView}>View Your Doctors</button>
                            </div>)
                    }
                    {
                        this.props.subLevel !== 'AD1279D1' ?
                            (
                                <div className='Right'>
                                    <button value='healthteam'>Please Purchase A Subsciption</button>
                                </div>
                            )
                            :
                            (
                                <div className='Right'>
                                    <button value='healthteam' onClick={this.pickView}>View Your Health Team</button>
                                </div>
                            )
                    }
                </div>
            )
        }
        else if (this.state.path == 'doctors') {
            var doctor = this.state.doctors[this.state.selector]
            var name = this.state.doctors[this.state.selector].fullName
            console.log(name)
            return (
                <div className='__team-View'>
                    <div className='__button-Left'>
                        <button style={{ height: '100%', background: 'gray', border: '0', borderLeft: '1px solid black', background: '#31353D', width: '5vw' }} onClick={this.handleClick2}><ArrowBackIcon /></button>
                    </div>
                    <div className="__team-View-Left">
                        <div className='__left-Top'>
                            <img style={{ backgroundImage: `url(https://www.usnews.com/dims4/USNEWS/f700b39/2147483647/crop/2000x1313%2B0%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F0d%2Fc3%2F396b0ea644d98747667d7b993ccd%2F170726-doctors-stock.jpg)` }} alt='image' />
                            {/* <img src={require('../../Pictures/'+ name +'.jpg')} alt='image'/> */}
                        </div>
                        <div className='__left-Bottom'>
                            <img src={userImg} />
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
                        <button style={{ height: '100%', border: '0', background: '#31353D', width: '5vw', float: 'right' }} onClick={this.handleClick}><ArrowForwardIcon /></button>
                    </div>
                </div>
            )
        }
        else if (this.state.path == 'healthteam') {
            console.log(name)
            return (
                <div style={{width: '100%', height: '100%'}}>
                    {this.state.subSelect == 1 ?
                        (
                            <div className='__team-View'>
                                <div className='__button-Left'>
                                    <button style={{ height: '100%', background: 'gray', border: '0', borderLeft: '1px solid black', background: '#31353D', width: '5vw' }} onClick={this.pickSubLeft}><ArrowBackIcon /></button>
                                </div>

                                <div className="__team-View-Left">
                                    <div className='__left-Top'>
                                        <img style={{ backgroundImage: `url(https://www.rd.com/wp-content/uploads/2016/11/02-Ways-to-Make-the-Most-of-Your-Doctors-Appointment_First-appointment_93813283_cyano66.jpg)` }} />
                                        {/* <img src={require('../../Pictures/'+ name +'.jpg')} alt='image'/> */}
                                    </div>
                                    <div className='__left-Bottom'>
                                        <img src={userImg} />
                                    </div>
                                </div>
                                <div className="__team-View-Right">
                                    <div className='__right-Top'>

                                    </div>
                                    <div className='__right-Bottom'>
                                        <h2>Name: Nurse Girl</h2>
                                        <h2>Title: Nurse</h2>
                                        <h2>About: This is a bio for a doctor. This doctor is a good accredited doctor.
                    </h2>

                                    </div>
                                </div>
                                <div className='__button-Right'>
                                    <button style={{ height: '100%', border: '0', background: '#31353D', width: '5vw', float: 'right' }} onClick={this.pickSubRight}><ArrowForwardIcon /></button>
                                </div>
                            </div>)
                        :
                        (null)
                    }
                    {this.state.subSelect == 2 ?
                        (
                            <div className='__team-View'>
                                <div className='__button-Left'>
                                    <button style={{ height: '100%', background: 'gray', border: '0', borderLeft: '1px solid black', background: '#31353D', width: '5vw' }} onClick={this.pickSubLeft}><ArrowBackIcon /></button>
                                </div>

                                <div className="__team-View-Left">
                                    <div className='__left-Top'>
                                        <img style={{ backgroundImage: `url(https://www.rd.com/wp-content/uploads/2016/11/02-Ways-to-Make-the-Most-of-Your-Doctors-Appointment_First-appointment_93813283_cyano66.jpg)` }} />
                                        {/* <img src={require('../../Pictures/'+ name +'.jpg')} alt='image'/> */}

                                    </div>
                                    <div className='__left-Bottom'>
                                        <img src={userImg} />
                                    </div>
                                </div>
                                <div className="__team-View-Right">
                                    <div className='__right-Top'>

                                    </div>
                                    <div className='__right-Bottom'>
                                        <h2>Name: Diet Guy</h2>
                                        <h2>Title: dietitian</h2>
                                        <h2>About: This is a bio for a doctor. This doctor is a good accredited doctor.
                    </h2>

                                    </div>
                                </div>
                                <div className='__button-Right'>
                                    <button style={{ height: '100%', border: '0', background: '#31353D', width: '5vw', float: 'right' }} onClick={this.pickSubRight}><ArrowForwardIcon /></button>
                                </div>
                            </div>)
                        :
                        (null)
                    }
                    {this.state.subSelect == 3 ?
                        (
                            <div className='__team-View'>
                                <div className='__button-Left'>
                                    <button style={{ height: '100%', background: 'gray', border: '0', borderLeft: '1px solid black', background: '#31353D', width: '5vw' }} onClick={this.pickSubLeft}><ArrowBackIcon /></button>
                                </div>

                                <div className="__team-View-Left">
                                    <div className='__left-Top'>
                                        <img style={{ backgroundImage: `url(https://www.rd.com/wp-content/uploads/2016/11/02-Ways-to-Make-the-Most-of-Your-Doctors-Appointment_First-appointment_93813283_cyano66.jpg)` }} />
                                        {/* <img src={require('../../Pictures/'+ name +'.jpg')} alt='image'/> */}

                                    </div>
                                    <div className='__left-Bottom'>
                                        <img src={userImg} />
                                    </div>
                                </div>
                                <div className="__team-View-Right">
                                    <div className='__right-Top'>

                                    </div>
                                    <div className='__right-Bottom'>
                                        <h2>Name: Health Guy</h2>
                                        <h2>Title: health counselor</h2>
                                        <h2>About: This is a bio for a doctor. This doctor is a good accredited doctor.
                    </h2>

                                    </div>
                                </div>
                                <div className='__button-Right'>
                                    <button style={{ height: '100%', border: '0', background: '#31353D', width: '5vw', float: 'right' }} onClick={this.pickSubRight}><ArrowForwardIcon /></button>
                                </div>
                            </div>)
                        :
                        (null)
                    }
                </div>
            )
        }
    }


}

export default Teamview