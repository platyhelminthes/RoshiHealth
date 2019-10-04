import React from 'react';
import {Component} from 'react';

class News extends Component{
    constructor(props){
        super(props)
    }



render(){

    return(
        <div style={{backgroundColor: 'gray', width: '30vw', height: '83vh', marginTop: '3vh', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'auto', paddingBottom: '3vh'}}>
            <div style={{width: '25vw', marginTop: '3vh', textAlign: 'center'}}>
                <h2>Thursday October 3rd 2019</h2>
                    <li>spruced up look of site</li>                
            </div>
        </div>



    )
}


}

export default News