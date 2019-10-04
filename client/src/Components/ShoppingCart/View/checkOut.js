import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  addAppointments = () => {
    Axios.post('/api/cart/updateAccount',
    {
      ATType: this.props.items[0].docType,
      ATAmmount: 1
    })
  }


  checkout = (e) => {
    Axios.post('/api/cart/finish')
}

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token.id)
    let response = await Axios.post("/api/cart/charge", {
      body: token.id,
      total: this.props.total 
    })
  
    if (response.statusText == 'OK') {
      
      this.addAppointments()
      setTimeout(this.checkout, 2000)
      setTimeout(this.setState({complete: true}), 4000)
    }
  }

  render() {

      if(this.state.complete == true){return(<h1>Purchase Complete</h1>)}
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);