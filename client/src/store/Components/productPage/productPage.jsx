import React from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'
import DidLoad from './productPageDidLoad'

function ProductPage(props){
    console.log(props.state)
        
    
    return(
        <div className='storeProductPage'>
            <div className='innerProduct'>
                { props.state.pulledProduct == null || props.state.loadingPic == true ?
                (<h1>Loading...</h1>)
                :
                (<DidLoad state={props.state}/>)
                }
            </div>
        </div>
    )
}

export default ProductPage