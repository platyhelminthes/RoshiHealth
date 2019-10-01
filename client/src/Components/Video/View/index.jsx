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
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    (e).preventDefault()

    this.joinChannel()
}


  selectChannel = channel => {
    this.setState({ channel });
  };

  componentDidMount(){
    setTimeout(this.getUser, 1500)
  }

  getUser = () => {
    Axios.get('/api/users/getUser')
    .then(
      (res)=>{
        console.log(res + 'ohiawfhoiawfohiawfohifahoifawohi')
        if(!res.data.data){this.setState({redirect: true})}
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
      return(<Redirect to='/login'/>)
    }
    return (
      <div className="App">
        <Call name={this.state.name} channel={this.state.channel} />
      </div>
    );
  }
}

export default App;