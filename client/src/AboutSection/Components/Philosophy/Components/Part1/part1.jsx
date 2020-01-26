import React from 'react'
import pic from '../../../../images/Elements.png'

function Part1(){
    return(
        <div className='philoPart1'>
            <div>
                <img style={{height: '75%', borderRadius: '15px'}} src={pic}/>
                <h2>In addition to becoming a Roshi for our members, our entire model is built around the powerful philosophy of self governance taught in "The Book of Five Rings" written by Miyamoto Musashi, one of the most influential samurai to have ever existed.</h2>
                <h2>In his writings, Musashi applies the way of the warrior to business and art, showcasing how the diverse applications of his strategies could stretch to any profession or endeavour.</h2>
            </div>
            <div>
                <h2>A "Roshi" is the spiritual leader to a community of zen practitioners. Zen is a spiritual practice but more importantly, it is a philosophy that governs a way of life for millions of people across the world.</h2>
                <h2>Roshi Health has a unique philosophy that marries the best of a western medicine methodologies with an eastern discipline to teach a preventative healthcare approach personalized to fit each members lifestyle </h2>
                <h2>Therefore, by teaching our members true, long-lasting health strategies custom tailored to their lifestyle, Roshi Health compliments our members health goals, not just supplement. Read more about our approach</h2>
                <h1>"One thousand days of lessons for discipline; ten thousand days of lessons for mastery." <br/> Miyamoto Musashi </h1>
            </div>
        </div>
    )
}

export default Part1