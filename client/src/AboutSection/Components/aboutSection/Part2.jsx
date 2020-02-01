import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

export default function Render() {
    return (
        <Grid item>
            <Grid container direction='row'>
                <Typography style={isMobile ? {width: '100%'} : {maxWidth: '50%'}} item  variant='h4'>
                    <Box p={2} color='#707070' >
                        We exist to empower our members for a lifetime.
                            <br /><br />
                        We do not want lifelong members. We would rather have lifelong success stories.
                        
                    </Box>
                </Typography>
                <Typography style={isMobile ? {width: '100%'} : {maxWidth: '50%'}} item  variant='h4'>
                    <Box p={2} color='#707070'>We believe in the proper integration of tried and true traditions with advancements in technology.  </Box>
                </Typography>
            </Grid>
        </Grid>
    )
}