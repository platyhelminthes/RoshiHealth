import React from 'react'
import {Component} from 'react'
import '../style/style.css'


class Sidebar extends Component{
    render(){
    return(
        <div className='sideBar'>
            <h1 className='sideBarHead'>Roshi Store</h1>
        <button className='sideButton'  value={'appointment'} onClick={this.props.handleSubmit1}>Appointments</button>
        <button className='sideButton'  value={'appointment'} onClick={this.props.handleSubmit1}>Appointments</button>
        <button className='sideButton'  value={'appointment'} onClick={this.props.handleSubmit1}>Appointments</button>
        <button className='sideButton'  value={'appointment'} onClick={this.props.handleSubmit1}>Appointments</button>
        <button className='sideButton'  value={'appointment'} onClick={this.props.handleSubmit1}>Appointments</button>


        </div>
    )}
}

export default Sidebar