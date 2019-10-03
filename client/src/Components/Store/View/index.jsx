import React from 'react'
import {Component} from 'react'
import Loading from '../../Loading.jsx'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Sidebar from './sideBar.jsx'



class Store extends Component{
    constructor(){
        super()
        this.state = {
            items: null,
            loading: true,
        }
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    componentDidMount(){
        this.getAppointments('appointment')
        this.getInfo()
        this.load()
    }

    getInfo = () => {
        axios.get('/api/users/getUser')
            .then((res)=>{
                console.log(res + 'thisss')
            })
            .catch(
                (err) => {
                  this.setState({redirect: true})
            })
    }

    load = () => {
        if(this.state.items !== null){
            this.setState({loading: false})
        }
        else{
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
        axios.post('/api/cart/addItem',
        {
         docType: docType,
         Type: Type,
         Price: Price,
         productId: id 
        })
    }

    getAppointments = (search) => {
        axios.post('/api/store/getAppointmentCards',{input: search})
        .then(
            (res)=>{
                console.log(res)
                this.setState({items: res.data.data})
            }
        ).then()
    }



    render(){
        let items = this.state.items

        if(this.state.loading == true){return(
            <Loading/>
        )}
        else if(this.state.redirect == true){return(
            <Redirect to='/login'/>
        )}
        else{
        return(
            <div style={{backgroundColor: 'white', width: '100%', height: '100%', display: 'flex'}}>
                <Sidebar handleSubmit1={this.handleSubmit1}/>
                <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', height: '100%', flexWrap: 'wrap'}}>

                {items.map(
                    row=>(
                        <div style={{borderRadius: '15px' , maxHeight: '40vh', margin: '2vw', maxWidth: '20vw', backgroundColor: 'gray', paddingLeft: '1vw', paddingRight: '1vw'}}>
                        <h2 style={{marginTop: '1vh', borderBottom: '1px solid black', paddingBottom: '1vh'}}>{row.Type}</h2>
                        <p>{row.DocType}</p>
                        <p>${row.Price}.00</p>
                        <p>{row.Description}</p>
                        <button onClick={this.handleSubmit2} data-docType={row.DocType} data-id={row._id} data-price={row.Price} value={row.Type}>purchase</button>
                    </div>
                    )
                )}
                </div>
                
            </div>
        )}
    }
}

export default Store