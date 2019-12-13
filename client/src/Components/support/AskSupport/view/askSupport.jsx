import React, {Component} from 'react'
import '../styles/askSupport.css'

class AskSupport extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.closeNav()
    }
    render(){
        return(
            <div style={{background: 'white', color: 'black', height: '100%', width: '100%'}}>
                <h3 style={{marginTop: 0, paddingTop: '5vw', paddingLeft: '5vh'}}>At the moment the only way to contact support is by email. Please send an email to <a href='mailto:roshiHealth@gmail.com'>roshiHealth@gmail.com</a></h3>
            </div>
        )
    }

}

export default AskSupport