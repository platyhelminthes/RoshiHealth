import React, { Component } from 'react';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import Checkout from './checkOut'
import {Elements, StripeProvider} from 'react-stripe-elements';

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
        this.setState({checkout: true})
    }

    handleSubmit2(e) {

        this.removeFromCart(e.target.name, e.target.value)
    }

    removeFromCart = (id, cost) => {
        
        axios.post('/api/cart/remove',{
            id: id,
            price: cost
        }).then(this.setState({loading: true})).then(setTimeout(this.getFromDB, 500)).then(setTimeout(this.getItems,1000)).then(setTimeout(this.checkItems,2000))
    }

    componentDidMount(){
        setTimeout(this.getFromDB,1000)
    }

    checkItems = () => {
        this.setState({loading: false})
    }

    getFromDB = () => {axios.post('/api/cart/getItemsInfo').then(
        (res)=>{
            var stuff = []
            for(var i=0; i<res.data.data[0].shoppingCart[0].items.length; i++){
            if(res.data.data[0].shoppingCart[0].items[i].amount > 0){
                stuff.push(res.data.data[0].shoppingCart[0].items[i])
            }
            this.setState({
                items: stuff,
                total: res.data.data[0].shoppingCart[0].total
                
            })}
            console.log(res)
        }
    )
this.setState({loading: false})}
    render() {
        var Name = "Your Name will go here";
        var items = this.state.items
        console.log(items)

        if(this.state.loading == true){return(
            <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
                <h1 style={{marginLeft: '6vw', marginTop: '20vh'}}>Loading...</h1>
                <img style={{marginTop: '5vh', width:'300px', height:'297px'}}src={loadingCircle} id="loadingCircle"/>
            </div>
            )}
        else if(this.state.redirect == true){return(<Redirect to="/main/overview"/>)}
        else if(this.state.checkout == true){return(
            <StripeProvider apiKey="pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD">
            <div className="example">
              <h1>React Stripe Elements Example</h1>
              <Elements>
                <Checkout items={this.state.items} total={this.state.total}/>
              </Elements>
            </div>
          </StripeProvider>
        )}
        return (
        <div>
            <div>
                <h1>{Name}</h1>
                <table style={{width: '100%', border: "2px solid black"}}>
                <tr >
                    <th style={{border: "2px solid black"}}>item</th>
                    <th style={{border: "2px solid black"}}>amount</th>
                    <th style={{border: "2px solid black"}}>price</th>
                    </tr>
                {this.state.items.map(row => (
    
            <tr key={row._id} >
            <td style={{border: "2px solid black"}}>{row.name}</td>
            <td style={{border: "2px solid black"}}>{row.amount}</td>
            <td style={{border: "2px solid black"}}>${row.totalCost}.00</td>
            <button onClick={this.handleSubmit2} value={row.cost} name={row.itemId}>Remove</button>
            </tr>
    
        )
    )}
    <tr style={{border: "2px solid black"}}>
        <td >Total</td>
        <td ></td>
        <td >${this.state.total}.00</td>
    </tr>
    </table>
                    <button onClick={this.handleSubmit} value="test">Checkout</button>
            </div>
        </div>
        );
    }
}

export default Tasks;


