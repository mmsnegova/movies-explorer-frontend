import React from 'react';
import './BurgerMenu.css';

function BurgerMenu(props) {
    return (
        <div className="burger-menu" onClick={props.onNavMenu}>
            <span></span>
        </div>
    );
}

export default BurgerMenu;
