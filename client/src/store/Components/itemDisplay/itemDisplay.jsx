import React from 'react'
import Card from './Card'
import SideBar from './sidebar'


function itemDisplay(props){
    return(
        <div className='ItemDisplay'>
             <img src='https://scdn.onnit.com/images/store/hero/supplements.jpg?v=20180130:15:01:31'/>
            <div style={{display: 'flex', paddingLeft: '3%', paddingBottom: '17%'}}>
                {/* <SideBar/> */}
            {
                props.state.displayItems.map(

                    (row)=>(
                    !row.products ?
                    (<h1>loading...</h1>)
                    :
                    (
                    <Card info={props.info} addToCart={props.addToCart} item={row}/>
                    )
                    )
                )
            }
            </div>
        </div>
    )
}

export default itemDisplay