import React from 'react'
import {Box, Typography, Grid, Backdrop} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import { blue } from '@material-ui/core/colors';
import {isMobile} from 'react-device-detect'

const useStyles = makeStyles({
    color: {
      color: 'white'
    },
    height: {
        minHeight: '50vh'
    }
  });

function Part2(){
    const classes = useStyles()
    return(
        <Grid  item lg={12} md={12} xs={12} sm={12}>
            <Grid container direction={ isMobile ? 'column' : 'row'} justify='space-between' className={classes.height}>
                <Box item mb={isMobile ? 4 : null} lg={6} md={6} xs={6} sm={6} bgcolor='primary' style={ isMobile ? {minWidth: '100%', height:'50vh', position: 'relative'} : {minWidth: '30%', position: 'relative'}}>
                        <div id='blurredBackground'>
                            
                        </div>
                        <Typography variant="h4" className={classes.color} style={{zIndex: '10', position: 'absolute', top:0}}>
                            <Box p={6} fontWeight='bold'>"You must understand that there is more than one path to the top of the mountain."
                                    Miyamoto Musashi</Box>
                        </Typography>
                </Box>
                <Box item p={6} bgcolor='primary' className={classes.color} id='cardColor' style={isMobile ? {maxWidth: '100%'} : {maxWidth: '60%'}}>
                        <Typography variant="h5" item lg={3} md={3} xs={3} sm={3}>
                            <Box  fontWeight='bold'>Roshi Health fundamentally disagrees with a one size fits all approach to healthcare.  Generally, we all require similar things and know what comprises good health.  Slight differences in our genetics, food intolerances, mental states, etc, can result in massively divergent health outcomes.  
                                    <br/><br/><br/>
                                    Staying away from processed foods, getting regular exercise, and controlling your calories is NOT a preventative healthcare model.  Developing strategies focused on the nuances found from one person to another is the ‘path to the top of the mountain’.
                            </Box>
                        </Typography>
                </Box>
            </Grid>
        </Grid>
    )

}

export default Part2