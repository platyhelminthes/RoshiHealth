import React from 'react'
import Part1 from './Components/Part1/part1'
import Part2 from './Components/Part2/part2'
import Part3 from './Components/part3/part3'
import Quote from './Components/midQuote'
import Part4 from './Components/Part4'
import Part5 from './Components/part5'
import Part6 from './Components/part6'
import {Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles ({
    root: {
        flexGrow: 1
    }
})

function RenderPhilosophyMain(){
    const style=useStyles()
    return(
        <Grid container direction='column' spacing={10} className={style.root}>
            <Part1 />
            <Part2 />
            <Part3 />
            <Quote />
            <Part4 />
            <Part5 />
            <Part6 />
        </Grid>
    )
}

export default RenderPhilosophyMain