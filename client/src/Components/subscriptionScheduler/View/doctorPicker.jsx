import React from 'react'
import {Component} from 'react'


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
        <div style={{width: '100%'}}>
        {providers.length == 1 ?
        (<button className='__select-Buttons-nurse' name={providers[0].providerInfo.providerType} value={providers[0]._id} onClick={this.props.handleSubmit2}>{providers[0].providerInfo.providerType} {providers[0].fullName}</button>)
        :
        (providers.map(
            row => (
                <button className='__select-Buttons' name={row.providerInfo.providerType} value={row._id} onClick={this.props.handleSubmit2}>{row.providerInfo.providerType}</button>
            )
        ))}
        {

        }    </div>)

    }

}

export default Doctors