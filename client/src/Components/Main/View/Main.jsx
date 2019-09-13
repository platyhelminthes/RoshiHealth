import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Sidebar from '../../SideNav/View/index'
import Header from '../../Header/views/index'

class Main extends Component {



    constructor() {
        super();

        this.state = {
            email: null,
            fullName: null,
            loading: true,
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        (e).preventDefault()
        console.log(this.state.email2);
        this.sendTask(this.state.task2, this.state.email2)
    }



    componentDidMount(){
        setTimeout(this.getInfo, 500)
    }

    getInfo = () => {
        axios.get('/api/users/getUserInfo').then(
            (res)=>{
                if(!res.data.email){this.setState({redirect: true})}
                console.log(res.data.task[0].text)
                this.setState({email: res.data.email, fullName: res.data.name, task: res.data.task[0].text, loading: false})
            }
        )
    }





    render() {
        var email = this.state.email;
        var name = this.state.fullName;
        var loading = this.state.loading
        if(this.state.redirect == true){return(<Redirect to="/login"/>)}
        else if(loading == true){return(<h1>Loading...</h1>)}
        return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Header/>
            <div style={{display: "flex"}}>
            <Sidebar/>
            <h1>Email: {email}</h1>
            <h1>Name: {name}</h1>
            </div>
          </div>
        );
    }
}

export default Main;
