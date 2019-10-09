import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Checkout from './checkOut'
import { Elements, StripeProvider } from 'react-stripe-elements';
import '../styles/cart.css'
import prodoc from '../images/prodoc.png'
import loadingCircle from '../../Pictures/loadingCircle.png'

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            itemIds: [],
            items: [],
            total: 0,
            loading: true,
            redirect: false,
            checkout: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        (e).preventDefault()
        this.setState({ checkout: true })
    }

    handleSubmit2(e) {

        this.removeFromCart(e.target.name, e.target.value)
    }

    removeFromCart = (id, cost) => {

        axios.post('/api/cart/remove', {
            id: id,
            price: cost
        }).then(this.setState({ loading: true })).then(setTimeout(this.getFromDB, 500)).then(setTimeout(this.getItems, 1000)).then(setTimeout(this.checkItems, 2000))
    }

    componentDidMount() {
        setTimeout(this.getFromDB, 1000)
    }

    checkItems = () => {
        this.setState({ loading: false })
    }

    getFromDB = () => {
        axios.post('/api/cart/getItemsInfo').then(
            (res) => {
                var stuff = []
                for (var i = 0; i < res.data.data[0].shoppingCart[0].items.length; i++) {
                    if (res.data.data[0].shoppingCart[0].items[i].amount > 0) {
                        stuff.push(res.data.data[0].shoppingCart[0].items[i])
                    }
                    this.setState({
                        items: stuff,
                        total: res.data.data[0].shoppingCart[0].total

                    })
                }
                console.log(res)
            }
        )
        this.setState({ loading: false })
    }
    render() {
        var Name = "Your Name will go here";
        var items = this.state.items
        console.log(items)

        if (this.state.loading == true) {
            return (
                <div style={{ alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h1 style={{ marginLeft: '6vw', marginTop: '20vh' }}>Loading...</h1>
                    <img style={{ marginTop: '5vh', width: '300px', height: '297px' }} src={loadingCircle} id="loadingCircle" />
                </div>
            )
        }
        else if (this.state.redirect == true) { return (<Redirect to="/main/overview" />) }
        else if (this.state.checkout == true) {
            return (
                <StripeProvider apiKey="pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD">
                    <div className="example">
                        <h1>React Stripe Elements Example</h1>
                        <Elements>
                            <Checkout items={this.state.items} total={this.state.total} />
                        </Elements>
                    </div>
                </StripeProvider>
            )
        }
        return (
            <div className="cart_container" >
                <h1 style={{ fontSize: '18px', marginLeft: '15px' }}>Shopping Cart</h1>
                <div className='cart-card'>
                    <h2>{Name}</h2>
                    <table className="cart-table" >
                        <tr >
                            <th>Product Detail</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        <tr >
                            <th style={{backgroundImage: `url(${prodoc})`, height: '150px', width: '125px', backgroundRepeat: 'no-repeat'}}></th>
                            <th style={{textAlign:'left', maxWidth:'250px', justifyContent:'top', verticalAlign:'top', paddingTop:'10px'}}>Some Details about the product can go here.  Maybe some extra fluffy fluf stuff.  FUck if i know.</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        {this.state.items.map(row => (

                            <tr key={row._id} >
                                <td>{row.name}</td>
                                <td>{row.amount}</td>
                                <td>${row.totalCost}.00</td>
                                <button onClick={this.handleSubmit2} value={row.cost} name={row.itemId}>Remove</button>
                            </tr>

                        )
                        )}
                        <tr style={{ border: "2px solid black" }}>
                            <td >Total</td>
                            <td ></td>
                            <td >${this.state.total}.00</td>
                        </tr>
                    </table>


                </div>
                <div className="checkout__card">
                    <div className="checkout__card-items">
                        <h2>Order summary</h2>
                        <div style={{ borderTop: 'solid 1px white', width: '20vw'}}></div>
                        <div>
                            <li style={{ display:'flex', justifyContent:'space-between'}}>
                                <ul>Items</ul>
                                <ul>${this.state.total}.00</ul>
                            </li>
                        </div>
                        <div>Shipping</div>
                        <div style={{ borderTop: 'solid 1px white', width: '20vw' }}></div>
                        <div>Total Cost</div>
                        <div style={{ borderTop: 'solid 1px white', width: '20vw' }}></div>
                        <button className="cart__button" onClick={this.handleSubmit} value="test">Checkout</button>
                        <div>Promotional Code</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tasks;


