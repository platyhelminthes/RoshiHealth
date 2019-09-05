import React, { Component } from 'react';
import axios from 'axios'

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
            itemIds: [],
            items: [],
            total: 0,
            loading: null
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

        setTimeout(this.getFromDB,2000)
    }

    getFromDB = () => {axios.get('/api/cart/getUserCart').then(
        (res)=>{
            this.setState({
                itemIds: res.data.data[0].itemIds
            })
        }
    ).then(
        ()=>{
            for(var i=0;i<this.state.itemIds.length;i++){
            axios.post('/api/cart/getItemsInfo', {
                id: this.state.itemIds[i]
            }).then((res)=>{this.state.items.push(res)}).then(this.calculateTotal
            )}
        }
    )}
    calculateTotal = () => {
        var amount = 0
        for(var i=0;i<this.state.items.length;i++){
            amount = amount + this.state.items[i].data.data.Price
        }
        this.setState({total: amount})
    }
    render() {
        var Name = "Your Name will go here";
        

        if(!this.state.items[0]){return(<h1>Loading...</h1>)}
        return (
        <div>
            <div>
                <h1>{Name}</h1>
                <table style={{width: '100%'}}>
                <tr >
                    <th style={{border: "2px solid black"}}>item</th>
                    <th style={{border: "2px solid black"}}>price</th>
                    </tr>
                {this.state.items.map(row => (
    
            <tr key={row._id} >
            <td style={{border: "2px solid black"}}>{row.data.data.Name}</td>
            <td style={{border: "2px solid black"}}>${row.data.data.Price}.00</td>
            </tr>
    
        )
    )}
    <tr>
        <td style={{border: "2px solid black"}}>Total</td>
        <td style={{border: "2px solid black"}}>${this.state.total}.00</td>
    </tr>
    </table>
                    <button onClick={this.handleSubmit}>Checkout</button>
            </div>
        </div>
        );
    }
}

export default Tasks;


