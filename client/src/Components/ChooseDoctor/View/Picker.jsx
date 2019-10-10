import React from 'react'
import {Component} from 'react'


class Picker extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    render(){
        return(

            <div className="__team-panel-one">
                <select>
                    <option>Select a provider to add</option>
                    <option>Test 1</option>
                </select>
            </div>

        )
    }

}

export default Picker