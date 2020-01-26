import React, { Component } from 'react'
import './about.css'
import Head from './Components/Head/headMain'
import { Route } from 'react-router-dom'
import Philosophy from './Components/Philosophy/philosophyMain'

class AboutMain extends Component{


    render(){
        return(
            <div className='aboutMain'>
                <Head/>
                <Route path='/about/philosophy' component={Philosophy}/>
            </div>
        )
    }

}

export default AboutMain