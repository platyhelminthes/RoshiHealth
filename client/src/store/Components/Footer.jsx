import React from 'react'
import { Grid, Typography, Box, Input, Paper } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';

export default function Render() {

    return (
    <Box minHeight='45vh' pt='3%' pl='15%' pr='15%' bgcolor='black'>
        <Grid spacing={5} container>
            <Grid style={{width:'100%'}} item>
                <Grid justify='space-between' container>
                    <Box item>
                        <Typography variant='h12'>
                            <Box color='#a8a8a8'>
                                COMPANY
                                <br /><br />
                                About
                                <br/>
                                Help
                                <br/>
                                Clinical Studies
                                <br/>
                                Roshi Pro Team
                                <br/>
                                Roshi Gym
                                <br/>
                                Roshi Cafe
                                <br/>
                                Roshi Yoga
                            </Box>
                        </Typography>
                    </Box>
                    <Box item>
                        <Typography variant='h12'>
                            <Box color='#a8a8a8'>
                                EVENTS
                                <br /><br/>
                                Upcoming Events
                                <br/>
                                Event Sponsorship
                                <br/>
                                Event Volunteering
                            </Box>
                        </Typography>
                    </Box>
                    <Box item>
                        <Typography variant='h12'>
                            <Box color='#a8a8a8'>
                                INQUIRIES
                                <br /><br />
                                Lonnie Paz
                                <br/>
                                Roshi Jobs
                                <br/>
                                Affiliate Program
                                <br/>
                                Wholesale
                                <br/>
                                Sponsorship
                            </Box>
                        </Typography>
                    </Box>
                    <Box item>
                        <Typography variant='h12'>
                            <Box color='#a8a8a8'>
                                ORDERS
                                <br /><br />
                                Track Order
                                <br/>
                                Returns And FAQs
                                <br/>
                                Money Back Guarantee
                                <br/>
                                Military Discount
                                <br/>
                                Roshi X Rewards Program
                            </Box>
                        </Typography>
                    </Box>
                    <Box item>
                        <Typography variant='h12'>
                            <Box color='#a8a8a8'>
                                ROSHI ACADEMY
                                <br /><br />
                                Training
                                <br/>
                                Health Goals
                                <br/>
                                Certification
                                <br/>
                                Archives
                            </Box>
                        </Typography>
                    </Box>
                    <Box item>
                        <Typography variant='h15'>
                            <Box color='#a8a8a8'>
                                CUSTOMER SERVICE
                                <br /><br />
                                1-949-394-8138
                                <br/>
                                Roshi, 84848 Random LN.
                                <br/>
                                Suite 666
                                <br/>
                                Roshi LA 84839 USA
                                <br/>
                                Email Roshi Himself
                                <br/>
                                Store Locator
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid style={{width: '100%'}} item>
                <Grid container>
                <Box item>
                    <Typography>
                        <Box fontWeight='bold' color='#a8a8a8'>
                            #GETROSHI
                        </Box>
                    </Typography>
                </Box>
                <Box ml='3%' color='#a8a8a8' display='flex' justifyContent='space-between' width='20%' item>
                    <FacebookIcon style={{fontSize: '38px'}}/>
                    <TwitterIcon style={{fontSize: '38px'}}/>
                    <InstagramIcon style={{fontSize: '38px'}}/>
                    <PinterestIcon style={{fontSize: '38px'}}/>
                    <YouTubeIcon style={{fontSize: '38px'}}/>
                </Box>
                <Box style={{width: '69%'}} item>
                    <Grid justify='space-around' container>
                        <Box alignItems='center' justifyItems='center' bgcolor='white' width='45%'>
                        <Box display='flex' height='100%'>
                            <Input variant='contained' style={{width: '90%', height: '100%'}} color='primary' placeholder='Email' />
                            <Box className='hoverEffect' onClick={()=>{alert('hello')}} alignContent='center' pl='11px' pt='3px' width='13%' height='100%' borderLeft='1px solid gray'>

                                <EmailIcon />
                            </Box>
                            </Box>
                        </Box>
                        <Box alignItems='center' justifyItems='center' bgcolor='white' width='45%'>
                        <Box display='flex' height='100%'>
                            <Input variant='contained' style={{width: '90%', height: '100%'}} color='primary' placeholder='Search ...' />
                            <Box className='hoverEffect' onClick={()=>{alert('hello')}} alignContent='center' pl='11px' pt='3px' width='13%' height='100%' borderLeft='1px solid gray'>

                                <SearchIcon />
                            </Box>
                            </Box>
                        </Box>
                    </Grid>
                    
                </Box>
                </Grid>
            </Grid>
            <Grid style={{width: '80%'}} item>
                <Grid justify='space-between' container>
                <Typography variant='h15'>
                            <Box color='#a8a8a8'>
                            Copyright 2020 Roshi, Inc.
                    </Box>
                </Typography>
                <Typography variant='h15'>
                            <Box color='#a8a8a8'>
                            Privacy Policy
                    </Box>
                </Typography>
                <Typography variant='h15'>
                            <Box color='#a8a8a8'>
                            Terms & Conditions
                    </Box>
                </Typography>
                <Typography variant='h15'>
                            <Box color='#a8a8a8'>
                            Secure Shopping with 100% Industry Standard SSL
                    </Box>
                </Typography>
                <Typography variant='h15'>
                            <Box color='#a8a8a8'>

                    </Box>
                </Typography>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>

        </Grid>
    </Box>
    )

}