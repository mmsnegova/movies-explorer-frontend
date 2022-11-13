import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className={`header header_${props.type}`}>
            <div className={`header__logo header__logo_${props.type}`}></div>
            {props.children}
        </header>
    );
}
export default Header;
