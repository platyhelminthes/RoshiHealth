import React from 'react'
import {Link} from 'react-router-dom'
import image from '../../../images/HP-Logomark.png'
import { isMobile } from 'react-device-detect'
import { Grid, Box } from '@material-ui/core'
function TopNav(){
    return(
        <div className={isMobile ? null : 'topNavMain'}>
            {
                isMobile ? 
                (null)
                :
                <img src={image}  style={{
                    width: "3vw",
                    paddingTop: "16px"
            }}/>}
            <Grid container justify='space-around' >
                <Box item><Link to='/store'><h2>Store</h2></Link></Box>
                <Box item><Link to='/home'><h2>Blog</h2></Link></Box>
            </Grid>
        </div>
    )
}

export default TopNav