import React, { Component } from 'react'
import Axios from 'axios'

class MakeDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e){
        (e).preventDefault()
        Axios.bind('/api/users/getUserEmail', 
            )
    }


    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%', background: 'white'}}>
            <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                    <label style={{color: 'black'}} className="FormField__Label" htmlFor="email">Search Doctor By Email</label>
                    <input required='required' type="email" id="email" className="FormField__Input" placeholder="Search Email..." name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <button className="FormField__Button mr-20">Search</button>
            </form>
            </div>
        )
    }
}

export default MakeDoctor