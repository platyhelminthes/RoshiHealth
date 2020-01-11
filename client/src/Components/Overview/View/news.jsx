import React from 'react';
import {Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
          };
    }


    componentDidMount() {

      }


render(){

    return(
        <div className='__news-Main'>
            <h2 style={{margin: '0', marginLeft: '7vw', fontSize: '100px'}}>News</h2>
            <div>
                
            </div>
        </div>



    )
}


}

export default News