import React , {useState} from 'react'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

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
                            <div>
                            <h2>{row.name}</h2>
                        <h2>X{row.amount}</h2>
                            <Button variant='outlined' onClick={()=>{props.removeItem(row)}}>Remove {row.name}</Button>
                            </div>
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
                <Link to='/store/checkout'><Button variant='outlined'>Checkout</Button></Link>
            </div>
            )
}
        </div>
    )

}

export default CartDisplay