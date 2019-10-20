import React, { Component } from 'react';
import Sidebar from '../../SideNav/View/index'
import Header from '../../Header/views/index'
import Overview from '../../Overview/View/index'
import Tasks from '../../Tasks/View/Tasks'
import Cart from '../../ShoppingCart/View/Cart'
import subscription from '../../PurchaseSubscription/View/PurchaseSub'
import admin from '../../AdminCommands/View/Admin'
import FindProviders from '../../ChooseDoctor/View/index'
import sendTasks from '../../Providers/Views/SendTasks'
import Schedule from '../../Scheduling/View/index'
import {Route} from 'react-router-dom'
import sendDoctor from '../../Providers/Views/sendDoctors'
import appointments from '../../Providers/Views/viewAppointments'
import Store from '../../Store/View/index'
import '../styling/main.css'
import backimg from '../images/mountains.jpg'
import Team from '../../TeamView/view/index'
import Availability from '../../Providers/Views/availability';
import Axios from 'axios';
import Loading from '../../Loading'


class Main extends Component {



    constructor() {
        super();

        this.state = {
            email: null,
            name: null,
            appointments: null,
            allowed: ['none'],
            doctor: 'Patient',
            loading: true,
            doctors: null,
            types: null,
            wallet: null,
            redirect: false

        };
    }

    componentDidMount(){
        Axios.get('/api/users/getUser')
        .then(
        (res)=>{
            console.log(res)
            this.setState({
                email: res.data.data.email,
                name: res.data.data.fullName,
                appointments: res.data.data.appointments,
                allowed: res.data.data.doctorsToAdd,
                doctor: res.data.data.providerInfo.providerType,
                tasks: res.data.data.tasks,
                APT: res.data.data.appointmentTokens,
                wallet: res.data.data.wallet
            })
        }
        )
        .then(this.findDocs())
        .then(setTimeout(this.sort, 800))
        .then(this.load())

    }

    findDocs = () => {

      Axios.get('/api/users/getProviders')
      .then(
          (res)=>{
            console.log(res)
              this.setState({doctors: res.data.data})
          }
      )
    }

    sort = () => {
      console.log(this.state.doctors)
      if(this.state.doctors != null){
      var stuff = []
      for(var i=0; i < this.state.doctors.length; i++){
        stuff.push(this.state.doctors[i].providerInfo.providerType)
      }
      this.setState({types: stuff})
    }
    }

    load = () => {
        if(this.state.appointments == null || this.state.doctors == null || this.state.types == null){setTimeout(this.load, 1000)}
        else{
          console.log(this.state)
          this.setState({loading: false})
          setTimeout(this.cancelRedirect, 500)}
    }

    cancelRedirect = () => {
      this.setState({redirect: false})
    }

    updateTruthWallet = (a) => {
      var ammount = parseInt(this.state.wallet) + parseInt(a)

      this.setState({wallet: ammount})
    }

    resetTruth = () => {
      this.setState({redirect: true})
      this.setState({loading: true})
      Axios.get('/api/users/getUser')
      .then(
      (res)=>{
          console.log(res)
          this.setState({
              email: res.data.data.email,
              name: res.data.data.fullName,
              appointments: res.data.data.appointments,
              allowed: res.data.data.doctorsToAdd,
              doctor: res.data.data.providerInfo.providerType,
              tasks: res.data.data.tasks,
              APT: res.data.data.appointmentTokens,
              wallet: res.data.data.wallet
          })
      }
      )
      

      Axios.get('/api/users/getProviders')
      .then(
          (res)=>{
            console.log(res)
              this.setState({doctors: res.data.data})

          }
      )
      .then(setTimeout(this.sort, 500))
      .then(setTimeout(this.load, 1500))
    }



    render(){
        if(this.state.loading == true){return(<Loading/>)}
        return(
            <div id="mainBack" className='main__back' style={{backgroundImage: `url(${backimg})`}}>
            <Sidebar doctors={this.state.doctors} appointments={this.state.appointments} name={this.state.name} email={this.state.email} allowed={this.state.allowed} doctor={this.state.doctor}/>
            <div className='main-container' >
            <Header updateTruthWallet={this.updateTruthWallet}  wallet={this.state.wallet}/>
            <div className='overview__divs' >
              <Route exact path="/main/overview" component={Overview}/>
              <Route 
                exact path="/main/tasks" 
                render={(props)=><Tasks {...props} tasks={this.state.tasks}/>}/>
              {/*<Route exact path="/main/cart" 
                render={(props)=><Cart {...props}/>}/>*/}
              <Route exact path="/main/subscription" component={subscription}/>
              <Route exact path="/main/adminPage" component={admin}/>
              <Route exact path="/main/addProviders" 
              render={(props)=><FindProviders {...props} redirect={this.state.redirect} resetTruth={this.resetTruth}/>}/>
              <Route exact path="/main/sendTasks" component={sendTasks}/>
              <Route exact path="/main/scheduler" 
                render={(props)=><Schedule {...props} APT={this.state.APT} UAPP={this.state.appointments}/>}/>
              <Route exact path='/main/sendDoctor' component={sendDoctor}/>
              <Route exact path='/main/appointments' component={appointments}/>
              <Route exact path='/main/Doctors' 
                render={(props)=><Store {...props} types={this.state.types}/>}/>
              <Route exact path='/main/Team' 
                render={(props)=><Team {...props} doctors={this.state.doctors}/>}/>
              <Route exact path='/main/availability' 
                render={(props)=><Availability {...props} />}/>
            </div>
            </div>
            </div>
            



        )
    }





}

export default Main;


