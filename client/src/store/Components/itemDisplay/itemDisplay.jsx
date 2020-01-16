import React from 'react'
import Card from './Card'
import SideBar from './sidebar'


function itemDisplay(props){
    return(
        <div className='ItemDisplay'>
             <img src='https://scdn.onnit.com/images/store/hero/supplements.jpg?v=20180130:15:01:31'/>
            <div style={{display: 'flex'}}>
                {/* <SideBar/> */}
            {
                props.state.displayItems.map(
                    (row)=>(
                    <Card item={row}/>
                    )
                )
            }
            </div>
        </div>
    )
}

export default itemDisplay