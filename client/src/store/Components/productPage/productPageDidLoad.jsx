import React, {useState} from 'react'
import { Button, Grid } from '@material-ui/core'
import PicModal from './picModal'

function LoadPage(props){
    const [modal, openModal] = useState(false)
    let item = props.state.pulledProduct
    console.log({key: 'hewwo', data: props.state.pulledProduct})
    let price = item.skus.products[0].price
    let priceStr = price.toString()
    priceStr = priceStr.slice(0, -2)
    price = parseInt(priceStr)
    return(
        <Grid style={{width: '100%'}} container>
            <PicModal item={item}/>
            <div className='info'>
                <div>
                <h2>{item.name}</h2>
                <div style={{display :'flex', justifyContent: 'space-around', width: '50%'}}>
                    <h2>*****</h2>
                    <h4>4.2</h4>
                    <h4>(1120)</h4>
                    <h4>Write a review</h4>
                </div>
                </div>
                <bold><h2 className='storePrice'>${price}</h2></bold>
                <Button variant='outlined'>Add to cart</Button>
            </div>
        </Grid>
    )

}

export default LoadPage