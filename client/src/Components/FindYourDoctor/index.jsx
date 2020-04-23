import React, {useState} from 'react'
import { Box, Grid, Input, Typography } from '@material-ui/core'
import DoctorCard from './doctorCard'
import Axios from 'axios'



async function Getdata(e){
    let res = await Axios.post('/api/providers/findDoctor', {name: e.target.value})
    return res.data
    
    
    
}

export default function(){
    let [data, setData] = useState(null)
    let [search, setSearch] = useState(null)

    
    return(
        <Box width='100%' height='100%'>
            <Grid style={{width: '100%', height: '100%'}} container justify='center' alignContent='center'>
                <Box width='100%' height='100%' border='1px solid black' bgcolor='#31353D'>
                    <Grid style={{width: '100%', height: '100%'}} container direction='column' wrap='nowrap'>
                        <Box bgcolor='white'>
                            <Input onChange={(e)=>{
                                
                                Getdata(e).then((res)=>setData(res))}} value={search} placeholder='Your Doctors Name' variant='contained' fullWidth='true' style={{padding: '10px'}}/>
                        </Box>
                        <Box overflow='auto'>
                            <Grid>
                                {/* Add rows of doctors that match */}
                                {   
                                    data === null ?
                                    null
                                    :
                                    data.map((row)=>(
                                        <DoctorCard row={row}/>
                                    ))
                                }
                                
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}