import React from 'react'
import { Box, Grid, Typography, Button } from '@material-ui/core'
import axios from 'axios'


function handleClick(id, type){
    addDoctor(id, type)
    addPatient(id)
}

function addDoctor(id, type){
    axios.post('/api/providers/addProvider',
    {
        id: id,
        type: type
    })
}

function addPatient(id){
    axios.post('/api/providers/addPatient',
    {
        id: id
    })
}

export default function(props){
    let row = props.row
    return(
        <Box style={{height: '200px', borderBottom:'1px solid white', width: '100%'}}>
        <Grid container alignContent='center' style={{width: '100%', height: '100%'}}>
            <Box width='25%' height='100%' display='flex' justifyContent='center' alignItems='center'>
                <Box style={{backgroundImage:'url(https://s3.amazonaws.com/hcplive/_contributor/325214/happydoctor.jpg)'}} width='40%' height='75%'>

                </Box>
            </Box>
            <Box  pl={5} pt={2}>
                <Grid container direction='column'>
                    <Box><Typography variant='h4'>{row.fullName}</Typography></Box>
                    <Box><Typography variant='h6'>{row.providerInfo.providerType}</Typography></Box>
                    <Box mt={2}><Typography variant='p'>{`${row.address.street} ${row.address.city}, ${row.address.state}`}</Typography></Box>
                    <Button onClick={()=>{handleClick(row._id, row.type)}} style={{marginTop: '10px'}} width='100%' variant='contained' color='primary'>Request this doctor</Button>
                </Grid>
            </Box>
        </Grid>
    </Box>
    )
}