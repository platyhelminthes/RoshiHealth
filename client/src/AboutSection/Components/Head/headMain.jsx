import React from 'react'
import TopNav from './Comps/topNavBar'
import Summary from './Comps/summary'
import BottomNav from './Comps/bottomNav'
import Image from '../../images/tori-1976609_1920@2x.png'
import { Grid } from '@material-ui/core'
import Sidenav from '../sidenav/mainRender'
import { isMobile } from 'react-device-detect'
function RenderHead(){

    return(
        
        <header className='aboutHeadMain'>
            <Grid container direction='column' justify='space-around' style={{height: '100%'}}>
            {isMobile ? <Sidenav/> : null}
                <TopNav />
                <Summary />
                {isMobile ? null : <BottomNav />}
            </Grid>
        </header>
        
    )

}

export default RenderHead