import React , {useState} from 'react'
import {Button} from '@material-ui/core'
import {StripeProvider, Elements} from 'react-stripe-elements'
import MyStoreCheckout from './storeCheckout'

function CartDisplay (props) {
    const [checkoutDisplay, handleCheckout] = useState(false)
    return (
        <div className={props.state.cart == true ? 'cartModal' : 'cartClosed'}>
            { props.state.cartItems == '' ?
            (<h2>Cart Empty</h2>)
            :
            (<div style={{padding: '5%'}}>
                {
                    props.state.cartItems.map(
                        (row)=>(
                            <h2>{row.name}</h2>
                        )
                    )
                }
                <h2>total: ${props.state.totalCart}.00</h2>
                {
                    checkoutDisplay == true ? 
                    (<h2>hello</h2>)
                    :
                    (null)
                }
                <Button onClick={()=>{
                    checkoutDisplay == true ?
                    handleCheckout(false)
                    :
                    handleCheckout(true)}
                    } variant='outlined'>Checkout</Button>
                        <StripeProvider apiKey="pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD">
                            <Elements>
                            <MyStoreCheckout total={props.state.totalCart} fullprice={props.state.fullprice} />
                            </Elements>
                        </StripeProvider>
            </div>
            )
}
        </div>
    )

}

export default CartDisplay