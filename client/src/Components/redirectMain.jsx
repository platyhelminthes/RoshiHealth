import React from 'react'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Redir extends Component {
    render(){
        return(
            <Redirect to='/main/overview'/>
        )
    }
}

export default Redir