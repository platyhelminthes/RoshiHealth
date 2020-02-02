import React, { useEffect } from 'react'
import {Grid, Typography, Box} from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/styles' 
import { isMobile } from 'react-device-detect';
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);



export default function Render(){

    return(
        <Grid container spacing={10}>
            <ThemeProvider theme={theme}>
                <Box item>
                <Typography  variant='h4'>
                    <Box textAlign='center' mt={5} color='white'>Currently, the preventative healthcare system is fractured.  There is no shortage of preventative models, methodologies, philosophies, or guru’s.  </Box>
                </Typography>
                </Box>
            <Part1/>
            <Box style={{width: '100%'}} item>
                <Typography  variant='h4'>
                    <Box textAlign='center' p={10} mt={5} color='white'>Why shouldn't  healthcare be a mixture of both?  Roshi Health chooses the middle way.  </Box>
                </Typography>
            </Box>
            <Part2/>
            <Box style={{width: '100%'}} item>
                <Typography  variant='h4'>
                    <Box textAlign='center' p={10} mt={5} color='#F2C041'>Our Program is Simple</Box>
                </Typography>
            </Box>
            <Part3/>
            </ThemeProvider>
        </Grid>
    )

}


