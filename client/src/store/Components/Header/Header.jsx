import React from 'react'
import Navbar from './Components/navbar'

function display(props){

    return(
        <Navbar openCart={props.openCart} getProducts={props.getProducts}/>
    )
}

export default display