import React, { Component } from 'react'
import '../styles/subInfo.css'
import teaPic from '../../Pictures/tea.jpg'
import blueberries from '../../Pictures/blueberries.jpg'
import sittingMonk from '../../Pictures/sittingmonk.jpg'
import gate from '../../Pictures/gate.jpg'
import baby from '../../Pictures/baby.jpg'
import coffee from '../../Pictures/coffee.jpg'
import room from '../../Pictures/room.jpg'
import Checkout from './checkOut'
import StripeCheckout from 'react-stripe-checkout';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Axios from 'axios'
const stripe = window.Stripe('pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD');

class subInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            purchase: false
        }

        this.purchaseSub = this.purchaseSub.bind(this)
        this.handleToken = this.handleToken.bind(this)
        this.subscript = this.subscript.bind(this)
    }

    componentDidMount(){
        this.props.closeNav()
    }

    purchaseSub(e){
        
    }

    closeModal = () => {
        this.setState({purchase: false})
    }

    checkoutUrl = "/api/cart/chargeMonthly";
    stripeApiKey = 'pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD'
    handleToken = (token, addresses) => {
      stripe.createToken({name: 'Name'}).then(
        function(result){
          console.log(result)
        }
      )
      // stripe.createPaymentMethod({
      //   type: 'card',
      //   card: StripeCheckout,
      //   billing_details: {
      //     name: 'Jenny Rosen',
      //   },
      // }).then(function(result) {
      //   console.log(result)
      //   // Handle result.error or result.paymentMethod
      // });
      //   Axios.post('/api/cart/createCustomer',
      //   {
      //     cardId: token.card.id
      //   })
      };

      subscript () {
          Axios.get('/api/cart/TEST')
          .then(
              (res)=>{             stripe.redirectToCheckout({sessionId: res.data.charges.id
              }).then(function (result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
              });}
          )
      }

    render() {
        return (
            <div className='__Sub-Info-Main'>
                <div className='__sub-Info-1'>
                    <div className='__sub-text'>
                        <h2>Integrative Health Plans</h2>
                        <h2>$99/MO</h2>
                        <p>Get expert guidance from your personlized team
                            to take your health to the next level. All programs
                        are fully customized to fit your lifestyle.</p>
                    {/* <StripeCheckout
                    allowRememberMe={false}
                    amount={10000}
                    billingAddress
                    closed={this.handleClose}
                    description={'Your personalized health plan'}
                    // image="https://stripe.com/img/documentation/checkout/marketplace.png"
                    image="https://alligator.io/images/alligator-logo3.svg"
                    label="Pay with 💳"
                    locale="auto"s
                    name="RoshiHealth"
                    opened={this.handleOpen}
                    panelLabel="Rent for {{amount}}"
                    // shippingAddress
                    stripeKey={this.stripeApiKey}
                    token={this.handleToken}
                    zipCode
                  /> */}
                  <button onClick={()=>{this.setState({purchase: true})}}>Subscribe</button>
                    </div>
                </div>
                <div className='__sub-Info-2'>
                    <div className='__sub-2-1'>
                        <div style={{ width: '82%', height: '92%', backgroundImage: "url(" + teaPic + ")",backgroundSize: '100%', textAlign: 'bottom', position: 'relative' }}>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', paddingLeft: '1vw' }}>
                                <h2 style={{ textAlign: 'start' }}>Integrative Nutrition</h2>
                                <p>Prescribed nutritional program to support your health program</p>
                            </div>
                        </div>
                        <div style={{ fontSize: '14px', width: '17%', height: '92%', backgroundImage: "url(" + blueberries + ")", backgroundSize: '100%', paddingLeft: '1vw' }}>
                            <h2 style={{ textAlign: 'start' }}>Includes</h2>
                            <ul style={{paddingLeft: '0', textAlign: 'start'}}>
                                <p>Personal Dietitian</p>
                                <p>Monthly Consultations</p>
                                <p>Meal Plans</p>
                                <p>Recipe Ideas</p>
                                <p>Goal Specific Nutrition</p>
                                <p>Disease Management</p>
                                <p>Compliments Doctors Health Plan</p>
                                <p>Tasks/Goal Setting</p>
                            </ul>
                        </div>
                    </div>
                    <div className='__sub-2-2'>
                        <div style={{ width: '17%', height: '92%', backgroundImage: "url(" + sittingMonk + ")", backgroundSize: '100%', paddingLeft: '1vw', fontSize: '14px' }}>
                            <h2 style={{ textAlign: 'start' }}>Includes</h2>
                            <ul style={{paddingLeft: '0', textAlign: 'start'}}>
                            <p>Weekly Consultations</p>
                            <p>Goal Setting</p>
                            <p>Accountability</p>
                            <p>Patient Advocacy</p>
                            <p>Disease Management</p>
                            <p>Preventative Health Strategies</p>
                            <p>Lifestyle Modifications</p>
                            <p>Stress Management</p>
                            <p>Emotional Support</p>
                            </ul>
                        </div>
                        <div style={{ width: '82%', height: '92%', backgroundImage: "url(" + gate + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative' }}>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', paddingLeft: '1vw' }}>
                                <h2 style={{ textAlign: 'start' }}>Health Counseling</h2>
                                <p>Professional guidance for life-style and behavioral adaptations</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='__sub-Info-3'>
                    <h2>What to expect</h2>
                </div> */}
                <div className='__sub-Info-4'>
                    <div style={{backgroundImage: "url(" + baby + ")", backgroundSize: 'cover',}} className='__sub-img-bot'>
                        <div style={{position: 'absolute', bottom: '1vw', left: '1vw'}}>
                        <h2>Initial Consultation</h2>
                        <p>Our nurse will evaluate your current state of health and work with you to create your health team</p>
                        </div>
                    </div>
                    <div style={{backgroundImage: "url(" + coffee + ")", backgroundSize: 'cover',}} className='__sub-img-bot'>
                    <div style={{position: 'absolute', bottom: '1vw', left: '1vw'}}>
                        <h2>Full Year Strategy</h2>
                        <p>Each journey is planned for a year in advance for a fully transformative expierence, preparing you for a life time of healthy living</p>
                        </div>
                    </div>
                    <div style={{backgroundImage: "url(" + room + ")", backgroundSize: 'cover',}} className='__sub-img-bot'>
                    <div style={{position: 'absolute', bottom: '1vw', left: '1vw'}}>
                        <h3>Weeky Appointments And Tasks</h3>
                        <p>Each week you will visit with your health team to form strategies, review tasks, and evaluate progress to ensure you stay on track </p>
                    </div>
                    </div>
                </div>
                <button onClick={this.subscript}>Subscribe</button>
                {this.state.purchase == true ?
                (<StripeProvider apiKey="pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD">
                         <Elements>
                             <Checkout resetTruth={this.props.resetTruth} closeModal={this.closeModal} total={100} />
                         </Elements>
                 </StripeProvider>)
    
    :
    (null)}
            </div>
        )
    }

}

export default subInfo
