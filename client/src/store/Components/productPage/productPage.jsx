import React from 'react'
import DidLoad from './productPageDidLoad'
import Body from './Contentfulbody'
import { Grid } from '@material-ui/core'

function ProductPage(props){
    console.log(props.state)
        
    
    return(
        <div className='storeProductPage'>
            <div className='innerProduct'>
                { props.state.pulledProduct == null || props.state.loadingPic == true ?
                (<h1>Loading...</h1>)
                :
                
                (
                <Grid direction='column'>
                    <DidLoad state={props.state}/>
                    <Body state={props.state}/>
                </Grid>
                    )
                }
            </div>
        </div>
    )
}

export default ProductPage