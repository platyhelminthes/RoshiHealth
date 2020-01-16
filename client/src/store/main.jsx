import React, {Component} from 'react'
import Axios from 'axios'
import Header from './Components/Header/Header'
import './store.css'
import getProducts from './Components/stripeDataSource/items'
import ItemDisplay from './Components/itemDisplay/itemDisplay'
import { Button } from '@material-ui/core'

class Store extends Component {
    constructor(props){
        super(props)
        this.state={
            items: [],
            displayItems: [],
            tag: 'All'
        }
        this.tests = this.tests.bind()
    }

    componentWillMount(){
        getProducts('good', 4).then(data=>{
            this.setState({items: data.products, displayItems: data.products})
        })
    }

    tests = (pickedTag) => {
        let items = this.state.items
        let pushitems = []
        console.log(items)
        if(!pickedTag){
            this.setState({displayItems: this.state.items})
            return
        }
        for(let i=0; i < items.length; i++){
            
            if(items[i].metadata.tags){
            if(items[i].metadata.tags.includes(pickedTag)){
                pushitems.push(items[i])
            }}
        }
        this.setState({displayItems: pushitems})
        console.log(pushitems)
    }
    
    render(){
        return(
            <div className='ShopMain'>
                <Header tests={this.tests}/>
                <ItemDisplay state={this.state}/>
            </div>
        )
    }
}

export default Store