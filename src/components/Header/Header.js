import React from 'react';
import './Header.css';
import AnimationLink from '../AnimationLink/AnimationLink';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={`header header_${props.type}`}>
            <AnimationLink>
                <Link to="/">
                    <div
                        className={`header__logo header__logo_${props.type}`}
                    ></div>
                </Link>
            </AnimationLink>
            {props.children}
        </header>
    );
}
export default Header;
