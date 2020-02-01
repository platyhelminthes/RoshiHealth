import React from 'react'
import {Grid, Typography, Box} from '@material-ui/core'
import { isMobile } from 'react-device-detect'

export default function Render(){
    return(
        <Grid item>
            <Grid container>
                <Box style={isMobile ? {width: '100%'} : {width: '50%'}}>
                    <Typography variant='h4'>
                        <Box color='#707070' p={3}>
                    Roshi Health operates exclusively online.  This means that all consultations are conducted remotely via our telehealth platform.
                    <br/><br/>
                    We utilize partnerships with highly respectable accredited doctors who share our same vision of preventative before reactive healthcare.  
                    <br/><br/>
                    Lab tests and diagnostics are transferred to our HIPAA regulated and secure electronic health record for professional analysis.
                    </Box>

                    </Typography>
                </Box>
                <Box style={isMobile ? {width: '100%'} : {width: '50%'}}>
                    <Typography variant='h4'>
                        <Box color='#707070' p={3}>
                        Our network of doctors provide Roshi Health with a robust health program specifically tailored to each of our members needs and goals.
                        <br/><br/>
                        Each member is then assigned a health team to help move the health program forward with accountability, tracking, and task management. 
                        <br/><br/>
                        Frequent recalibration of the health program is conducted by the health team to assess current needs and goals of each member in relation to their health program. 

                        </Box>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}