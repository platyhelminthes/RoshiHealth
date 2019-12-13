import React from 'react'
import { Component } from 'react'
import Loading from '../../Loading.jsx'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Sidebar from './sideBar.jsx'
import backimg from '../images/headerimg.jpg'
import { Link } from 'react-router-dom'
import {isMobile} from 'react-device-detect'


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
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeSearch(e){
        (e).preventDefault()
        this.getAppointments(e.target.value)
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
        this.props.closeNav()
        this.getAppointments('general')
        this.load()
    }


    load = () => {
        if (this.state.items !== null || this.props.types == null) {
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
                <div className={isMobile ? '__store-mobile': "store-container"} >

                    <div className={isMobile ? '__store-main-mobile':"store__main"} >
                        <div className="___store-nav">
                            
                            {/* <ul>
                                <button value='general' onClick={this.changeSearch}>Doctors</button>
                                <button value='coming soon' onClick={this.changeSearch}>Supplements</button>
                                <button value='coming soon' onClick={this.changeSearch}>Apparel</button>
                            </ul> */}
                        </div>
                        <div className={isMobile ? '__store-header-mobile': "store__header"} style={{ backgroundImage: `url(${backimg})` }}>
                            <div className='store-header__content'>
                                <div className='store-header__info'>

                                    <h2 className='store-header__title'>Doctors</h2>
                                    <p className='store-header__shortDescription'>Roshi Health carefully selects highly gifted doctors to provide our members with health plans aimed at the heart of the issue, not the symptoms</p>

                                </div>
                            </div>
                        </div>

                        <div className="___store-nav-category">
                            
                            <ul className={isMobile ? '__selectors-mobile': null}>
                                <button className={isMobile ? '__nav-buttons-mobile' : '__store-nav-buttons'} value='metabolic' onClick={this.changeSearch}>Metabolic</button>
                                <button className={isMobile ? '__nav-buttons-mobile' : '__store-nav-buttons'} value='airway' onClick={this.changeSearch}>Airway</button>
                                <button className={isMobile ? '__nav-buttons-mobile' : '__store-nav-buttons'} value='cardio' onClick={this.changeSearch}>Cardio</button>
                                <button className={isMobile ? '__nav-buttons-mobile' : '__store-nav-buttons'} value='general' onClick={this.changeSearch}>General</button>
                                <button className={isMobile ? '__nav-buttons-mobile' : '__store-nav-buttons'} value='gut' onClick={this.changeSearch}>Gut</button>
                                <button className={isMobile ? '__nav-buttons-mobile' : '__store-nav-buttons'} value='mental' onClick={this.changeSearch}>Mental</button>
                            </ul>
                        </div>
                        <div className="store___box-container">
                            {items.length == 0 ?
                            (                                            <div className="appt_type_boxes" >
                            <h2>Coming Soon</h2>
                        </div>)
                            :
                            (null)}
                            {items.map(


                                row => (
                                    (this.props.types.includes(row.DocType) ?
                                        (null)
                                        :
                                        (row.Type == 'coming soon' ?
                                        (
                                            <div className={isMobile ? '__store-boxes-mobile' : "appt_type_boxes"} >
                                                <h2>Coming Soon</h2>
                                            </div>
                                        )
                                        :
                                        (

                                            <div className={isMobile ? '__store-boxes-mobile' : "appt_type_boxes"} >
                                                <h2>{row.Type}</h2>
                                                <p>{row.DocType}</p>
                                                <p>Appointment price: ${row.Price}.00</p>
                                                <p>{row.Description}</p>
                                                <Link to={{
                                                    pathname: '/main/addProviders',
                                                    state: {
                                                        search: row.DocType
                                                    }
                                                }} className='__SideLinks' style={{ width: '100%', paddingLeft: '0' }} >Add {row.DocType} To Your Team</Link>
                                            </div>))
                                        


                                    ))
                            )}
                        </div>
                    </div>

                </div>
            )
        }
    }
}


export default Store
//<Sidebar handleSubmit1={this.handleSubmit1} />