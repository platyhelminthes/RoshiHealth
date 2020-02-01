import React from 'react'
import { Typography, Grid, Box} from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/styles' 

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Render(){

    return(
        <Grid item>
            <ThemeProvider theme={theme}>
                <Typography variant='h5'>
                    <Box textAlign='center' color='white'>
                        <Typography variant='h3'style={{color: '#F2C041'}}>Roshi Health knows the value of accountability.  Mastery over oneself is a lifelong pursuit and discipline must be developed.</Typography>
                        <br/> <br/>
                        Core to the Roshi Health philosophy is to teach our members how to develop mastery over themselves.   By using the elements found in “The Book of Five Rings” we form the template for our members to take control of their health journey.  
                    </Box>
                </Typography>
                </ThemeProvider>
        </Grid>
    )

}

export default Render