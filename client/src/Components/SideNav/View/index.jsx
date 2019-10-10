import React from 'react'
import {Component} from 'react'
import '../style/sideNav.css'
import Header from './header'
import Body from './body'
import Axios from 'axios'

class Sidenav extends Component {
    constructor(props){
        super(props)
        this.state={
            name: null,
            email: null
        }
    }

    componentDidMount(){
        Axios.get('/api/users/getUser').then(
            (res)=>{
                console.log(res.data)
                this.setState({
                    name: res.data.data.fullName,
                    email: res.data.data.email
                })
            }
        )
    }

    render(){
        return(
            <div id='__side-Nav'>
                <Header name={this.state.name} email={this.state.email}/>
                <Body/>
            </div>
        )
    }
}

export default Sidenav