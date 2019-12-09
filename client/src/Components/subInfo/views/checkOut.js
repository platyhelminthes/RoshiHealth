import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Axios from 'axios';
import moment from 'moment';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {

    
    // const {paymentMethod, error} = await stripe.createPaymentMethod('card', CardElement, {
    //   billing_details: {
    //     email: 'dvowen@cox.net',
    //   },
    // });
    // let { token } = await this.props.stripe.createToken({ name: "Name" });
    // let response = await Axios.post("/api/cart/charge", {
    //   body: token.id,
    //   total: this.props.total
    // })

    // if (response.statusText == 'OK') {
    //   Axios.post('/api/users/initiateSub')
    //   }

    //   this.props.closeModal()
    //   this.props.updateTruthWallet(this.props.total)
}
  



  render() {

    if (this.state.complete == true) { return (<h1>Purchase Complete</h1>) }
    return (
      <div>
      <div onClick={this.props.closeModal} className="modal_background"></div>
        <div className="checkout">
          <p>Total: ${this.props.total}.00</p>
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button onClick={this.submit}>Submit Payment</button>
        </div>
        </div>
    );
  }
}

export default injectStripe(CheckoutForm);