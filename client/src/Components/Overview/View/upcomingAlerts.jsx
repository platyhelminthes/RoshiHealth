import React from 'react'
import {Component} from 'react'
import Loading from '../../Loading'
import moment from 'moment'


class Alerts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading2: true
        }

    }

    componentDidMount(){
        this.load()
    }


    load = () => {
        if(this.props.AP == null){
            setTimeout(this.load, 1000)
        }
        else{
            this.changeDate()
            this.setState({loading2: false})
        }
    }

    changeDate = () => {
        for(var i=0; i<this.props.AP.length; i++){
            console.log(moment(this.props.AP[i].date).format('LT'))
        }
    }

    render(){
        var ap = (this.props.AP)

        if(this.state.loading2 == true){
            return(
                <Loading/>
            )}
            else{
        return(
            
            <div style={{height: '90vh', overflow: 'auto', display: 'flex', flexDirection: 'column', paddingBottom: '5vh'}}>
                {ap.map(row => (
                    <div style={{backgroundColor: 'gray', width: '20vw', height: '15vh', borderRadius: '10px', padding: '.5vw', marginTop: '4vh'}} key={row._id}>
                      <h4 style={{fontSize: '15px',textAlign: 'center'}}>
                        You have an appointment with {row.userName} in
                      </h4>
                      <h5 style={{textAlign: 'center'}}>{row.date}</h5>
                    </div>
                    ))}
            </div>
        )}
    }


}

export default Alerts