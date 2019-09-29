import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token.id)
    let response = await Axios.post("/api/cart/charge", {
      body: token.id
    })
  
    if (response.statusText == 'OK') this.setState({complete: true})
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