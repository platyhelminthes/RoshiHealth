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
import SendTasks from '../../Providers/Views/SendTasks'
import Schedule from '../../Scheduling/View/index'
import {Route} from 'react-router-dom'
import SendDoctor from '../../Providers/Views/sendDoctors'
import Appointments from '../../Appointments/views/index.jsx'
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
import {Redirect} from 'react-router-dom'
import AdminCheck from '../../adminChecker'
import MakeAdmin from '../../AdminPanel/MakeDoctor/views'
import DailySchedule from '../../Providers/dailySchedule/view/dailySchedule'
import HolidaySchedule from '../../Providers/holidayScheduler/view/index'
import ProviderCheck from '../../providerCheck.jsx'
import SubTasks from '../../subscriptionTasks/view/subscriptionsTasks'
import SendSubtasks from '../../Providers/sendSubTasks/view/sendSubTasks';
import ForgotPass from '../../forgotPass/view/forgotPass'
import ViewPatients from '../../Providers/viewPatients/view/viewPatients'
import FAQ from '../../support/FAQ/view/FAQ'
import AskSupport from '../../support/AskSupport/view/askSupport'
import Tutorial from '../../support/tutorial/view/tutorial'
import ViewAppointments from '../../Providers/Views/viewAppointments'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import HouseIcon from '@material-ui/icons/House';

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
            address: null,
            pillOpen: false,
            appointmentToday: true,
            toAppointment: false,
            notlogged: false,
            availableDays: [],
            exp: null,
            patients: [],
            TeamViewPath: null,
            navOpen: false

        };
        this.openInfo = this.openInfo.bind(this)
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }

    openNav(){
      if(this.state.navOpen == true){
        this.setState({navOpen: false})
      }
      else{
      this.setState({navOpen: true})
      }
    }

    closeNav(){
      this.setState({navOpen: false})
    }

    componentDidMount(){
      this.getInfo()
      setTimeout(this.sortAppointments, 1000)
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
            address: data.address,
            exp: data.game.exp
      })
      console.log('hellotest')
      
      setTimeout(this.setSearch, 300)
      setTimeout(this.getSubDoctors, 600)
      setTimeout(this.getPatients, 600)
      
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
    
    getPatients = async () => {
      if(this.state.doctor == 'Patient'){
        console.log('doctors only')
      }
      else {
        let res = await Axios.post('/api/providers/getPatients')
        let {data} = res.data
        if(data == undefined || data.length == 0){
          return null
        }
        else{
        this.setState({patients: data})
        }
      }
    }

    sortAppointments = () => {
      console.log('test')
      if(this.state.appointments == null){this.setState({notLogged: true})}
      else{
       var futureAppointments = this.state.appointments.filter(date => moment(date.date).isAfter())
       
       this.setState({appointments: futureAppointments})
        //for(var i=0; i<appointments.length; i++){
        //  alert(appointments.length)
        //  if(moment(appointments[i].date).isBefore(moment()))
        //  var appointments2 = appointments.splice(i, 1)
        //  this.setState({appointments: appointments2})
        //}{
      }
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
      if(moment().isBefore(moment(this.state.nextAppointment).subtract(10, 'minutes'))){
        
      }
      else if(moment().isAfter(moment(this.state.nextAppointment).add(30, 'minutes'))){
        
      }
      else if(this.state.nextAppointment == ''){

      }
      else{
      this.setState({toAppointment: true})}
    }

    resetTruth = async () => {
      this.setState({redirect: true})
      this.setState({loading: true})
      this.getInfo()
      this.findDocs()
      .then(setTimeout(this.sort, 500))
      .then(setTimeout(this.load, 3000))
    }

    updateWallet = (a) => {
      var ammount = parseInt(this.state.wallet) - parseInt(a)

      this.setState({wallet: ammount})
    }


    render(){
      var today = moment()
      if (this.state.notLogged == true){
        return(
          <Redirect to='/login'/>
        )
      }
        else if(this.state.loading == true){return(<Loading/>)}

        else if (this.state.toAppointment == true) {
          return(
            <Redirect to={{
              pathname: '/video',
              closeNav: this.closeNav,
              state: {
                clicked: true
              }}}/>
          )
        }
        else if (this.state.confirmed == false){
          return(
            <div>
              <h2>Please check your email and confirm your account</h2>
            </div>
          )
        }
        else if (isBrowser){
        return(
            <div id="mainBack" className='main__back' style={{backgroundImage: `url(https://storage.needpix.com/rsynced_images/poland-1985060_1280.jpg)`}}>
            <Sidebar sub={this.state.subscription} profilePic={this.state.profilePic} subLevel={this.state.subLevel} doctors={this.state.doctors} appointments={this.state.appointments} name={this.state.name} email={this.state.email} allowed={this.state.allowed} doctor={this.state.doctor}/>
            <div className='main-container' >
            <Header updateTruthWallet={this.updateTruthWallet}  wallet={this.state.wallet}/>
            <div className='overview__divs' >
              {/* support paths */}
              <Route path="/main/support/FAQ"
                render={(props)=> <FAQ {...props} closeNav={this.closeNav}/>}/>
              <Route path="/main/support/askSupport" 
               render={(props)=> <AskSupport {...props} closeNav={this.closeNav}/>}/>
              <Route path="/main/support/tutorial" 
               render={(props)=> <Tutorial {...props} closeNav={this.closeNav}/>}/>


              {/* admin paths */}
              <Route path="/main/admin" 
              render={(props)=> <AdminCheck {...props}  subLevel={this.state.subLevel}/>}/>
              <Route exact path='/main/admin/makeDoctor'
              render={(props)=> <MakeAdmin closeNav={this.closeNav} {...props}/>}/>
              <Route exact path="/main/adminPage"  component={admin}/>


              {/* provider paths */}
              <Route path ='/main/provider'
              render={(props)=><ProviderCheck {...props} closeNav={this.closeNav} state={this.state}/>}/>
              <Route exact path='/main/provider/dailySchedule'
              render={(props)=> <DailySchedule state={this.state} closeNav={this.closeNav} resetTruth={this.resetTruth} {...props}/>}/>
               <Route exact path='/main/provider/holidaySchedule'
              render={(props)=><HolidaySchedule {...props} closeNav={this.closeNav} state={this.state}/>}/>
              <Route exact path="/main/provider/sendTasks" 
              render={(props)=><SendTasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path='/main/provider/sendDoctor' 
              render={(props)=><SendDoctor {...props} closeNav={this.closeNav} state={this.state} />}/>
              <Route exact path='/main/provider/availability' 
              render={(props)=><Availability {...props} closeNav={this.closeNav} />}/>
              <Route exact path='/main/appointments'
              render={(props)=><Appointments {...props} closeNav={this.closeNav} state={this.state} />}/>
              <Route exact path='/main/provider/sendSubTasks'
              render={(props)=><SendSubtasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path='/main/provider/Patients'
              render={(props)=><ViewPatients {...props} closeNav={this.closeNav} state={this.state}/>}/>
              <Route exact path='/main/provider/appointments'
              render={(props)=><ViewAppointments {...props} state={this.state}closeNav={this.closeNav}/>}/>


              <Route exact path="/main/overview" 
              render={(props)=> <Overview {...props} closeNav={this.closeNav} subLevel={this.state.subLevel} state={this.state}/>}/>
              <Route exact path='/main/subTasks'
              render={(props)=><SubTasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path="/main/subSchedule"
              render={(props)=> <SubscriptionScheduler {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path="/main/tasks" 
                render={(props)=><Tasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              {/*<Route exact path="/main/cart" 
                render={(props)=><Cart {...props}/>}/>*/}
              <Route exact path="/main/subscription" closeNav={this.closeNav}  resetTruth={this.resetTruth} component={subscription}/>
              <Route exact path="/main/addProviders" 
              render={(props)=><FindProviders {...props} closeNav={this.closeNav} redirect={this.state.redirect} resetTruth={this.resetTruth}/>}/>
              <Route exact path="/main/scheduler" 
                render={(props)=><Schedule {...props} closeNav={this.closeNav} updateWallet={this.updateWallet} resetTruth={this.resetTruth} doctors={this.state.doctors} cost={this.state.cost} wallet={this.state.wallet} UAPP={this.state.appointments}/>}/>
              {/* <Route exact path='/main/appointments' component={appointments}/> */}
              <Route exact path='/main/Doctors' 
                render={(props)=><Store {...props} closeNav={this.closeNav} types={this.state.types}/>}/>
              <Route exact path='/main/yourSub'
                render={(props)=><YourSub {...props} closeNav={this.closeNav} subLevel={this.state.subLevel} state={this.state.subscription}/>}/>
              <Route exact path='/main/SubInfo'
                render={(props)=><SubInfo {...props} closeNav={this.closeNav} state={this.state} resetTruth={this.resetTruth}/>}/>
              <Route exact path='/main/Team' 
                render={(props)=><Team {...props} closeNav={this.closeNav} subLevel={this.state.subLevel} doctors={this.state.doctors}/>}/>
              <Route exact path='/main/AccountInfo'
                render={(props)=><AccountInfo {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              
                {
                    this.state.appointmentToday == false || this.state.doctor != 'Patient' ?
                    (null)
                    :
                (<button onMouseEnter={()=>{this.setState({pillOpen: true})}} onMouseLeave={()=>{this.setState({pillOpen: false})}} className={this.state.pillOpen == false ? '__appointment-Pill' : '__appointment-Pill-open'} onClick={this.state.nextAppointment == "You currently have no appointment" ? null : this.openInfo}>{moment().isBefore(moment(this.state.nextAppointment).subtract(10, 'minutes')) ? 'Appointment ' + moment(this.state.nextAppointment).from() : this.state.nextAppointment == 'You currently have no appointment' ? 'Please Schedule an appointment' : 'Go to your appointment'}</button>)
                  }
            </div>
            </div>
            </div>
            



        )}
        else if(isMobile){
          return(
            <div style={{maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'absolute', bottom: '0', right: '0'}}>
              <div className='__main-mobile-head'>
              <Header updateTruthWallet={this.updateTruthWallet}  wallet={this.state.wallet}/>
              </div>
              <div className='__main-mobile-body'>
                {/* support paths */}
              <Route path="/main/support/FAQ"
                render={(props)=> <FAQ {...props} closeNav={this.closeNav}/>}/>
              <Route path="/main/support/askSupport" 
               render={(props)=> <AskSupport {...props} closeNav={this.closeNav}/>}/>
              <Route path="/main/support/tutorial" 
               render={(props)=> <Tutorial {...props} closeNav={this.closeNav}/>}/>


              {/* admin paths */}
              <Route path="/main/admin" 
              render={(props)=> <AdminCheck {...props} closeNav={this.closeNav}subLevel={this.state.subLevel}/>}/>
              <Route exact path='/main/admin/makeDoctor'
              render={(props)=> <MakeAdmin closeNav={this.closeNav} {...props}/>}/>
              <Route exact path="/main/adminPage"  component={admin}/>


              {/* provider paths */}
              <Route path ='/main/provider'
              render={(props)=><ProviderCheck {...props} closeNav={this.closeNav} state={this.state}/>}/>
              <Route exact path='/main/provider/dailySchedule'
              render={(props)=> <DailySchedule state={this.state} closeNav={this.closeNav} resetTruth={this.resetTruth} {...props}/>}/>
               <Route exact path='/main/provider/holidaySchedule'
              render={(props)=><HolidaySchedule {...props} closeNav={this.closeNav} state={this.state}/>}/>
              <Route exact path="/main/provider/sendTasks" 
              render={(props)=><SendTasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path='/main/provider/sendDoctor' 
              render={(props)=><SendDoctor {...props} closeNav={this.closeNav} state={this.state} />}/>
              <Route exact path='/main/provider/availability' 
              render={(props)=><Availability {...props} closeNav={this.closeNav} />}/>
              <Route exact path='/main/appointments'
              render={(props)=><Appointments {...props} closeNav={this.closeNav} state={this.state} />}/>
              <Route exact path='/main/provider/sendSubTasks'
              render={(props)=><SendSubtasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path='/main/provider/Patients'
              render={(props)=><ViewPatients {...props} closeNav={this.closeNav} state={this.state}/>}/>
                            <Route exact path='/main/provider/appointments'
              render={(props)=><ViewAppointments {...props} closeNav={this.closeNav}/>}/>


              <Route exact path="/main/overview" 
              render={(props)=> <Overview {...props} closeNav={this.closeNav} subLevel={this.state.subLevel} state={this.state}/>}/>
              <Route exact path='/main/subTasks'
              render={(props)=><SubTasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path="/main/subSchedule"
              render={(props)=> <SubscriptionScheduler {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              <Route exact path="/main/tasks" 
                render={(props)=><Tasks {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              {/*<Route exact path="/main/cart" 
                render={(props)=><Cart {...props}/>}/>*/}
              <Route exact path="/main/subscription" closeNav={this.closeNav}  resetTruth={this.resetTruth} component={subscription}/>
              <Route exact path="/main/addProviders" 
              render={(props)=><FindProviders {...props} closeNav={this.closeNav} redirect={this.state.redirect} resetTruth={this.resetTruth}/>}/>
              <Route exact path="/main/scheduler" 
                render={(props)=><Schedule {...props} closeNav={this.closeNav} updateWallet={this.updateWallet} resetTruth={this.resetTruth} doctors={this.state.doctors} cost={this.state.cost} wallet={this.state.wallet} UAPP={this.state.appointments}/>}/>
              {/* <Route exact path='/main/appointments' component={appointments}/> */}
              <Route exact path='/main/Doctors' 
                render={(props)=><Store {...props} closeNav={this.closeNav} types={this.state.types}/>}/>
              <Route exact path='/main/yourSub'
                render={(props)=><YourSub {...props} closeNav={this.closeNav} subLevel={this.state.subLevel} state={this.state.subscription}/>}/>
              <Route exact path='/main/SubInfo'
                render={(props)=><SubInfo {...props} closeNav={this.closeNav} state={this.state} resetTruth={this.resetTruth}/>}/>
              <Route exact path='/main/Team' 
                render={(props)=><Team {...props} closeNav={this.closeNav} subLevel={this.state.subLevel} doctors={this.state.doctors}/>}/>
              <Route exact path='/main/AccountInfo'
                render={(props)=><AccountInfo {...props} closeNav={this.closeNav} resetTruth={this.resetTruth} state={this.state}/>}/>
              
                {
                    this.state.appointmentToday == false || this.state.doctor != 'Patient'?
                    (null)
                    :
                (<button onMouseEnter={()=>{this.setState({pillOpen: true})}} onMouseLeave={()=>{this.setState({pillOpen: false})}} className={this.state.pillOpen == false ? '__appointment-Pill' : '__appointment-Pill-open'} onClick={this.state.nextAppointment == "You currently have no appointment" ? null : this.openInfo}>{moment().isBefore(moment(this.state.nextAppointment).subtract(10, 'minutes')) ? 'Appointment ' + moment(this.state.nextAppointment).from() : this.state.nextAppointment == 'You currently have no appointment' ? 'Please Schedule an appointment' : 'Go to your appointment'}</button>)
                  }
              </div>
              <div className='__main-mobile-foot'>
                      <div className={this.state.navOpen == false ? '__main-mobile-nav-closed' : '__main-mobile-nav-holder'}>
                        <Sidebar sub={this.state.subscription} profilePic={this.state.profilePic} subLevel={this.state.subLevel} doctors={this.state.doctors} appointments={this.state.appointments} name={this.state.name} email={this.state.email} allowed={this.state.allowed} doctor={this.state.doctor}/>
                      </div>
                <button onClick={this.openNav} className="__main-nav-button">
                  <HouseIcon style={{ color: 'white' }}/>
                </button>
              </div>
            </div>
          )
        }
    }





}

export default Main;


