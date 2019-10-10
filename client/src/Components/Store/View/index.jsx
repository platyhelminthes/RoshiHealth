import React from 'react'
import { Component } from 'react'
import Loading from '../../Loading.jsx'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Sidebar from './sideBar.jsx'
import backimg from '../images/headerimg.jpg'


class Store extends Component {
    constructor() {
        super()
        this.state = {
            items: null,
            loading: true,
            ammount: null
        }
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.getAppointments('appointment')
        this.getInfo()
        this.load()
    }

    getInfo = () => {
        axios.get('/api/users/getUser')
            .then((res) => {
                console.log(res + 'thisss')
            })
            .catch(
                (err) => {
                    this.setState({ redirect: true })
                })
    }

    load = () => {
        if (this.state.items !== null) {
            this.setState({ loading: false })
        }
        else {
            setTimeout(this.load, 500)
        }
    }

    handleSubmit1 = (e) => {
        (e).preventDefault()
        this.getAppointments(e.target.value)
    }

    handleSubmit2 = (e) => {
        (e).preventDefault()
        console.log(e.target.dataset.doctype, e.target.value, parseInt(e.target.dataset.price), e.target.dataset.id)
        this.purchaseItem(e.target.dataset.doctype, e.target.value, parseInt(e.target.dataset.price), e.target.dataset.id)
    }

    purchaseItem = (docType, Type, Price, id) => {
        console.log(docType, Type, Price, id)
        axios.get('/api/users/getUser')
            .then((res) => {
                console.log(this.state.ammount + "allooottt")
                var next = true
                for (var i = 0; i < res.data.data.shoppingCart.length; i++) {
                    if (res.data.data.shoppingCart[i].finishedTransaction == 'Active') {
                        console.log('found')
                        for (var j = 0; j < res.data.data.shoppingCart[i].items.length; j++) {
                            console.log(res.data.data.shoppingCart[i].items[j.docType])
                            if (res.data.data.shoppingCart[i].items[j].docType == docType) {
                                next = false
                                console.log(docType + 'hello')
                                axios.post('/api/cart/increaseToken',
                                    {
                                        type: docType,
                                        ammount: this.state.ammount,
                                        Price: Price
                                    }

                                )
                            }
                        }
                    }
                }
                if (next == true) {
                    axios.post('/api/cart/addItem',
                        {
                            docType: docType,
                            Type: Type,
                            Price: Price,
                            productId: id,
                            ammount: this.state.ammount
                        })
                }

            })
    }

    purchaseStep2 = () => {

    }

    getAppointments = (search) => {
        axios.post('/api/store/getAppointmentCards', { input: search })
            .then(
                (res) => {
                    console.log(res)
                    this.setState({ items: res.data.data })
                }
            ).then()
    }



    render() {
        let items = this.state.items

        if (this.state.loading == true) {
            return (
                <Loading />
            )
        }
        else if (this.state.redirect == true) {
            return (
                <Redirect to='/login' />
            )
        }
        else {
            return (
                <div className="store-container" >
                    <Sidebar handleSubmit1={this.handleSubmit1} />
                    <div className="store__main" >
                        <div className="store__header" style={{ backgroundImage: `url(${backimg})` }}>
                            <h1>I'm a fucking header bro</h1>
                        </div>
                        <div className="store___box-container">
                            {items.map(
                                row => (

                                    <div className="appt_type_boxes" >
                                        <h2>{row.Type}</h2>
                                        <p>{row.DocType}</p>
                                        <p>${row.Price}.00</p>
                                        <p>{row.Description}</p>
                                        <input type="number" placeholder="How Many" name="ammount" onChange={this.onChange} />
                                        <button onClick={this.handleSubmit2} data-docType={row.DocType} data-id={row._id} data-price={row.Price} value={row.Type}>purchase</button>
                                    </div>

                                )
                            )}
                        </div>
                    </div>

                </div>
            )
        }
    }
}


export default Store