import React, { Component } from "react";
import Call from "./call";
import Axios from "axios";
import {Redirect} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: "",
      name: null,
      redirect: false,
      clicked: false
    };
  }


  selectChannel = channel => {
    this.setState({ channel });
  };

  componentDidMount(){
    this.props.closeNav()
    this.getUser()
    console.log(this.props.location.state)
    if(this.props.location.state == null){this.setState({redirect: true})}
    else{
    this.setState({clicked: this.props.location.state.clicked})
    setTimeout(this.checkClicked, 500)}
  }
  checkClicked = () => {
    if(this.state.clicked == false){
      this.setState({redirect: true})
    }
  }

  getUser = () => {
    Axios.get('/api/users/getUser')
    .then(
      (res)=>{
        console.log(res + 'ohiawfhoiawfohiawfohifahoifawohi')
        if(!res.data.data.email){this.setState({redirect: true})}
        this.setState({name: res.data.data.fullName})
        if(res.data.data.providerInfo.providerType !== 'Patient'){
          this.setState({channel: this.props.location.state.id})
        }
        else{
          this.setState({channel: res.data.data._id})
        }
      }
    )
  }


  joinChannel = () => {
    this.setState({channel: '123'})
  }

  render() {
    if(this.state.redirect === true){
      return(<Redirect to='/main'/>)
    }
    return (
      <div className="video">
        <Call clicked={this.state.clicked} name={this.state.name} channel={this.state.channel} />
      </div>
    );
  }
}

export default App;