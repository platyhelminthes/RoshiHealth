import React, {Component} from 'react'
import axios from 'axios'
import '../styles/Tasks.css'
import { Table, TableBody, TableRow, TableCell, Button, Icon } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Redirect} from 'react-router-dom'
import {isMobile} from 'react-device-detect'

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: [],
            sub: null,
            redirect: false,
            loading: true,
            text: null,
            finished: null,
            provider: null,
            id: null,
            cardOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeCard = this.closeCard.bind(this);
        this.openCard = this.openCard.bind(this)

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

    handleClick(e){
        (e).preventDefault()
        console.log(e.target.dataset.id)
        this.setState({text: e.target.dataset.text, finished: e.target.dataset.finished, provider: e.target.dataset.provider, id: e.target.dataset.id})
    }

    handleSubmit(e) {
      (e).preventDefault()

      this.finishTask(e.target.dataset.id)
  }

  tasks = this.props.state.tasks
    componentDidMount(){
        this.props.closeNav()
      console.log(this.props.tasks)
      if(this.props.state.tasks == null){
        this.setState({redirect: true})
      }else{
        this.sortTasks()
        this.load()
      }

    }

    load = () => {
      if(this.state.task == null){
          setTimeout(this.load, 100)
      }
      else{this.setState({loading: false})}
  }
    sortTasks = () => {
      var push = []
      for(var i=0;i<this.props.state.tasks.length;i++){
        if(this.props.state.tasks[i].finished == 'Active') {
          push.push(this.tasks[i])
        }
      }
      this.setState({task: push})
    }

    finishTask = (id) => {
      axios.post('/api/tasks/finishTask',
      {
        id: id
      }).then(setTimeout(this.props.resetTruth, 500))
    }

    render() {
      var tasks = this.state.tasks
      if(this.state.redirect == true){return(<Redirect to='/main'/>)}
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
                              (<button className='__mobile-finish-button' data-id={this.state.id} onClick={this.handleSubmit}>Finish Task</button>)
                          }
              </div>)
              :
              (null)
          }
          {
              isMobile ? 
              (<div>
                 {
                      this.state.task.length == 0 ?
                      (<h2 style={{justifySelf: 'center', margin: 0, padding: '5vh'}}>You do not currently have any tasks.</h2>)
                      :
              this.state.task.map(
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
              (<div className='__sub-tasks-container'>
              <div className='__sub-tasks-top'>
                  <div className='__sub-top-left'>
                      {this.props.state.doctors.length == 0 ?
                      (<h2>No doctors added yet</h2>)
                      :
                      this.props.state.doctors.map(
                          row=>(
                              <img src={row.profilePicURL} alt={row.fullName + ' has not added a photo yet'} className='__images'/>
                          )
                      )}
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
                      this.state.task.length == 0 ?
                      (<h2 style={{justifySelf: 'center', margin: '5vw'}}>You do not currently have any tasks.</h2>)
                      :
              this.state.task.map(
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
                              (<button className='__finish-task' data-id={this.state.id} onClick={this.handleSubmit}>Finish Task</button>)
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
          </div>
)
          }
                </div>
      )
    }
}

export default Tasks;


// class Subtasks extends Component {

//     constructor(props){
//         super(props)

//         this.state = {
//             text: null,
//             finished: null,
//             provider: null,
//             id: null,
//             tasks: []
//         }

//         this.handleClick=this.handleClick.bind(this)
//         this.handleClick2=this.handleClick2.bind(this)

//     }

//     handleClick2(e){
//         (e).preventDefault()
//         Axios.post('/api/tasks/finishSubTask',
//             {id: this.state.id})
//     }

//     componentDidMount(){
//         var unclean = this.props.state.subscription.subTasks
//         var clean = []
//         alert(this.props.state.subTasks)
//         for(var i=0; i < unclean.length; i++){
//             if(unclean[i].finished == 'Active'){
//                 clean.push(unclean[i])
//             }
//         }
//         this.setState({tasks: clean})
//     }

//     handleClick(e){
//         (e).preventDefault()
//         console.log(e.target.dataset.id)
//         this.setState({text: e.target.dataset.text, finished: e.target.dataset.finished, provider: e.target.dataset.provider, id: e.target.dataset.id})
//     }

//     render(){
//         return(
//         )
//     }


// }

// export default Subtasks