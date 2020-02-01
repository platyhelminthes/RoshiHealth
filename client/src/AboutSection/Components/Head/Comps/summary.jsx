import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/styles' 
import { isMobile } from 'react-device-detect';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function RenderSummary(){
return(
    <ThemeProvider theme={theme}>
        <Typography variant='h5'>
            <Typography variant='h4'><Box m={2} color='white'>THE LAST HEALTH PROGRAM YOU'LL EVER NEED</Box></Typography>
            <Box color='white' m={2}>We are a generation left behind - abandoned daughters and lost boys, unable to care four ourselves, utterly dependent on a broken system we never wanted</Box>
        </Typography>
    </ThemeProvider>
)
}

export default RenderSummary