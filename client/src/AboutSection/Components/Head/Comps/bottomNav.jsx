import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';

function RenderBottomNav(){
    return(
        <Grid container className='bottomNavMain'>
            <Box item><Link className='bottomNavLinks' to='/about/Philosophy'>Philosophy</Link></Box>
            <Box item><Link className='bottomNavLinks' to='/about/OurProgram'>Our Program</Link></Box>
            <Box item><Link className='bottomNavLinks' to='/about/HowItWorks'>How It Works</Link></Box>
            <Box item><Link className='bottomNavLinks' to='/about/Features'>Features</Link></Box>
            <Box item><Link className='bottomNavLinks' to='/about/GetStarted'>Get Started</Link></Box>
        </Grid>
    )
}

export default RenderBottomNav