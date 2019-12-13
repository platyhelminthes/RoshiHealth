import React, {Component} from 'react'
import Axios from 'axios'
import '../styles/subTasks.css'
import { Table, TableBody, TableRow, TableCell, Button, Icon } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import{isMobile} from 'react-device-detect'
class Subtasks extends Component {

    constructor(props){
        super(props)

        this.state = {
            text: null,
            finished: null,
            provider: null,
            id: null,
            tasks: []
        }

        this.handleClick=this.handleClick.bind(this)
        this.handleClick2=this.handleClick2.bind(this)
        this.openCard = this.openCard.bind(this)
        this.closeCard = this.closeCard.bind(this)

    }

    closeCard(){
        this.setState({cardOpen: false})
    }

    openCard(e){
        
        (e).preventDefault()
        this.setState({cardOpen: true})
        console.log(e.target.dataset.id)
        this.setState({text: e.target.dataset.text, finished: e.target.dataset.finished, provider: e.target.dataset.provider, id: e.target.dataset.id})
    }

    handleClick2(e){
        (e).preventDefault()
        Axios.post('/api/tasks/finishSubTask',
            {id: this.state.id}).then(setTimeout(this.props.resetTruth, 500))
    }

    componentDidMount(){
        this.props.closeNav()
        var unclean = this.props.state.subscription.subTasks
        var clean = []
        for(var i=0; i < unclean.length; i++){
            if(unclean[i].finished == 'Active'){
                clean.push(unclean[i])
            }
        }
        this.setState({tasks: clean})
    }

    handleClick(e){
        (e).preventDefault()
        console.log(e.target.dataset.id)
        this.setState({text: e.target.dataset.text, finished: e.target.dataset.finished, provider: e.target.dataset.provider, id: e.target.dataset.id})
    }

    render(){
        var tasks = this.state.tasks
        return(
            <div className={isMobile ? '__sub-tasks-mobile' : '__sub-tasks-main'}>
                {
              this.state.cardOpen == true ?
              (<div className='__sub-tasks-mobile-card'>
                  <button onClick={this.closeCard} className='__mobile-card-close'>X</button>
                  <div className='__mobile-card-head'>
                    <h4 style={{color:'white'}}>{this.state.provider}</h4>
                  </div>
                  <div className='__mobile-card-bottom'>
                      <h3>Task Info:</h3>
                        <h4>{this.state.text}</h4>
                  </div>
                  {   this.state.text == null ?
                              (null)
                              :
                              (<button className='__mobile-finish-button' onClick={this.handleClick2}>Finish Task</button>)
                          }
              </div>)
              :
              (null)
          }
          {
              isMobile ? 
              (<div style={{marginTop: 0}}>
                 {
                      tasks.length == 0 ?
                      (<h2 style={{justifySelf: 'center', margin: 0, padding: '5vh'}}>You do not currently have any tasks.</h2>)
                      :
              tasks.map(
                  row=>(
                  
                          <Table>
                              <TableBody>
                                  <TableRow>
                                      <TableCell style={{color: 'white'}}>{row.text}</TableCell>
                                      <TableCell><button className='__task-select' data-id={row._id} data-provider={row.providerName} data-finished={row.finished} data-text={row.text} onClick={this.openCard}>Info <ArrowForwardIcon></ArrowForwardIcon></button></TableCell>
                                  </TableRow>
                              </TableBody>
                          </Table>
                  )
              )
          }   
              </div>)
              :
              (
                <div className='__sub-tasks-container'>
                    <div className='__sub-tasks-top'>
                        <div className='__sub-top-left'>
                            <img src='https://roshihealth.s3.amazonaws.com/bucketFolder/%271575674138688%27-lg.jpg' style={{borderRadius: '15px', height: '100%'}}/>
                            <img src='https://roshihealth.s3.us-west-1.amazonaws.com/bucketFolder/%271575674464940%27-lg.jpg' style={{borderRadius: '15px', height: '100%'}}/>
                        </div>
                        <div className='__sub-top-right'>
                            <div className='__sub-completed'>
                                <h2 style={{textAlign:'center', fontSize: '30px'}}>Completed</h2>
        <h2 style={{textAlign:'center', fontSize: '50px', marginTop: '5%'}}>{this.props.state.exp}</h2>
                            </div>
                            <div className='__sub-level'>
                                <h2 style={{textAlign:'center', fontSize: '30px'}}>Level</h2>
    <h2 style={{textAlign:'center', fontSize: '50px', marginTop: '5%'}}>{Math.floor(this.props.state.exp / 10)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='__sub-tasks-bottom'>
                        <div className='__sub-bottom-left'>
                        {
                        tasks.length == 0 ?
                        (<h2 style={{justifySelf: 'center', margin: '5vw'}}>You do not currently have any tasks.</h2>)
                        :
                    tasks.map(
                        row=>(
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{color: 'white'}}>{row.text}</TableCell>
                                            <TableCell><button className='__task-select' data-id={row._id} data-provider={row.providerName} data-finished={row.finished} data-text={row.text} onClick={this.handleClick}>Info <ArrowForwardIcon></ArrowForwardIcon></button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                        )
                    )
                }
                        </div>
                        <div className='__sub-bottom-right'>
                            <div className='__task-info-top'>
                                <h2 style={{position: 'fixed', paddingRight: '20%'}}>Notes</h2>
                                {   this.state.text == null ?
                                    (null)
                                    :
                                    (<button className='__finish-task' data-id={this.state.id} onClick={this.handleClick2}>Finish Task</button>)
                                }
                            </div>
                            <div className='__task-info-mid'>
                                <div style={{height: '40%'}}>
                                <h4 >Task Info:</h4 >
                                <div>
                                {   this.state.text == null ?
                                    (null)
                                    :
                                    (<h4 >{this.state.text}</h4 >)
                                }
                                </div>
                                </div>
                                <div style={{height: '50%'}}>
                                <h4 >Doctor Assigned:</h4 >
                                <div>
                                    {
                                        this.state.provider == null ?
                                        (null)
                                        :
                                        (<h4 >{this.state.provider}</h4 >)
                                    }
                                </div>
                                </div>
                            </div>
                            <div className='__task-info-bottom'>
                                <h2 style={this.state.finished == null ? {marginRight: '40%'} : {height: '100%'}}>Task Finished:</h2>
                            {this.state.finished == null ?
                                    (null)
                                    :
                                    (<h2>{this.state.finished}</h2>)
                                }
                            </div>
                        </div>

                    </div>
                </div>)}
            </div>
        )
    }


}

export default Subtasks