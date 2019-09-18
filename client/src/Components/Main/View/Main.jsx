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
import Axios from 'axios';

class Main extends Component {



    constructor() {
        super();

        this.state = {
            email: null
        };
    }





    render(){
        return(
            <div id="mainBack" class="colorWhite"style={{width:'100vw', height:'100vw', display:'flex' }}>

            <Sidebar/>
            <div style={{width:'80vw', minHeight: '100vh'}}>
            <Header/>
            <div style={{border: '2px solid #26262b',height:'90vh', overflowX: 'hidden', overflowY: 'auto',  backgroundColor: '#36393F',}}>
              <Route exact path="/main/overview" component={Overview}/>
              <Route exact path="/main/tasks" component={tasks}/>
              <Route exact path="/main/cart" component={cart}/>
              <Route exact path="/main/subscription" component={subscription}/>
              <Route exact path="/main/adminPage" component={admin}/>
              <Route exact path="/main/addProviders" component={findProviders}/>
              <Route exact path="/main/sendTasks" component={sendTasks}/>
              <Route exact path="/main/scheduler" component={Schedule}/>
            </div>
            </div>
            </div>
            



        )
    }





}

export default Main;


