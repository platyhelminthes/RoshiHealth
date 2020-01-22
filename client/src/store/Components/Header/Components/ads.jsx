import React from 'react'
import { useState, useEffect } from 'react'


let adList = [
    {
      text: 'hello',
      backgroundUrl: 'orange'
    },
    {
      text: 'hello2',
      backgroundUrl: 'brown'
    },
    {
      text: 'hello3',
      backgroundUrl: 'yellow'
    },
    {
      text: 'hello4',
      backgroundUrl: 'teal'
    },
]





function Ads(){

    
    const [selector, selectorChange] = useState(0)
      useEffect(() => {
    
    if(selector == 3){
        setTimeout(()=>{selectorChange(0)}, 4000)
    }
    else {
      setTimeout(() => {
        selectorChange(selector => selector + 1);
      }, 4000);}
  }, [selector])
    return(
        <div className='addBanner'>
          <center style={{margin: 0, paddingTop: '10px', background: adList[selector].backgroundUrl, height: '100%', transition: '.5s'}}>{adList[selector].text}</center>
        </div>
    )
}

export default Ads