import React, { Component } from 'react'
import Axios from 'axios'
import Header from './Components/Header/Header'
import './store.css'
import getProducts from './Components/stripeDataSource/items'
import ItemDisplay from './Components/itemDisplay/itemDisplay'
import ProductPage from './Components/productPage/productPage'
import { Redirect, Route } from 'react-router-dom'
import Cart from './Components/cart/mainCart'
import CheckoutPage from './Components/Checkout/checkoutPageMain'
import Footer from './Components/Footer'
import { Grid, Box } from '@material-ui/core'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            displayItems: [],
            tag: 'All',
            toProduct: false,
            pulledProduct: null,
            loadingPic: false,
            cartItems: [],
            cart: false,
            totalCart: 0,
            fullprice: 0,
            images: [],
            contentful: null
        }
        this.getProducts = this.getProducts.bind(this)
    }

    componentDidMount() {
        let pushstuff = []
        if (localStorage.getItem('items') == null) {
            console.log('no Items')
        }
        else {
            let imagesToPush = []
            this.setState({
                cartItems: JSON.parse(localStorage.getItem('items')),
                totalCart: parseInt(localStorage.getItem('cartTotal')),
                fullprice: parseInt(localStorage.getItem('fullTotal'))
            })
            for (let i = 0; i < this.state.cartItems.length; i++) {
                imagesToPush.push(this.state.cartItems[i].products[0].image)
            }
            this.setState({ images: imagesToPush })
        }
        getProducts('good', 4).then(data => {
            for (let i = 0; i < data.products.length; i++) {

                Axios.post('/api/store/getSkus', {
                    productId: data.products[i].id
                })
                    .then(
                        (res) => {
                            data.products[i].products = res.data.products
                            pushstuff.push(data.products[i])
                        })
            }
            setTimeout(() => {
                this.setState({
                    items: data.products,
                    displayItems: data.products,
                })
            }, 500)
        })
        this.findProduct()
    }

     componentDidUpdate() {
         this.findProduct()
     }



    getProducts = (pickedTag) => {
        let items = this.state.items
        let pushitems = []
        if (!pickedTag) {
            this.setState({ displayItems: this.state.items })
            return
        }
        for (let i = 0; i < items.length; i++) {

            if (items[i].metadata.tags) {
                if (items[i].metadata.tags.includes(pickedTag)) {
                    pushitems.push(items[i])
                }
            }
        }
        this.setState({ displayItems: pushitems })
    }

    Info = (id) => {
        let link = '/Store/product/' + id
        this.props.history.push('/store/product/' + id)


    }
    
    findProduct = () => {
        const Text = ({ children }) => <h2 style={{textAlign: 'center', color: 'orange', fontWeight: 'bolder', marginBottom: '3%'}}>{children}</h2>;
        const Text2 = ({ children }) => <h1 style={{marginLeft:'25px', color: 'Orange', fontFamily: 'helvitica', fontWeight: 'bolder'}}>{children}</h1>
        const Document = ({ children }) => <Grid style={{backgroundColor: 'rgba(1,16,24,.9)', width: '100%', color: 'white', padding: '10%', paddingTop: '5%'}}>{children}</Grid>
        if (window.location.pathname.includes('/product')) {
            let id = window.location.pathname.substring(15)
            Axios.post('/api/store/getContentful',
                { id: id})
                .then((res2) => {
                    if(this.state.contentful == null){
                    console.log(res2.data.data)
                    res2.data.data.items.forEach(
                        entry => {
                            if (entry.sys.contentType.sys.id == 'product') {
                                let options = {
                                    renderNode: {
                                        'embedded-asset-block': (node) => <img class="img-fluid" src={node.data.target.fields.file.url}/>,
                                        [BLOCKS.DOCUMENT]: (node, children) => <Document>{children}</Document>,
                                        [BLOCKS.HEADING_2]: (node, children) => <Text>{children}</Text>,
                                        [BLOCKS.HEADING_1]: (node, children) => <Text2>{children}</Text2>
                                    }
                                  }
                                const rawRichTextField2 = entry.fields.body;
                                let post = documentToReactComponents(rawRichTextField2, options)
                                this.setState({contentful: post})
                            }
                        })
                }})
            Axios.post('/api/store/getSpecificItem',
                { id: id })
                .then((res) => {

                    if (this.state.pulledProduct == null || this.state.pulledProduct.id != res.data.products.id) {
                        this.setState({ loadingPic: true })
                        Axios.post('/api/store/getSkus',
                            {
                                productId: res.data.products.id
                            })
                            .then(
                                (res2) => {

                                    res.data.products.skus = res2.data

                                    this.setState({ pulledProduct: res.data.products, loadingPic: false })

                                }
                            )
                    }
                })
        }

    }

    addToCart = (item) => {
        let data = this.state.cartItems
        if (data != '') {
            let found = false
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == item.id) {
                    data[i].amount++
                    found = true
                }

            }
            if (found == false) {
                item.amount = 1
                data.push(item)
            }
        }
        else {
            item.amount = 1
            data.push(item)
        }

        let price = item.products[0].price
        let priceStr = price.toString()
        priceStr = priceStr.slice(0, -2)
        price = parseInt(priceStr)
        localStorage.setItem('items', JSON.stringify(data))
        localStorage.setItem('cartTotal', this.state.totalCart + price)
        localStorage.setItem('fullTotal', this.state.fullprice + item.products[0].price)
        this.setState({
            cartItems: data,
            totalCart: this.state.totalCart + price,
            fullprice: this.state.fullprice + item.products[0].price
        })
    }

    removeFromCart = (item) => {
        let cartItems = this.state.cartItems
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id == item.id) {
                if (cartItems[i].amount == 1) {
                    cartItems = cartItems.filter(item2 => {
                        return item2.id !== item.id
                    })
                }
                else if (cartItems[i].amount > 1) {
                    cartItems[i].amount--
                }
                else {
                    alert('UknownNum')
                }

            }
        }
        let price = item.products[0].price
        let priceStr = price.toString()
        priceStr = priceStr.slice(0, -2)
        price = parseInt(priceStr)

        this.setState({
            cartItems: cartItems,
            totalCart: this.state.totalCart - price,
            fullprice: this.state.fullprice - item.products[0].price
        })
        localStorage.setItem('items', JSON.stringify(cartItems))
        localStorage.setItem('cartTotal', this.state.totalCart - price)
        localStorage.setItem('fullTotal', this.state.fullprice - item.products[0].price)


    }

    openCart = () => {
        this.state.cart == true ?
            this.setState({ cart: false })
            :
            this.setState({ cart: true })
    }





    render() {
        return (
            <Grid className='ShopMain' direction='column' justify='space-between' wrap='nowrap' style={{maxHeight: '100vh', overflowY: 'auto', overflowX: 'hidden'}} container>
                    <Grid item>
                        <Header openCart={this.openCart} getProducts={this.getProducts} removeItem={this.removeFromCart} checkout={this.checkout} state={this.state}/>
                    </Grid>
                    <Grid item>
                        <Route exact path='/store'
                            render={(props) => <ItemDisplay {...props} addToCart={this.addToCart} info={this.Info} state={this.state} />} />
                        <Route path='/store/product'
                            render={(props) => <ProductPage {...props} state={this.state} />} />
                        <Route path='/store/checkout'
                            render={(props) => <CheckoutPage {...props} state={this.state} />} />
                    </Grid>
            </Grid>
        )
    }
}

export default Store