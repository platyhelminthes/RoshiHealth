import React from 'react'
import { CardActions } from '@material-ui/core'

function WhatsNew(props){
    var Cards = [
        {
            img: 'test',
            header: 'hello',
            body: 'hello test',
            date: 'today'

        },
        {
            img: 'test',
            header: 'hello',
            body: 'hello test',
            date: 'today'

        },
        {
            img: 'test',
            header: 'hello',
            body: 'hello test',
            date: 'today'

        },
    ]
    return(
        <div style={{color: 'black'}}>
            <h2 style={{textAlign: 'center'}}>Whats New</h2>
            <p style={{textAlign: 'center'}}>See whats new with RoshiHealth</p>
            <div className={props.small == false ? '__whatsNew-Cards' : '__whatsNew-Cards-Small'}>
            {
                Cards.map(
                    row=>(
                        <div className='__whatsNew-Card'>
                            <h2>{row.img}</h2>
                            <h2>{row.header}</h2>
                            <p>{row.body}</p>
                            <p>{row.date}</p>
                        </div>
                    )
                )
            }
            </div>
        </div>
    )
}

export default WhatsNew