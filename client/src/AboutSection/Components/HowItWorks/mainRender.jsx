import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import Part1 from './Part1'
import Part2 from './Part2'

export default function Render(){
    return(
        <Grid container spacing={'500px'} direction='column'>
            <Box item  width='100%'>
                <Typography variant='h4'>
                    <Box color='White' textAlign='center'>
                    The Members Path
                    <br/> <br/>
                    <span style={{color: '#707070'}}>A member can select a few different paths with Roshi Health:</span>
                    </Box>
                </Typography>
            </Box>
            <Part1/>
            <Box width='100%' item >
                <Typography variant='h5'>
                    <Box textAlign='center' color='#707070'>
                    Roshi Health programs are a continual series of assessments and reassessments through the use of telehealth appointments, tasks, and diagnostic tools.  We understand that each of our members health journeys are different and come with their own unique sets of challenges.  However, there are some areas in which we maintain consistency in our programming.  
                    </Box>
                </Typography>
            </Box>
            <Part2/>
        </Grid>
    )
}