import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Info from './Info'
function mainRender(props) {
    return (
        <Grid container>
            <Box item> 
                <Typography variant='h5'>
                    <Box color='white'>
                    “Well this all sounds great but what do I get?”
                    <br/><br/>
                    Being such an out of the box concept, Roshi Health understands that our model can appear a bit obscure to people... so we’ve outlined some features that you will enjoy as a member... 
                    </Box>
                </Typography>
            </Box>
            <Info/>
        </Grid>
    );
}

export default mainRender;