import React from 'react'
import DidLoad from './productPageDidLoad'
import { Box } from '@material-ui/core'

function ProductPage(props){
    console.log(props.state)
        
    
    return(
        <Box pb={12} item>
            {props.state.contentful}
        </Box>
    )
}

export default ProductPage