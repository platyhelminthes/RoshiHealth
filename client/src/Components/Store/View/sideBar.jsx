import React from 'react'
import {Component} from 'react'


class Sidebar extends Component{
    render(){
    return(
        <div>
            <h1>appointments</h1>
        <button value={'appointment'} onClick={this.props.handleSubmit1}>Test</button>


        </div>
    )}
}

export default Sidebar