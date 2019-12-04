import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class ProviderCheck extends Component {
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.state.doctor == 'Patient'){
            return(<Redirect to='/main'/>)
        }
        return(<div></div>)
    }
}

export default ProviderCheck