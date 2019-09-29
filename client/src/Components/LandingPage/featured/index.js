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
                   <p className='header__subtitle'>The Future of Healthcare</p>
                   <p className='header__shortDescription'>Functional Doctors • Integrative Health Team • Sophisticated Technology • Weekly Accountibility • Real Prevention • Low Monthly Cost</p>
                   <button className='btn__med'><Link to='/members' className='btn__med'>Members</Link></button>
                 </div>
               </div>
             </div>
 )
