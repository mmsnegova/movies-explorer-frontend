import React from "react";
import { Link } from "react-router-dom";
import AnimationLink from '../AnimationLink/AnimationLink';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <AnimationLink>
                <Link to="signup" className="navigation__link navigation__link_light">
                    Регистрация
                </Link>
            </AnimationLink>
            <AnimationLink>
                <button className="navigation__button">
                    <Link to="signin" className="navigation__link navigation__link_dark">
                        Войти
                    </Link>
                </button>
            </AnimationLink>
        </nav>
    )
}

export default Navigation;