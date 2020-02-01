import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'


function midQuote(){

    return(
        <Grid item>
            <Grid container justify='space-between'>
                <Box item style={{minWidth: 70}}></Box>
                <Typography variant="h3"  item >
                    <Box style={{color: '#F2C041'}}>"The Way is in training."<br/> Miyamoto Musashi</Box> 
                </Typography>
           </Grid>
        </Grid>
    )      

}

export default midQuote