import React, {Component} from 'react'
import '../styles/resetPass.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'


class ResetPass extends Component {

    constructor(){
        super()

        this.state = {
            password: null,
            email: null,
            num: null,
            redirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount(){
        var aa = window.location.href
        var after = aa.substring(33, 69)
        var email = aa.substring(70)
        this.setState({num: after, email: email})
    }

    handleSubmit(e){
        (e).preventDefault()

        Axios.post('/api/users/resetPassword',
            {password: this.state.password,
            email: this.state.email.toLowerCase(),
            resetNum: this.state.num})
            this.setState({redirect: true})
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    render(){
        if(this.state.redirect == true){return(<Redirect to='/login'/>)}
        return(
            <div className='__forgotPass-main'>
                
                <form onSubmit={this.handleSubmit} className="__forgotPass-card">
                <div className='__forgotPass-top'>
                <div className="FormField" style={{width: '80%'}}>
                <h3 style={{color: 'white'}}>Please Enter your new password.</h3>
                <label className="FormField__Label" htmlFor="password">New password</label>
                <input required='required' type="password" id="password" className="FormField__Input" placeholder="Enter your new password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                </div>
                    <div className="__forgotPass-bottom">
                    <button className='FormField__Button'>Confirm</button>
                    <Link className='FormField__Link' to='/login'>Go Back</Link>
                    </div>
                </form>
            </div>
        )
    }


}

export default ResetPass