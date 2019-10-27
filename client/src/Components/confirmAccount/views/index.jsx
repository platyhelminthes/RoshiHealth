import React from 'react'
import {Component} from 'react'
import Axios from 'axios'
import Loading from '../../Loading'

class confirmAccount extends Component {

    constructor(props){
        super(props)
        this.state = {
            confirmNum: null,
            email: null,
            num: 'not done',
            loading: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        var aa = window.location.href
        var after = aa.substring(37, 73)
        var email = aa.substring(74)
        this.setState({num: after, email: email})
    }


    handleClick(e){
        Axios.post('/api/users/confirmAccount',
        {
            email: this.state.email,
            confirmation: this.state.num
        })
    }

    render(){
        
            return(
                <div>
                    <h2>{this.state.email}</h2>
                <button onClick={this.handleClick}>Confirm this is you?</button>
                </div>
            )
        
    }

}

export default confirmAccount