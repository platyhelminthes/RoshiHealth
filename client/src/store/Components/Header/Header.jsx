import React from 'react'
import Navbar from './Components/navbar'

function display(props){

    return(
        <Navbar tests={props.tests}/>
    )
}

export default display