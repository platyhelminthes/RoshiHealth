import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'layout-side-drawer';
    if (props.show) {
        drawerClasses = 'layout-side-drawer open';
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;