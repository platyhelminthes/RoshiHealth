import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
    this.submit = this.submit.bind(this);
  }






  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await Axios.post("/api/cart/charge", {
      body: token.id,
      total: this.props.total
    })

    if (response.statusText == 'OK') {

      alert('youve added ' + this.props.total)
      Axios.post('/api/users/addFunds',
        {ammount: this.props.total})
      
      }
      this.props.closeModal()
      this.props.updateTruthWallet(this.props.total)
    }
  



  render() {

    if (this.state.complete == true) { return (<h1>Purchase Complete</h1>) }
    return (
      <div>
      <div onClick={this.props.closeModal} className="modal_background"></div>
        <div className="checkout">
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button onClick={this.submit}>Submit Payment</button>
        </div>
        </div>
    );
  }
}

export default injectStripe(CheckoutForm);