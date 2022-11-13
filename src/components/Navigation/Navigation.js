import React from 'react';
import './Navigation.css';

function Navigation(props) {
    return (
        <nav className={`navigation navigation_type_${props.type}`}>
            {props.children}
        </nav>
    );
}

export default Navigation;
