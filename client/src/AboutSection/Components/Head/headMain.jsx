import React from 'react'
import TopNav from './Comps/topNavBar'
import Summary from './Comps/summary'
import BottomNav from './Comps/bottomNav'
function RenderHead(){

    return(
        <div className='aboutHeadMain'>
            <TopNav/>
            <Summary/>
            <BottomNav/>
        </div>
    )

}

export default RenderHead