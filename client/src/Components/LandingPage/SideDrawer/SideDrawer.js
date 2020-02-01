import React from 'react';

import './SideDrawer.css';
import { Link } from '@material-ui/core';

const sideDrawer = props => {
    let drawerClasses = 'layout-side-drawer';
    if (props.show) {
        drawerClasses = 'layout-side-drawer open';
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            {/* <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li> */}
            <Link to='/about'>Learn More</Link>
        </ul>
    </nav>
    );
};

export default sideDrawer;