import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import loadingCircle from '../../Pictures/loadingCircle.png'

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
                subName: null,
                subPrice: null,
                subId: null,
                currentTotal: null,
                redirect: false,
                loading: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    componentWillMount(){
        this.props.closeNav()
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    load = () => {
        if(this.state.subPrice == null){
            setTimeout(this.load, 200)
        }
        else{this.setState({loading: false})}
    }


    handleSubmit2(e) {
        (e).preventDefault()

        this.addToCart(e.target.value)
    }

    componentDidMount(){
        axios.get('/api/cart/getSubsInfo').then(
            (res)=>{
                console.log(res)
                this.setState({
                    subName: res.data.data.Name,
                    subPrice: res.data.data.Price,
                    subId: res.data.data._id,
                })
            }
        ).then(this.load())
    }

    addToCart = (a) => {
        axios.post('/api/cart/addProductToCart', {
            productId: this.state.subId,
            price: this.state.subPrice,
            total: this.state.subPrice,
            name: a
        })
        .then(this.setState({redirect: true}))
    }

    generateSub = () => {
        axios.get('/api/cart/generateSub')
      }

    

    render() {
        var subName = this.state.subName
        var subPrice = this.state.subPrice
        var subId = this.state.subId
        console.log(subId)
        if(this.state.redirect == true){return(<Redirect to='/main/overview'/>)}
        else if(this.state.loading == true){return(
            <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
                <h1 style={{marginLeft: '6vw', marginTop: '20vh'}}>Loading...</h1>
        <img style={{marginTop: '5vh', width:'300px', height:'297px'}}src={loadingCircle} id="loadingCircle"/>
        </div>)
    }
        return (
        <div style={{width: '100%', minHeight: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", paddingLeft: '5vw', paddingRight: '5vw', textAlign: 'center'}}>
                <h1>Would you like to purchase a subscription?</h1>
                <h3>Questions</h3>
                <h4>What does a subscription include?</h4> 
                <p>A subscription to Roshi grants you access to our wide array of professional medical staff who will personally create a health plan to help you live your healthiest life.</p>
                <h4>What happens after i purchase my subscription?</h4>
                <p>You will immediately have access to our task viewer, our scheduling system and the ability to add providers to your team of medical professionals. Your first step is to complete your very first task. Choose your starting nurse and set up an appointment with them.</p>
                <h4>How is my medical team decided? What if i dont know what kind of doctors best fit my situation?</h4>
                <p>When you have your first appointment with your nurse she will assess your current lifestyle, medical history and what you hope to get from this program. From there they will decide what doctors best fit your needs. Your given a token for every doctor needed and from there you can choose each type of doctor.</p>
                <h4>How will i recieve tasks? What are tasks?</h4>
                <p>Tasks are going to be your teams way of teaching you to live a healthier life. You will get about 4-5 tasks per week from most of your medical providers. These could range from going for a nice walk in the park to losing 5 pounds this week. The goal is to ramp up the difficulty of your tasks as you progress and hopefully improve your health to cope with these new tasks.</p>
                <h4>Why should i go with Roshi? What do you offer that i cant get from just seeing a doctor?</h4>
                <p>With Roshi health theres no need to go to a doctors office or fuss with doctors offices. All interaction with medical staff is done from the comfort of your home right from your computer! On top of the ease of use your medical staff consists of multiple doctor types encompassing all of your medical needs. Our goal isnt to give you a few tasks and leave you to it. Roshi health is about learning the best plan for YOU! Each task is designed specifically with YOU and your lifestyle in mind. When you become a Roshi subscriber you become a part of the Roshi family and we hope that even after you no longer have a need for Roshi you leave with the knowledge you need to stay healthy on your own!</p>
                <h4>What are your plans for the future?</h4>
                <p>We eventually plan to add insentive to completing your tasks beyond just getting healthier. Our current plans are to grow our Roshi family and polish the program so you have the best expierence you can here at Roshi.</p>
                <h4>What is a beta? Does this program not work?</h4>
                <p>Currently our website should completely work. We are still in the early stages of making our website but our hope with this beta is to get your feedback and see how we can improve ourselves. Our first step is going to be making the website prettier with a lot more animations and more art. We do ask that your patient with small bugs and if you something does not work for you we would love to fix it as soon as we possibly can! Please inform your nurse of whatever issue your having and our team of engineers will fix it right away!</p>
                <h4>How much does the program cost?</h4>
                <p>Our program is a 250 dollar monthly subscription. Any extra visits with your primary doctor is an extra charge of 250 but the hope is that you dont need to have multiple meetings with your main doctor. Any appointments with your provider team is free of charge and included with the subscription! Please feel free to set up an appointment whenever you need to.</p>
                <h4>Where do i begin?</h4>
                <p>To purchase your subscription please click here >><button value='subscription' onClick={this.handleSubmit2}>Subscription</button>. You will then be brought to your shopping cart where we can process your payment method and get you started on your lifelong journey to becoming your healthiest self!</p>
            </div>
        </div>
        );
    }
}

export default Tasks;
