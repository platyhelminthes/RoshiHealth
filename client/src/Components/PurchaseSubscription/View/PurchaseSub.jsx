import React, { Component } from 'react';
import axios from 'axios'
import Header from '../../Header/views'

class Tasks extends Component {
    constructor() {
        super();

        this.state = {
                subName: null,
                subPrice: null,
                subId: null,
                currentTotal: null
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

        this.generateSub()
    }

    handleSubmit2(e) {
        (e).preventDefault()

        this.addToCart(e.target.value)
    }

    componentDidMount(){
        axios.get('/api/cart/getSubsInfo').then(
            (res)=>{
                console.log(res)
                this.setState({
                    subName: res.data.data.Name,
                    subPrice: res.data.data.Price,
                    subId: res.data.data._id,
                })
            }
        )
    }

    addToCart = (a) => {
        axios.post('/api/cart/addProductToCart', {
            productId: this.state.subId,
            price: this.state.subPrice,
            total: this.state.subPrice,
            name: a
        })
    }

    generateSub = () => {
        axios.get('/api/cart/generateSub')
      }

    

    render() {
        var subName = this.state.subName
        var subPrice = this.state.subPrice
        var subId = this.state.subId
        console.log(subId)
        return (
        <div>
            <Header/>
            <div>
                    <h1>{subName}</h1>
                    <h1>Price: ${subPrice}.00</h1>
                    <button value='subscription' onClick={this.handleSubmit2}>Add To Your Cart</button>
                    <button onClick={this.handleSubmit}>Make the sub</button>
            </div>
        </div>
        );
    }
}

export default Tasks;
