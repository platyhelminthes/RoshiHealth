import React, { Component } from 'react';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import { runInNewContext } from 'vm';

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            itemIds: [],
            items: [],
            total: 0,
            loading: true,
            redirect: false
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
        this.checkout(e)
        this.setState({redirect: true})
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

    checkout = (e) => {
        axios.post('/api/cart/finish')
    }

    getFromDB = () => {axios.post('/api/cart/getItemsInfo').then(
        (res)=>{
            this.setState({
                items: res.data.data[0].shoppingCart[0].items,
                total: res.data.data[0].shoppingCart[0].total
                
            })
            console.log(res)
        }
    )
this.setState({loading: false})}
    render() {
        var Name = "Your Name will go here";
        var items = this.state.items

        if(this.state.loading == true){return(<h1>Loading...</h1>)}
        else if(this.state.redirect == true){return(<Redirect to="/main/overview"/>)}
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


