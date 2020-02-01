import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Axios from 'axios';
import AddressSection from './AddressSection'
import moment from 'moment';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      line1: null,
      city: null,
      state: null,
      zip: null,
      name: null,
      email: null,
      number: null
    };
    this.submit = this.submit.bind(this);
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
}

  async submit(ev) {

    let { token } = await this.props.stripe.createToken({ name: "Name" });
    Axios.post('/api/store/charge',{
      source: token.id,
      street: this.state.line1,
      city: this.state.city,
      zip: this.state.zip,
      state: this.state.state,
      name: this.state.name,
      email: this.state.email,
      total: this.props.fullprice
    })

}
  



  render() {

    if (this.state.complete == true) { return (<h1>Purchase Complete</h1>) }
    return (
      <div>
        <div className="checkOutStore">
          <div className="cardInfo">
          <p>Total: ${this.props.total}.00</p>
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          </div>
          
          <AddressSection handleChange={this.handleChange} state={this.state} />
          <button onClick={this.submit}>Submit Payment</button>
        </div>
        </div>
    );
  }
}

export default injectStripe(CheckoutForm);