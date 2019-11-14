import React, { Component } from 'react';
import Sidebar from '../../SideNav/View/index'
import Header from '../../Header/views/index'
import Overview from '../../Overview/View/index'
import Tasks from '../../Tasks/View/Tasks'
import Cart from '../../ShoppingCart/View/Cart'
import moment from 'moment'
import subscription from '../../PurchaseSubscription/View/PurchaseSub'
import admin from '../../AdminCommands/View/Admin'
import FindProviders from '../../ChooseDoctor/View/index'
import sendTasks from '../../Providers/Views/SendTasks'
import Schedule from '../../Scheduling/View/index'
import {Route} from 'react-router-dom'
import sendDoctor from '../../Providers/Views/sendDoctors'
import Appointments from '../../Appointments/views/index'
import Store from '../../Store/View/index'
import '../styling/main.css'
import backimg from '../images/mountains.jpg'
import Team from '../../TeamView/view/index'
import Availability from '../../Providers/Views/availability';
import Axios from 'axios';
import Loading from '../../Loading'
import AccountInfo from '../../AccountInfo/views/index'
import SubInfo from '../../subInfo/views/index'
import YourSub from '../../yourSub/views/index'
import SubscriptionScheduler from '../../subscriptionScheduler/View/index'


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
            redirect: false,
            cost: null,
            confirmed: false,
            openInfoState: false,
            nextAppointment: 'You currently have no appointment',
            subLevel: null,
            number: null,
            textReminders: null,
            hourReminders: null,
            profilePic: null,
            subscription: null,
            search: [],
            subdoctors: [],
            address: null

        };
        this.openInfo = this.openInfo.bind(this)
    }

    componentDidMount(){
      this.getInfo()
      setTimeout(this.sortAppointments, 500)
      this.findDocs()
    //    Axios.get('/api/users/getUser')
    //    .then(
    //    (res)=>{
    //        console.log(res)
    //        this.setState({
    //            email: data.email,
    //            name: data.fullName,
    //            appointments: data.appointments,
    //            allowed: data.doctorsToAdd,
    //            doctor: data.providerInfo.providerType,
    //            tasks: data.tasks,
    //            APT: data.appointmentTokens,
    //            wallet: data.wallet
    //        })
    //    }
    //    )
    //    .then(this.findDocs())
    //    .then(setTimeout(this.sort, 800))
    //    .then(this.load())

    }

    getInfo = async () => {
      let res = await Axios.get('/api/users/getUser')
      let {data} = res.data
      this.setState({
            email: data.email,
            name: data.fullName,
            appointments: data.appointments,
            allowed: data.doctorsToAdd,
            doctor: data.providerInfo.providerType,
            tasks: data.tasks,
            APT: data.appointmentTokens,
            wallet: data.wallet,
            confirmed: data.confirmed,
            subLevel: data.subLevel,
            number: data.phone,
            textReminders: data.texts,
            hourReminders: data.hourReminders,
            subscription: data.subLevel,
            profilePic: data.profilePicURL,
            subscription: data.subscription,
            address: data.address
      })
      
      setTimeout(this.setSearch, 300)
      setTimeout(this.getSubDoctors, 600)
      
    }
    setSearch = () => {
      var search = []
      if(this.state.subscription){
      if(this.state.subscription.nurse.name){
        search.push(this.state.subscription.nurse.id)
      }
      if(this.state.subscription.dietitian.name){
        search.push(this.state.subscription.dietitian.id)
      }
      if(this.state.subscription.healthCounselor.name){
        search.push(this.state.subscription.healthCounselor.id)
      }}
      this.setState({search})
    }
    getSubDoctors = async (search) => {

      let res = await Axios.post('/api/users/getSubProviders', {search: this.state.search})
      let {data} = res.data
      this.setState({subdoctors: data})
    }

    sortAppointments = () => {
      console.log('test')
       var futureAppointments = this.state.appointments.filter(date => moment(date.date).isAfter())
       
       this.setState({appointments: futureAppointments})
        //for(var i=0; i<appointments.length; i++){
        //  alert(appointments.length)
        //  if(moment(appointments[i].date).isBefore(moment()))
        //  var appointments2 = appointments.splice(i, 1)
        //  this.setState({appointments: appointments2})
        //}
    }

    findDocs = async () => {

      let res = await Axios.get('/api/users/getProviders')
      let {data} = res.data
      this.setState({doctors: data})
      this.sort()
    }

    sort = () => {
      console.log(this.state.appointments)
      var newest = moment().add(30, 'years')
      for(var i=0; i<this.state.appointments.length;i++){
        console.log(moment(this.state.appointments[i].date).isBefore(newest))
        if(moment(this.state.appointments[i].date).isBefore(newest) && moment(this.state.appointments[i].date).isAfter(moment())){
          newest = this.state.appointments[i].date
          this.setState({nextAppointment: moment(this.state.appointments[i].date).format('MMMM DD YYYY LT')})
        }
      }
      if(this.state.doctors != null){
      var stuff = []
      for(var i=0; i < this.state.doctors.length; i++){
        stuff.push(this.state.doctors[i].providerInfo.providerType)
      }
      this.setState({types: stuff, loading: false})
      
    }
    }

    load = () => {
        if(this.state.appointments == null || this.state.doctors == null || this.state.types == null || this.state.subLevel == null){setTimeout(this.load, 1000)}
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

    openInfo(e){
      if(this.state.openInfoState == true){
        this.setState({openInfoState: false})
      }
      else{
      this.setState({openInfoState: true})}
    }

    resetTruth = async () => {
      this.setState({redirect: true})
      this.setState({loading: true})
      this.getInfo()
      this.findDocs()
      .then(setTimeout(this.sort, 500))
      .then(setTimeout(this.load, 1500))
    }



    render(){
        if(this.state.loading == true){return(<Loading/>)}
        else if (this.state.confirmed == false){
          return(
            <div>
              <h2>Please check your email and confirm your account</h2>
            </div>
          )
        }
        else{
        return(
            <div id="mainBack" className='main__back' style={{backgroundImage: `url(https://storage.needpix.com/rsynced_images/poland-1985060_1280.jpg)`}}>
            <Sidebar sub={this.state.subscription} profilePic={this.state.profilePic} subLevel={this.state.subLevel} doctors={this.state.doctors} appointments={this.state.appointments} name={this.state.name} email={this.state.email} allowed={this.state.allowed} doctor={this.state.doctor}/>
            <div className='main-container' >
            <Header updateTruthWallet={this.updateTruthWallet}  wallet={this.state.wallet}/>
            <div className='overview__divs' >
              <Route exact path="/main/overview" 
              render={(props)=> <Overview {...props} subLevel={this.state.subLevel} state={this.state}/>}/>
              <Route exact path="/main/subSchedule"
              render={(props)=> <SubscriptionScheduler {...props} state={this.state}/>}/>
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
                render={(props)=><Schedule {...props} doctors={this.state.doctors} cost={this.state.cost} wallet={this.state.wallet} UAPP={this.state.appointments}/>}/>
              <Route exact path='/main/sendDoctor' component={sendDoctor}/>
              {/* <Route exact path='/main/appointments' component={appointments}/> */}
              <Route exact path='/main/Doctors' 
                render={(props)=><Store {...props} types={this.state.types}/>}/>
              <Route exact path='/main/yourSub'
                render={(props)=><YourSub {...props} subLevel={this.state.subLevel} state={this.state.subscription}/>}/>
              <Route exact path='/main/SubInfo'
                render={(props)=><SubInfo {...props} state={this.state} resetTruth={this.resetTruth}/>}/>
              <Route exact path='/main/Team' 
                render={(props)=><Team {...props} subLevel={this.state.subLevel} doctors={this.state.doctors}/>}/>
                <Route exact path='/main/AccountInfo'
                render={(props)=><AccountInfo {...props} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path='/main/availability' 
                render={(props)=><Availability {...props} />}/>
              <Route exact path='/main/appointments'
                render={(props)=><Appointments {...props} state={this.state} />}/>
                {
                    this.state.openInfoState == true ?
                    (<div className="__appointment-Info" onClick={this.openInfo}>
                      <h2>Next Appointment: {this.state.nextAppointment}</h2>
                    </div>)
                    :
                    (<button className="__appointment-Pill" onClick={this.openInfo}></button>)
                  }
            </div>
            </div>
            </div>
            



        )}
    }





}

export default Main;


