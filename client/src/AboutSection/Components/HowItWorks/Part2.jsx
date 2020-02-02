import React from 'react'
import {Box, Typography, Grid} from '@material-ui/core'
import img1 from '../../images/Screenshot_1.png'
import { isMobile } from 'react-device-detect'

export default function Render(){
    return(
        <Box mt={6} item>
            <Grid container style={{width: '100%'}} direction='row'>
                <Box item style={isMobile ? {width: '100%'} : {width: '50%'}}>
                    <Typography variant='h4'>
                        <Box color='white'>
                        The initial Assessment
                        <br/><br/>
                        <span style={{color: '#707070'}}>Each initial assessment is conducted by an intake nurse.  This vital first step ensures that any relevant information regarding the member’s health history, current health status, and goals are assessed prior to referrals or assignment to a health team or provider.  All information is communicated over HIPAA secure channels and stored in a HIPAA compliant electronic health record. </span>  
                        </Box>
                    </Typography>
                    <div id={isMobile ? null : 'trail1'}>

                    </div>
                    <Typography variant='h4'>
                        <Box color='white'>
                        Health Provider/Team Assignment
                        <br/><br/>
                        <span style={{color: '#707070'}}>Depending on the members’ path chosen, they will either be assigned a health team or select a health provider to begin their health journey with Roshi Health.  The member will have full autonomy of choice within their Membership Portal for the selection of their provider and or health team.  </span>
                        </Box>
                    </Typography>
                    <div id={isMobile ? null :'trail2'}>

                    </div>
                    <div id={isMobile ? null :'peopleCarry'}>

                    </div>
                </Box> 
                <Box item style={isMobile ? {width: '100%'} : {width: '50%'}}>
                    <div id={isMobile ? null :'medkit'}>

                    </div> 
                    <Typography variant='h4'>
                        <Box textAlign='right' color='white'>Intake Follow-Up
                        <br/>
                        <span style={{color: '#707070'}}>Within 48 hours, our members will receive an invitation for follow-up to go over recommendations based on the initial intake.  </span>
                        </Box>
                    </Typography>
                    <div id={isMobile ? null :'trail3'}>

                    </div>
                    <Typography variant='h4'>
                        <Box mt={6} textAlign='right' color='white'>Periodic Follow-Up Assessments
                        <br/>
                        <span style={{color: '#707070'}}>Throughout the course of each members health journey, it is important to document the efficacy of each members program.  Depending on the path the member has chosen, they could be evaluated as frequently as weekly or as infrequently as once per year.  The follow-up assessments are great times for the member to report issues with their health program, request alterations, modifications to tasks, request diagnostics, or voice any other compliments or concerns.   </span>
                        </Box>
                    </Typography>
                </Box>
            </Grid>
        </Box>
    )
}