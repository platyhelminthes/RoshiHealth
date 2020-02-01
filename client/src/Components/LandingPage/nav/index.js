import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'gatsby';
// import { window } from 'browser-monads';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../images/HP-Logomark.png';
import './nav.css';



const Nav = props => (
    <nav>
        <div className='nav__items'>
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <a className='nav__item--left' href='/'><img src={logo} alt='Traveler Pack Logo' className='nav__item--logo' /></a>
            {/* <Link className={window.location.href.indexOf('about') > 0 ? 'nav__item--link active' : 'nav__item--link'}
                to='/about'>Learn More</Link> */}
            <Link className='nav__item--link'
                to='/about'>Learn More</Link>
            {/* <Link className='nav__item--link'
                to='/news'>News</Link>
            <Link className='nav__item--link'
                to='/Store'>Store</Link> */}
            {/* <Link className={window.location.href.indexOf('news') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link'}
                to='/news'>News</Link> */}
        </div>
    </nav>
)

export default Nav