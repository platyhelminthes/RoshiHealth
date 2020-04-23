import React from 'react'
import Navbar from './Components/navbar'

function display(props){

    return(
        <Navbar removeItem={props.removeItem} checkout={props.checkout} state={props.state} openCart={props.openCart} getProducts={props.getProducts}/>
    )
}

export default display