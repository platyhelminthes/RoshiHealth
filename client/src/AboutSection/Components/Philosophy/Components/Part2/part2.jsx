import React from 'react'
import {Box, Typography, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
    color: {
      color: 'white'
    },
    height: {
        minHeight: '30vh'
    }
  });

function Part2(){
    const classes = useStyles()
    return(
        <Grid  item lg={12} md={12} xs={12} sm={12}>
            <Grid container m={5} lg={12} md={12} xs={12} sm={12} className={classes.height} id='philoPart2'>
                <Box item className={classes.color} style={isMobile ? {width: '100%'} : {maxWidth: '50%'}}>
                    <Typography variant="h4">
                        <Box p={isMobile ? 3 : 8} >
                        The Book of Five Rings outlines 5 main elements that comprise Roshi Healths philosophy. Those elements are: 
                        </Box>
                    </Typography>
                </Box>
                <Box item className={classes.color} style={isMobile ? {width: '100%'} : {maxWidth: '50%'}}>
                        <Typography variant="h5">
                            <Box p={isMobile ? 3 : 8} >
                            <span style={{color: '#7BA696'}}>Earth:</span>   Knowing your nature and your place in the universe
                            <br/>
                            { isMobile ? (<br></br>) : (<br></br>)}
                            <span style={{color: '#40677F'}}>Water:</span>  Being adaptable
                            <br/> { isMobile ? (<br></br>) : (<br></br>)}
                            <span style={{color: '#5E271E'}}>Fire:</span>      Train daily, stay uncomfortable 
                            <br/> { isMobile ? (<br></br>) : (<br></br>)}
                            <span style={{color: '#CDC9C9'}}>Wind:</span>   Traditional, community
                            <br/> { isMobile ? (<br></br>) : (<br></br>)}
                            <span style={{color: '#F2C041'}}>Void:</span>    No beginning, no end-  Practice for the sake of practice
                            <br/> { isMobile ? (<br></br>) : (<br></br>)}
                            </Box>
                        </Typography>
                </Box>
            </Grid>
        </Grid>
    )

}

export default Part2