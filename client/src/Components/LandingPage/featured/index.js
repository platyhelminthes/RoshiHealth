import React from 'react'
import { Link } from 'react-router-dom'
// import { navigate } from 'gatsby'
import './featured.css'
// import bgImg from '../../images/headerImg.jpg'
import bgImg from '../images/general-footer-image.jpg'


export default () => (
             <div  className='header__section'>
               <div className='header__hero' style={{backgroundImage: `url(${bgImg})`}} ></div>
               <div className='header__content'>
                 <div className='header__info'>
                   <h1 className='header__title'>Roshi Health</h1>
                   <p className='header__shortDescription'>Im currently using this as my portfolio. Ive been continuously working on other projects and would love to set one up but i just cant find the time. Once upon a time this was a real startup but the unfortunate timing of the coronavirus has halted the progression of this business.</p>
                   <p className='header__shortDescription'>I am no longer working on this site. It wasnt finished and i dont plan on finishing this version. It was very close to being done but was made when i was still a newer programmer. Some things may not function anymore as they were using apis that are not being paid for nor being updated. Databases that are being repurposed for other projects im working on therefore the data will not come back properly. Currently there is only 1 account with some basic test data. Things that were working that im sad i can not showcase.</p>
                   <ul className='header__shortDescription'>
                     <li>Working Agora.io video chat</li>
                     <li>Handmade scheduling system between you and your selected doctors. (It would work but there just arent any doctor accounts)</li>
                     <li>Our store was also very close to being finished. Everything but the ability to finish checking out was done.</li>
                     <li>The UI uses old methods. I have learned MANY new ones.</li>
                     <li>Though not finished this is my largest project utilizing multiple apis, a full front and back end designed and created by me, it WAS hosted on azure but we no longer have the funds to pay for it (go to www.roshihealth.com to see azures wonderful 403 error page.) and though most of the work was done by me. I made sure to use good git practices so that it became second nature to me. </li>
                   </ul>
                   <button className='btn__med'><Link to='/about' className='btn__med'>Info</Link></button>
                   <button className='btn__med' style={{marginLeft: '25px'}}><Link to='/login/sign-in' className='btn__med'>Login/Signup</Link></button>
                 </div>
               </div>
             </div>
 )
