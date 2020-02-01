import React, { Component } from 'react'
import './about.css'
import Head from './Components/Head/headMain'
import { Route } from 'react-router-dom'
import Philosophy from './Components/Philosophy/philosophyMain'
import Redir from './Components/redirect'
import Sidenav from './Components/sidenav/mainRender'
import Footer from './Components/Footer/mainView'
import { isMobile } from 'react-device-detect'
import OurProgram from './Components/aboutSection/mainRender'
import HowItWorks from './Components/HowItWorks/mainRender'
import Features from './Components/Features/mainRender'
import GetStarted from './Components/getStarted/getStarted'

class AboutMain extends Component{


    render(){
        return(
            <div className='aboutMain'>
                {isMobile ? <Sidenav/> : null}
                <Head></Head>
                <Route path='/about/philosophy' component={Philosophy}/>
                <Route exact path ='/about' component={Redir}/>
                <Route path='/about/OurProgram' component={OurProgram}/>
                <Route path='/about/HowItWorks' component={HowItWorks}/>
                <Route path='/about/features' component={Features}/>
                <Route path='/about/getStarted' component={GetStarted}/>
                <Footer/>
            </div>
        )
    }

}

export default AboutMain