import React from 'react'
import {Component} from 'react'
import {isMobile} from 'react-device-detect'

class Doctors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: null,
        }
    }

render(){
    var providers = this.props.providers
    return(
    <select style={isMobile ? {width: '70vw'} : null} onChange={this.props.handleSubmit2} defaultValue={this.state.selectValue}>
    <option>Please choose doctor</option>
        {
            providers.map(
                row => (
                    <option name={row.fullName} value={row._id}>{row.fullName} {row.providerInfo.providerType}</option>
                )
            )
        }
    </select>)
    }
}

export default Doctors