import React, { Component } from 'react';
import Sidebar from '../../SideNav/View/index'
import Header from '../../Header/views/index'
import Overview from '../../Overview/View/index'
import tasks from '../../Tasks/View/Tasks'
import cart from '../../ShoppingCart/View/Cart'
import subscription from '../../PurchaseSubscription/View/PurchaseSub'
import admin from '../../AdminCommands/View/Admin'
import findProviders from '../../ChooseDoctor/View/index'
import sendTasks from '../../Providers/Views/SendTasks'
import Schedule from '../../Scheduling/View/index'
import {Route} from 'react-router-dom'
import video from '../../Video/View/index'
import sendDoctor from '../../Providers/Views/sendDoctors'
import appointments from '../../Providers/Views/viewAppointments'
import store from '../../Store/View/index'
import '../styling/main.css'
import backimg from '../images/mountains.jpg'


class Main extends Component {



    constructor() {
        super();

        this.state = {
            email: null
        };
    }





    render(){
        return(
            <div id="mainBack" className='main__back' style={{backgroundImage: `url(${backimg})`}}>
            <Sidebar/>
            <div className='overview-container' style={{width:'90vw', minHeight: '100vh'}}>
            <Header/>
            <div className='overview__divs' >
              <Route exact path="/main/overview" component={Overview}/>
              <Route exact path="/main/tasks" component={tasks}/>
              <Route exact path="/main/cart" component={cart}/>
              <Route exact path="/main/subscription" component={subscription}/>
              <Route exact path="/main/adminPage" component={admin}/>
              <Route exact path="/main/addProviders" component={findProviders}/>
              <Route exact path="/main/sendTasks" component={sendTasks}/>
              <Route exact path="/main/scheduler" component={Schedule}/>
              <Route exact path='/main/video' component={video}/>
              <Route exact path='/main/sendDoctor' component={sendDoctor}/>
              <Route exact path='/main/appointments' component={appointments}/>
              <Route exact path='/main/store' component={store}/>
            </div>
            </div>
            </div>
            



        )
    }





}

export default Main;


