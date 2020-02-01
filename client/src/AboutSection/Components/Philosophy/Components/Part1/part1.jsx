import React from 'react'
import pic from '../../../../images/Elements.png'
import {Typography, Box, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'


import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/styles' 
import { isMobile } from 'react-device-detect';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
    color: {
        color: 'white'
    }
})

function Part1(){
    const style = useStyles()
    return(
        <Grid item lg={12} md={12} xs={12} sm={12} >
            <Grid container direction={ isMobile ? 'column' : 'row'} className='philoPart1'>
                <ThemeProvider theme={theme}>
                <Box p={5} item style={isMobile ? {width: '100%'} : {maxWidth: '50%'}}>
                <Typography variant="h5" fontWeight='bold'  className={style.color}>
                    <img style={{width: '100%', height: '50%'}} src={pic}/>
                    <Box fontWeight='bold'>In addition to becoming a Roshi for our members, our entire model is built around the powerful philosophy of self governance taught in "The Book of Five Rings" written by Miyamoto Musashi, one of the most influential samurai to have ever existed.
                    <br/> <br/>
                    In his writings, Musashi applies the way of the warrior to business and art, showcasing how the diverse applications of his strategies could stretch to any profession or endeavour.</Box>
                </Typography>
                </Box>
                <Box p={5} item style={isMobile ? {width: '100%'} : {maxWidth: '50%'}}>
                <Typography variant="h4" className={style.color}>
                    <Box fontWeight='bold'>A "Roshi" is the spiritual leader to a community of zen practitioners. Zen is a spiritual practice but more importantly, it is a philosophy that governs a way of life for millions of people across the world.
                    <br/> <br/>
                    Roshi Health has a unique philosophy that marries the best of a western medicine methodologies with an eastern discipline to teach a preventative healthcare approach personalized to fit each members lifestyle 
                    <br/> <br/>
                    Therefore, by teaching our members true, long-lasting health strategies custom tailored to their lifestyle, Roshi Health compliments our members health goals, not just supplement. Read more about our approach</Box>
                    <br/> <br/>
                    <Box fontWeight='bold' style={{width: '80%', float: 'right', color: '#7BA696'}}>"One thousand days of lessons for discipline; ten thousand days of lessons for mastery." <br/> Miyamoto Musashi </Box>
                </Typography>
                </Box>
                </ThemeProvider>
            </Grid>
        </Grid>
    )
}

export default Part1