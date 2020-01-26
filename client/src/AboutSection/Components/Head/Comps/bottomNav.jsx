import React from 'react';
import { Link } from 'react-router-dom';

function RenderBottomNav(){
    return(
        <div className='bottomNavMain'>
            <Link className='bottomNavLinks' to='/about/Philosophy'>Philosophy</Link>
            <Link className='bottomNavLinks' to='/about/OurProgram'>Our Program</Link>
            <Link className='bottomNavLinks' to='/about/HowItWorks'>How It Works</Link>
            <Link className='bottomNavLinks' to='/about/Features'>Features</Link>
            <Link className='bottomNavLinks' to='/about/GetStarted'>Get Started</Link>
        </div>
    )
}

export default RenderBottomNav