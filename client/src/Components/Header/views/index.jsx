import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../HeaderNav/index';
import SideDrawer from '../HeaderSideDrawer/SideDrawer';
import Backdrop from '../HeaderBackDrop/Backdrop';
import "../Styles/Header.css";
import Axios from 'axios';
import DropDownTest from './dropDownTest'
import Aheckout from './checkOut'
import { Elements, StripeProvider } from 'react-stripe-elements';
import AddIcon from '@material-ui/icons/Add';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Alerts from '../Components/Alerts'



class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            email: null,
            name: null,
            sideDrawerOpen: false,
            purchase: false,
            DD: false,
            total: null

        };

        this.openModal = this.openModal.bind(this);
    }


    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
      };
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
      };

      closeModal = () => {
        this.setState({ purchase: false });
      };

      openModal = (e) => {
        (e).preventDefault()
        this.setState({ purchase: true, total: e.target.value, DD: false });
      };

      openDropDown = () => {
        if(this.state.DD == true){
          this.setState({DD: false})
        }
        else{
          this.setState({DD: true})
        }
      }

      closeDropDown = () => {
        if(this.state.DD == true){
        this.setState({DD: false})
        }
      }

    
    logOut = () => {
        Axios.get('/api/login/logOut')
    }

    render() {
        let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

        return (
            <div className={isMobile ? '__Header-Main-Mobile' : "__Header-Main"}>
                {/* <HeaderNav drawerClickHandler={this.drawerToggleClickHandler} /> */}
                {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
                {backdrop}
                {/* Alerts component far left */}
                {/* <Alerts state={this.props.state}/> */}
                <div className={isMobile ? '__Header-Items-Mobile' : "__Header-Items"}>
                    
                    {/* {this.state.DD == true ?
                    isMobile ?
                    (<div className='__Header-Dropdown-Mobile' >
                
                    <button value='50' onClick={this.openModal}>Add $50</button>
                    <button value='100' onClick={this.openModal}>Add $100</button>
                    <button value='200' onClick={this.openModal}>Add $200</button>
                    <button value='300' onClick={this.openModal}>Add $300</button>
                    <button value='500' onClick={this.openModal}>Add $500</button>
                    <button value='1000' onClick={this.openModal}>Add $1000</button>
                    <p style={{textAlign: 'center', marginTop: '0'}} onClick={this.closeDropDown}>close?</p>
                    </div>)
                    :
                    (<div className='__Header-Dropdown' >
                
                    <button value='50' onClick={this.openModal}>Add $50</button>
                    <button value='100' onClick={this.openModal}>Add $100</button>
                    <button value='200' onClick={this.openModal}>Add $200</button>
                    <button value='300' onClick={this.openModal}>Add $300</button>
                    <button value='500' onClick={this.openModal}>Add $500</button>
                    <button value='1000' onClick={this.openModal}>Add $1000</button>
                    <p style={{textAlign: 'center', marginTop: '0'}} onClick={this.closeDropDown}>close?</p>
                    </div>)
                    :
                    (null)
                    }
                { isMobile ?
                (<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '5vw'}}>
                
                <p className='__Header-Wallet-Mobile'>Wallet: ${this.props.wallet}.00</p>
                <button className='__Header-Add-Button-Mobile' onClick={this.openDropDown}><AddIcon style={{fontSize: '15px'}}/> Add money?</button>
                
                </div>)
                :
                (
                <div style={isMobile ? {display: 'flex', flexDirection: 'row', alignItems: 'center'} :{display: 'flex', flexDirection: 'column'}}>
                
                <p className='__Header-Wallet'>Wallet: ${this.props.wallet}.00</p>
                <button className='__Header-Add-Button' onClick={this.openDropDown}><AddIcon style={{fontSize: '15px'}}/> Add money?</button>
                
                </div>
                )} */}
                <Link to='/login' onClick={this.logOut} style={isMobile ? {color: 'white', textDecoration: 'none', alignSelf: 'center', width: '25vw', height: '10vh', paddingTop: '2vh', paddingLeft: '3vw', borderLeft: '2px solid black', fontSize: '5vw'} : { marginRight: '2vw', marginTop: '2vh', color: 'white', textDecoration: 'none' }}>Logout</Link>
                
                </div>
                {this.state.purchase == true ?
                (<StripeProvider apiKey="pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD">
                        <Elements>
                            <Aheckout style={{zIndex: '9999999'}} updateTruthWallet={this.props.updateTruthWallet} closeModal={this.closeModal} total={this.state.total} />
                        </Elements>
                </StripeProvider>)
                :
                (null)
                }
            </div>
        );
    }
}

export default Tasks;
//<DropDownTest openModal={this.openModal}/>
//<h3 className="JoeMax">{this.state.email}</h3>
//<h3 className="JoeMax">{this.state.name}</h3>
