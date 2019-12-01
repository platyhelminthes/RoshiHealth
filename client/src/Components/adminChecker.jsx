import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'


class AdminChecker extends Component {
    constructor(props){
        super(props)
        }

        render(){
            if(this.props.subLevel == 'A1237'){
                return(
                    <div style={{background: 'white'}}></div>
                )
            }
            else{
                return(
                <Redirect to='/main/overview'/>
                )
            }
        }
}

export default AdminChecker