import React, {Component} from 'react'
import '../styles/forgotPass.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'


class ForgotPass extends Component {

    constructor(){
        super()

        this.state = {
            email: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSubmit(e){
        (e).preventDefault()

        Axios.post('/api/users/forgotPassword',
            {email: this.state.email})
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
        return(
            <div className='__forgotPass-main'>
                
                <form onSubmit={this.handleSubmit} className="__forgotPass-card">
                <div className='__forgotPass-top'>
                <div className="FormField" style={{width: '80%'}}>
                <h3 style={{color: 'white'}}>Please Enter your email address. Then check your email for a reset Link.</h3>
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input required='required' type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
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

export default ForgotPass