import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

function Info(props) {
    return (
        <Grid item>
            <Grid container direction={isMobile ? 'column' : 'row'} mt={6} justify='space-around'>
                <Box width={isMobile ? null : '35%'} p={4} mb={isMobile ? 4 : null} mt={isMobile ? 4 : null} m={isMobile ? 0 : 12} border='1px solid #707070' borderRadius='10px' bgcolor='#36393F' item>
                    <Typography variant='h5'>
                        <Box color='#707070'>
                            <span style={{ color: 'white' }}>Membership Features:</span>
                            <br /> <br />
                            <span style={{ color: '#7BA696', fontWeight: 'bold' }}>HIPAA Secure Telehealth Video Appointments<br /></span>
                            Security is our top priority and so is your privacy
<br /><br />
                            <span style={{ color: '#7BA696', fontWeight: 'bold' }}>On Demand Scheduling<br /></span>
                            Schedule appointments with your doctor around your schedule
<br /><br />
                            <span style={{ color: '#7BA696', fontWeight: 'bold' }}>Task Management<br /></span>
                            Receive timely and realistic tasks from your health team to bring you closer to your goals
<br /><br />
                            <span style={{ color: '#7BA696', fontWeight: 'bold' }}>Diagnostic Analysis<br /></span>
                            Our health team will evaluate your lab tests and apply the results to your health program
<br /><br />
                            <span style={{ color: '#7BA696', fontWeight: 'bold' }}>Membership Dashboard<br /></span>
                            Complete access to all the features included with membership
                        </Box>
                    </Typography>
                </Box>
                <Box width={isMobile ? null : '35%'} p={4} m={isMobile ? 0 : 12} border='1px solid #707070' borderRadius='10px' bgcolor='#36393F' item>
                    <Typography variant='h5'>
                        <Box color='#707070'>
                        <span style={{ color: 'white' }}>Subscription Features:</span>
                <br /> <br/>
                <span style={{ color: '#40677F', fontWeight: 'bold' }}>Integrative Health Team<br /></span>
                        A dedicated team collaborating together to help you with your health goals
<br /><br />
<span style={{ color: '#40677F', fontWeight: 'bold' }}>Monthly Dietetic Consultations<br /></span>
                        Check in with your dedicated Dietitian for updates to your program, tasks, and follow-ups
<br /><br />
<span style={{ color: '#40677F', fontWeight: 'bold' }}>Weekly health counseling consultations<br /></span>
                        Be held accountable to your health program with weakly accountability sessions, tracking and task assignments
<br /><br />
<span style={{ color: '#40677F', fontWeight: 'bold' }}>Personalized Integrative Health Program<br /></span>
                        Fully customized and uniquely formulated health programs merging recommendations from each member of your health team
<br /><br />
<span style={{ color: '#40677F', fontWeight: 'bold' }}>Patient Advocacy <br /></span>
                        We will advocate on behalf of our members, reaching out to primary care providers for full health integration
                        </Box>
                    </Typography>
                </Box>

            </Grid>

        </Grid>
    );
}

export default Info;