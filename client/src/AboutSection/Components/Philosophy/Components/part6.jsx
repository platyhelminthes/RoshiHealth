import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

export default function () {
    return (
        <Grid item >
            <Box style={{mindWidth: '100%', minHeight: '70vh', position: 'relative'}}>
            <div id='part6Blur'></div>
            <Grid container justify='space-around' style={{position: 'absolute', top:0}}>
                <Typography>
                <Box item color='white' m={isMobile ? 3 : 12} style={{maxWidth: '250px'}}><span style={{color: '#5E271E'}}>Fire:</span> <br/>
                Train daily, stay uncomfortable
                Weakness is bred into complacency.  Never lose your edge.  Embrace life and all of its uncertainties.  Run from them and label yourself a coward.  Step bravely into the fire and mock the pain a smile.
                </Box>
                </Typography>
                <Typography>
                <Box item color='white' m={isMobile ? 3 : 12} style={{maxWidth: '250px'}}><span style={{color: '#40677F'}}>Water:</span> <br/>
                Being adaptable
                Become rigid and crack under the pressure.  Too malleable and you’ll stand for nothing.  Flow like water and be strong when hit but resilient enough to change form with the shape that life takes.
                </Box>
                </Typography>
                <Typography>
                <Box item color='white' m={isMobile ? 3 : 12} style={{maxWidth: '250px'}}><span style={{color: '#7BA696'}}>Earth:</span> <br/>
                Knowing your nature and your place in the universe
                Until you truly know yourself you cannot conceive of your shortcomings nor your strengths.  You must come down to earth, stay grounded, and know your value before you aim for heights beyond yourself.
                </Box>
                </Typography>
                <Typography>
                <Box item color='white' m={isMobile ? 3 : 12} style={{maxWidth: '250px'}}><span>Wind:</span> <br/>
                Traditional, community
                Do not discard that which has worked just to spite your ancestors.  Our knowledge is gathered and passed down through generations.  We have an opportunity to contribute to it but only by merging the past with the present can we build a healthier future.
                </Box>
                </Typography>
                <Typography>
                <Box item color='white' m={isMobile ? 3 : 12} style={{maxWidth: '250px'}}>
                <span style={{color: '#F2C041'}}>Void:</span> <br/>
                    No beginning, no end-  Practice for the sake of practice
                    Health is not a goal, it's a process.  Do not get swept up by premature results.  Your practice ends when your life does.  Set constant goals while aiming for mastery over your own weaknesses.  That is the real pursuit.
                </Box>
                </Typography>
            </Grid>
            </Box>
        </Grid>
    )
}