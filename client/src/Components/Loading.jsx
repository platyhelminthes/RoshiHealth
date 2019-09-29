import React from 'react'
import loadingCircle from './Pictures/loadingCircle.png'


function Loading(){
    return (
        <div style={{ alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <h1 style={{ marginLeft: '6vw', marginTop: '20vh' }}>Loading...</h1>
            <img style={{ marginTop: '5vh', width: '300px', height: '297px' }} src={loadingCircle} id="loadingCircle" />
        </div>
    )
}

export default Loading