import React from 'react'
import {Component} from 'react'
import Axios from 'axios'
import Loading from '../../Loading'
import {Redirect} from 'react-router-dom'

class confirmAccount extends Component {

    constructor(props){
        super(props)
        this.state = {
            confirmNum: null,
            email: null,
            num: 'not done',
            loading: true,
            redirect: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.closeNav()
        var aa = window.location.href
        var after = aa.substring(39, 75)
        var email = aa.substring(76)
        this.setState({num: after, email: email})
    }


    handleClick(e){
        Axios.post('/api/users/confirmAccount',
        {
            email: this.state.email,
            confirmation: this.state.num
        }).then(this.setState({redirect: true}))
    }

    render(){
            if(this.state.redirect == true){
                return(<Redirect to='/main/home'/>)
            }
            return(
                <div>
                    <h2>{this.state.email}</h2>
                <button onClick={this.handleClick}>Confirm this is you?</button>
                </div>
            )
        
    }

}

export default confirmAccount