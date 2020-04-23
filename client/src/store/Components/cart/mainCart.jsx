import React from 'react';
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import { Box, Grid, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function TemporaryDrawer(props) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = (side, props) => (
        <Grid
            role="presentation"
            
            onKeyDown={toggleDrawer(side, false)}
            style={{
                width: '20vw',
                height: '100%'
            }}
            container
            direction='column'
            justify='space-between'
            
        >
            {props.state.cartItems == '' ?
                (<h2>Cart Empty</h2>)
                :
                (<Grid style={{ padding: '5%', maxHeight: '92vh', overflow: 'auto' }}>
                    <Typography variant='h2'>
                        <Box borderBottom='1px solid gray' pb={5} fontStyle='italic' textAlign='center'>
                            Your Cart
                </Box>
                    </Typography>
                    {
                        props.state.cartItems.map(

                            (row) => (
                                <Box borderBottom='1px solid gray' pt={4} pb={4} width='100%' justifyContent='center' item>
                                    <Grid container>
                                        <Box>
                                            <img style={{ width: '100px' }} src={row.metadata.img} />
                                        </Box>
                                        <Grid style={{width: '70%'}} container>
                                            <Grid justify='space-between' container>
                                                <Typography variant='h6'>
                                                <Box fontWeight='bold'>{row.name}</Box>
                                                </Typography>
                                                <Box ><CloseIcon className='hoverEffect' onClick={()=>{props.removeItem(row)}}/></Box>
                                            </Grid>
                                            <Grid justify='space-between' container>
                                                <Typography variant='h7'>
                                                    <Box fontWeight='bold'>{
                                                        () => {
                                                            let price = row.products[0].price
                                                            let priceStr = price.toString()
                                                            priceStr = priceStr.slice(0, -2)
                                                            price = parseInt(priceStr)
                                                            return `$${price * row.amount}.00`
                                                        }
                                                    }
                                                    </Box>
                                                    </Typography>

                                                    <Box>X{row.amount}</Box>
                                            </Grid>
                                            <Typography>
                                            </Typography>
                                            {/* <Button variant='outlined' onClick={()=>{props.removeItem(row)}}>Remove {row.name}</Button> */}
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        )
                    }
                    <Box paddingTop={5} pb={3} width='100%' >
                        <Grid container justify='space-between'>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                Sub Total
                                </Box>
                            </Typography>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                     ${props.state.totalCart}.00
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid container justify='space-between'>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                Shipping
                                </Box>
                            </Typography>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                     -
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid container justify='space-between'>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                Tax
                                </Box>
                            </Typography>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                     -
                                </Box>
                            </Typography>
                        </Grid>
                    </Box>
                    <Box paddingTop={5} borderTop='1px solid gray' width='100%' >
                        <Grid container justify='space-between'>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                Total
                                </Box>
                            </Typography>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' item>
                                     ${props.state.totalCart}.00
                                </Box>
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                )
            }
            <Link to='/store/checkout'><Button style={{width: '100%', height: '8vh'}} variant='outlined'>Checkout</Button></Link>
        </Grid>
    );



    const [checkoutDisplay, handleCheckout] = useState(false)
    return (
        <Box>
            <Button style={{ height: '100%' }} onClick={toggleDrawer('right', true)}>Cart</Button>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right', props)}
            </Drawer>
        </Box>
    );

}




// return (
//     <div className={props.state.cart == true ? 'cartModal' : 'cartClosed'}>
//         { props.state.cartItems == '' ?
//         (<h2>Cart Empty</h2>)
//         :
//         (<div style={{padding: '5%'}}>
//             {
//                 props.state.cartItems.map(
//                     (row)=>(
//                         <div>
//                         <h2>{row.name}</h2>
//                     <h2>X{row.amount}</h2>
//                         <Button variant='outlined' onClick={()=>{props.removeItem(row)}}>Remove {row.name}</Button>
//                         </div>
//                     )
//                 )
//             }
//             <h2>total: ${props.state.totalCart}.00</h2>
//             {
//                 checkoutDisplay == true ? 
//                 (<h2>hello</h2>)
//                 :
//                 (null)
//             }
//             <Link to='/store/checkout'><Button variant='outlined'>Checkout</Button></Link>
//         </div>
//         )
// }
//     </div>
// )