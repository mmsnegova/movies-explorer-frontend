import React from 'react';
import './Navigation.css';

function Navigation(props) {
    return (
        <nav
            className={`navigation navigation_type_${props.type} ${
                props.isOpenNavMenu ? 'navigation_opened ' : ''
            }`}
        >
            {props.children}
        </nav>
    );
}

export default Navigation;
