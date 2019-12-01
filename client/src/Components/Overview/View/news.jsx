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
            <FacebookProvider appId="1272641816241730" data-width='100vw'>
        <Page href="https://www.facebook.com/Anarcry/" tabs="timeline" width='900px' height='695px' />
      </FacebookProvider>
        </div>



    )
}


}

export default News