import React from 'react';
import SideBarMobile from '../../SideNav/mobileView/View/index';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
    <div className={drawerClasses}>
        <SideBarMobile />
    </div>
    );
};

export default sideDrawer;


