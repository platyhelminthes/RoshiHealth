import React from 'react'
import {Box, Typography, Grid, Backdrop} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {isMobile} from 'react-device-detect'

const useStyles = makeStyles({
    color: {
      color: 'white'
    },
    height: {
        minHeight: '50vh'
    }
  });

function Render(){
    const classes = useStyles()
    return(
        <Grid  item lg={12} md={12} xs={12} sm={12}>
        <Grid container direction={ isMobile ? 'column' : 'row'} justify='space-between' className={classes.height}>
            
            <Box item p={6} bgcolor='primary' className={classes.color} id='cardColor' style={isMobile ? {maxWidth: '100%'} : {maxWidth: '60%'}}>
                    <Typography variant="h5" item lg={3} md={3} xs={3} sm={3}>
                        <Box  fontWeight='bold'>Great! So you have a health program given to you buy your doctor, nutritionist, personal trainer, or perhaps all of the above!  But what good is a health program if it's rarely or never used?  Your particular way has been developed over a lifetime.  
                        <br/><br/><br/>
                                There is a special kind of arrogance to believe that a simple program will force long-lasting change.  True change happens in the face of struggle, not through fleeting motivations.  You must develop discipline over yourself.  You must train! 
                        </Box>
                    </Typography>
            </Box>
            <Box item lg={6} md={6} xs={6} sm={6} bgcolor='primary' mb={isMobile ? 4 : null} mt={isMobile ? 4 : null} style={ isMobile ? {minWidth: '100%', height:'50vh', position: 'relative'} : {minWidth: '30%', position: 'relative'}}>
                    <div id='blurredBackground'>
                        
                    </div>
                    <Typography variant="h2" className={classes.color} style={{zIndex: '10', position: 'absolute', top:0}}>
                        <Box p={6} fontWeight='bold'>"You can only fight the way you practice."
                                Miyamoto Musashi</Box>
                    </Typography>
            </Box>
        </Grid>
    </Grid>
    )
}

export default Render