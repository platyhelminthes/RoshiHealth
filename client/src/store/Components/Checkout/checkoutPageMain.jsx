import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import MyStoreCheckout from './storeCheckout'
import {useState, useEffect} from 'react'

function CheckoutMain(props) {
    let initArray = props.state.images
    props.state.cartItems.map(
        item=>{
            initArray.push(item.products[0].image)
        }
    )
    const [selector, selectorChange] = useState(0)
      
    useEffect(() => {
        
        console.log(props.state.images)
    
    if(selector == props.state.images.length){
        setTimeout(()=>{selectorChange(0)}, 4000)
    }
    else {
      setTimeout(() => {
        selectorChange(selector => selector + 1);
      }, 4000);}
  }, [selector, props.state.images])
    return (
        <div className='checkoutMain'>
            <div className='checkoutLeft'>
                {initArray == '' ?
                (null)
                :
                (<img style={{height: '100%', width: '100%'}} src={props.state.images[selector]}/>)
}
            </div>
            <div className='checkoutRight'>
            <StripeProvider apiKey="pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD">
                <Elements>
                    <MyStoreCheckout total={props.state.totalCart} fullprice={props.state.fullprice} />
                </Elements>
            </StripeProvider>
            </div>
        </div>
    )

}

export default CheckoutMain