import React, { Component } from 'react'
import './about.css'
import Head from './Components/Head/headMain'
import { Route } from 'react-router-dom'
import Philosophy from './Components/Philosophy/philosophyMain'
import Redir from './Components/redirect'
import Sidenav from './Components/sidenav/mainRender'
import Footer from './Components/Footer/mainView'
import { isMobile } from 'react-device-detect'


class AboutMain extends Component{


    render(){
        return(
            <div className='aboutMain'>
                {isMobile ? <Sidenav/> : null}
                <Head></Head>
                <Route path='/about/philosophy' component={Philosophy}/>
                <Route exact path ='/about' component={Redir}/>
                <Footer/>
            </div>
        )
    }

}

export default AboutMain