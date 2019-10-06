import React from 'react';
import SideNav from '../../SideNav/mobile/index';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
    <div className={drawerClasses}>
        <SideNav />
    </div>
    );
};

export default sideDrawer;


