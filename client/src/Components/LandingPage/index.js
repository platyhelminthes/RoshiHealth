import React, { Component } from "react"
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/BackDrop/Backdrop';
import Featured from '../components/featured';
import Nav from '../components/nav';
import Layout from '../components/layout';
import Quotes from '../components/quotes/index';
import SEO from "../components/seo";

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
      
      <Layout>
            <SEO title="Home" />

        <Nav drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Featured />
        {/* <Home /> */}
        {/* <Footer /> */}
        <Quotes />
        </Layout>
      
    );
  }
}

export default IndexPage;


