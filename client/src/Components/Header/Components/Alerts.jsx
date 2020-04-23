import React from 'react'
import { useState } from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Box, Grid, Typography } from '@material-ui/core'

function DropDown(props) {
    console.log({alertsPre: props})
    return (
        <Box bgcolor='#36393F' className='alerts-box' style={props.open == true ? null : { visibility: 'hidden' }}>
            <Grid container direction='column'>
                {   props.state == undefined ? 
                    (<Box>No Alerts Yet!</Box>)
                    :
                    props.state.alerts.map((row) => (
                        <Grid style={{ borderBottom: '1px solid black' }} container direction='row'>
                            <Box justifyContent='center' padding='5px' display='flex' alignItems='center' width='100%' height='50px'>
                                <Typography variant='p'>{row.alert}</Typography>
                            </Box>
                        </Grid>
                    ))
                }

            </Grid>

        </Box>
    )
}

export default (props) => {

    let [open, handleOpen] = useState(false)
    console.log({alertsPre2: props.state})
    function openHandler() {
        if (open === true) {
            handleOpen(false)
        }
        else {
            handleOpen(true)
        }
    }
    return (
        <Box className='alerts-button'>
            <NotificationsIcon style={{ fontSize: '50px' }} className='alerts-icon' onClick={openHandler} />
            <DropDown state={props.state} open={open} />
        </Box>
    )
}