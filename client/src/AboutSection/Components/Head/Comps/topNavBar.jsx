import React from 'react'
import {Link} from 'react-router-dom'

function TopNav(){
    return(
        <div className='topNavMain'>
            <h1>Leaf</h1>
            <div>
                <Link><h2>Store</h2></Link>
                <Link><h2>Blog</h2></Link>
            </div>
        </div>
    )
}

export default TopNav