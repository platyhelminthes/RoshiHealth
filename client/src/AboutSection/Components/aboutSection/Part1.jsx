import React from 'react'
import {Grid, Typography, Box} from '@material-ui/core'
import { isMobile } from 'react-device-detect'

export default function Render(){
    return(
        <Grid item>
            <Grid container>
                <Grid item style={isMobile ? {width: '100%'} : {maxWidth: '50%'}}>
                    <Typography variant='h4'>
                        <Box color='#707070'>
                                We can all agree that doing something is better than doing nothing but when nutritionists are battling chiropractors and naturopaths are fighting dietitians in the struggle for client acquisition, the deeper question should be:  
                                <br/><br/>
                                Why are people fleeing in droves from the reactive healthcare model which prevails in westernized medicine? 
                                <br/><br/>
                                We’ve all known a problem existed for a while but the solution has continued to evade those who automatically practice ‘in-the-box’ thinking.  
                        </Box>
                    </Typography>
                </Grid>
                <Grid item style={isMobile ? {width: '100%'} : {maxWidth: '50%'}}>
                    <Box item lg={6} md={6} xs={6} sm={6} mt={isMobile ? 4 : 0} bgcolor='primary' style={ isMobile ? {minWidth: '100%', height:'50vh', position: 'relative'} : {minWidth: '30%', position: 'relative'}}>
                        <div id='OurProgramBlur'>

                        </div>
                        <Typography variant={isMobile ? 'h4' : "h3"} style={{zIndex: '10', position: 'absolute', top:0}}>
                            <Box pl='30%' pr='30%' pt={5} fontWeight='bold' color='#7BA696'>"If you know the Way broadly, you will see it in everything." Miyamoto Musashi</Box>
                        </Typography>
                    </Box>
                    <Typography variant='h4'>
                        <Box mt={5} color='#707070'>
                        One side of the argument believes we should return to cultivating herbs and personal accountability while the other side believes pharmaceuticals and technology will inevitably cure everything.  
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}