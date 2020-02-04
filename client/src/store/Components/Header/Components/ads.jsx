import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Typography, Box, Fade, Slide } from '@material-ui/core'


let adList = [
    {
      text: 'Join Roshi Rewards',
      backgroundUrl: 'black'
    },
    {
      text: 'Coming Soon Roshi Health Plans',
      backgroundUrl: 'black'
    },
    {
      text: 'Keep in touch with roshi at RoshiHealth@gmail.com',
      backgroundUrl: 'black'
    },
    {
      text: 'Exciting News Coming Soon',
      backgroundUrl: 'black'
    },
]





function Ads(){

    const [elementIn, changeElement] = useState(true)
    const [selector, selectorChange] = useState(0)
      useEffect(() => {
    
    if(selector == 3){
        setTimeout(()=>{
          changeElement(false)
        setTimeout(()=>{
          changeElement(true)
        }, 100)
          selectorChange(0)}, 4000)
    }
    else {
      setTimeout(() => {
        changeElement(false)
        setTimeout(()=>{
          changeElement(true)
        }, 100)
        selectorChange(selector => selector + 1);
      }, 4000);}
  }, [selector, changeElement])
    return(
        <Grid container justify='space-between'  className='addBanner'>
          <Typography variant='h6'>
            <Box color='white' pt={1} pl={12}>
            Roshi Health
            </Box>
          </Typography>
          <Box width='40%' style={{borderRight: '2px solid gray', borderLeft: '2px solid gray', textAlign: 'center'}}>
          <Typography>
            <Slide
              in={elementIn}
              timeout={100}
              direction='down'
            >
              <div style={{paddingTop: '10px', color: 'white'}}>
            
                  {adList[selector].text}

              
              </div>
            </Slide>
            </Typography>
            </Box>
          <Typography variant='h6'>
            <Box color='white' pt={1} pr={12}>
            Welcome
            </Box>
          </Typography>
        </Grid>
    )
}

export default Ads