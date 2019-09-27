import React, { Component } from "react"
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './BackDrop/Backdrop';
import Featured from './featured/index';
import Nav from './nav/index';
// import Layout from './layout';
import Quotes from './quotes/index';
// import SEO from "../components/seo";
import './layout.css';

class IndexPage extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{paddingLeft: '200px', paddingRight: '200px'}}>
      {/* <Layout> */}
            {/* <SEO title="Home" /> */}
      
        <Nav drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Featured />
        {/* <Home /> */}
        {/* <Footer /> */}
        <Quotes style={{float: 'right'}}/>
        {/* </Layout> */}
        </div>
    );
  }
}

export default IndexPage;


