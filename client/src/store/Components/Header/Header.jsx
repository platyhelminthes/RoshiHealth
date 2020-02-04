import React from 'react'
import Navbar from './Components/navbar'

function display(props){

    return(
        <Navbar removeItem={props.removeFromCart} checkout={props.checkout} state={props.state} openCart={props.openCart} getProducts={props.getProducts}/>
    )
}

export default display