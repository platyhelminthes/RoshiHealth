import React from 'react'
import {Component} from 'react'
import userImg from '../../../Pictures/UserPicTemp.jpg';
import LensIcon from '@material-ui/icons/Lens';

class header extends Component {

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div id='__main-head'>
                <div id='__head-logo'>
                    <h2>Roshi Health</h2>
                </div>
                <div id='__head-bio'>
                    <div id='__head-bio-pic'>
                        <img src={userImg} />
                    </div>
                    <div id='__head-bio-info'>
                        <p>{this.props.name}</p>
                        <p>{this.props.email}</p>
                            {/* <div id='__head-online'>
                                <LensIcon color="primary" style={{width: '10px', marginTop: '5px', marginRight: '5px'}}/>
                                <p>Online</p>
                            </div> */}
                        
                    </div>
                </div>
                {/*<div id='__head-search'>
                    <input placeholder='search' type='text-area'/>
        </div>*/}
            </div>
        )
    }

}

export default header