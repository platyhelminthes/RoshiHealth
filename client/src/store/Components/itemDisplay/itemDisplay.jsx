import React from 'react'
import Card from './Card'
import SideBar from './sidebar'
import Footer from '../Footer'
import { Grid, Box } from '@material-ui/core'


function itemDisplay(props) {
    return (
        <Grid direction='column' className='ItemDisplay'>
            <Grid item>
                <Box>
                    <img src='https://scdn.onnit.com/images/store/hero/supplements.jpg?v=20180130:15:01:31' />
                </Box>
            </Grid>
            <Grid item >
                <Grid container>
                    <Box item>
                        <SideBar />
                    </Box>
                    <Box item style={{ width: '83%', paddingBottom: '3%' }}>
                        <Grid container>
                            {/* <SideBar/> */}
                            {
                                props.state.displayItems.map(

                                    (row) => (
                                        !row.products ?
                                            (<h1>loading...</h1>)
                                            :
                                            (<React.Fragment>
                                                <Card info={props.info} addToCart={props.addToCart} item={row} />
                                                <Card info={props.info} addToCart={props.addToCart} item={row} />
                                                <Card info={props.info} addToCart={props.addToCart} item={row} />
                                            </React.Fragment>

                                            )
                                    )
                                )
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    )
}

export default itemDisplay