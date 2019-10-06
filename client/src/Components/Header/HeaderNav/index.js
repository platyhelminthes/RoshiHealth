import React from 'react';
import DrawerToggleButton from '../HeaderSideDrawer/DrawerToggleButton';
import './headerNav.css';



const HeaderNav = props => (
    <div className='mobileNav'>
        <div className='nav__items'>
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </div>
    </div>
)

export default HeaderNav