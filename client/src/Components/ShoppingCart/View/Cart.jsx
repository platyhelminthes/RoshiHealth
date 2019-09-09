import React, { Component } from 'react';
import axios from 'axios'
import { runInNewContext } from 'vm';

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            itemIds: [],
            items: [],
            total: 0,
            loading: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.checkout()
    }

    componentDidMount(){

        setTimeout(this.getFromDB,500)
        setTimeout(this.getItems, 1000)
        setTimeout(this.checkItems, 3000)
    }
    checkItems = () => {
        console.log(this.state.items)
        this.setState({loading: false})
    }
    getItems = () => {
        for(var i=0;i<this.state.itemIds.length;i++){
            axios.post('/api/cart/getItemsInfo', {
                id: this.state.itemIds[i].itemId
            }).then((res)=>{
                res.amount = this.state.itemIds[i-1].ammount
                res.totalCost = this.state.itemIds[i-1].totalCost
                this.state.items.push(res)
        console.log(res)})}
    }
    //this.setState({
    //    itemIds: res.data.data[0].itemIds
    //})
    getFromDB = () => {axios.get('/api/cart/getUserCart').then(
        (res)=>{
            this.setState({
                itemIds: res.data.data[0].items,
                total: res.data.data[0].total
            })
        }
    )}
    render() {
        var Name = "Your Name will go here";
        var items = this.state.items

        if(this.state.loading == true){return(<h1>Loading...</h1>)}
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
            <td style={{border: "2px solid black"}}>{row.data.data.Name}</td>
            <td style={{border: "2px solid black"}}>{row.amount}</td>
            <td style={{border: "2px solid black"}}>${row.totalCost}.00</td>
            </tr>
    
        )
    )}
    <tr style={{border: "2px solid black"}}>
        <td >Total</td>
        <td ></td>
        <td >${this.state.total}.00</td>
    </tr>
    </table>
                    <button onClick={this.handleSubmit}>Checkout</button>
            </div>
        </div>
        );
    }
}

export default Tasks;


