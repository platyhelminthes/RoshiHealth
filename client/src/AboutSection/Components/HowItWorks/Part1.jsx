import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/styles' 
import {isMobile} from 'react-device-detect'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Render() {

    return (
        <Grid item style={{ width: "100%",flexGrow:'1'}}>
            <Box mt={7} mb={6}>
                
            <Grid container justify='space-around'>
                <Box item mt={7} style={isMobile ? { width: '100%'} :{ width: '25%', maxHeight: '85vh' }}>
                
                    
                        <Box mb={3} color='#F2C041'>
                        <ThemeProvider theme={theme}>
                        <Typography variant='h5'>
                            Roshi Providers Network:
                            </Typography>
                            </ThemeProvider>
                        </Box>
                    
                    <Typography variant='h6'>
                        <Box p={6} textAlign='center' color='white' id='blurTest' style={{borderRadius: '15px',  width: '100%', maxHeight: '100%' }}>
                            Each of our providers are carefully selected based on accreditation, accolades, accomplishments, experience and integrative philosophy.  If a provider is selected to move forward, Roshi Health will refer our members out to the most appropriate provider based on their needs and goals identified during their initial consultation with our staff nurse
                        </Box>
                    </Typography>
                </Box>
                <Box item mt={3} mb={6} style={isMobile ? { width: '100%'} :{ width: '25%', maxHeight: '85vh' }}>
                    <Typography variant='h5'>
                        <Box mb={3} color='#F2C041'>
                        Complete Roshi Health Program:
                        </Box>
                    </Typography>
                    <Typography variant='h6'>
                        <Box p={6} textAlign='center' color='white' id='blurTest' style={{borderRadius: '15px',  width: '100%', height: '100%' }}>
                        Bringing together our network of providers to work with the members’ health program subscription for a fully comprehensive and maintainable strategy. Providing our members with everything they will need, in-house, for a complete health program managed by a fully integrative health team. 
                    </Box>
                    </Typography>
                </Box>
                <Box item mt={7} style={isMobile ? { width: '100%'} :{ width: '25%', maxHeight: '85vh' }}>
                    <Typography variant='h5'>
                        <Box mb={3} color='#F2C041'>
                        Roshi Health Subscription:
                        </Box>
                    </Typography>
                    <Typography variant='h6'>
                        <Box p={6} textAlign='center' color='white' id='blurTest' style={{borderRadius: '15px',  width: '100%', height: '100%' }}>
                        A complete health program that uses accountability, tracking, and task management for each of our members unique needs and goals.  We build out each of our members health program using health history, diagnostic assessments, doctor’s health plan, and self reporting to form the robust strategy each member needs to eventually take full control of their health journey.  
                    </Box>
                    </Typography>
                </Box>
            </Grid>
            
            </Box>
        </Grid>
    )

}