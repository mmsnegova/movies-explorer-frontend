import React from 'react';
import { Link } from 'react-router-dom';
import AnimationLink from '../AnimationLink/AnimationLink';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './HeaderLogon.css';

function HeaderLogon() {
    return (
        <Header>
            <Navigation type="logon">
                <AnimationLink>
                    <Link
                        to="signup"
                        className="navigation__link navigation__link_text_small navigation__link_font-weight_semi-bold"
                    >
                        Регистрация
                    </Link>
                </AnimationLink>
                <AnimationLink>
                    <button className="navigation__button-green">
                        <Link
                            to="signin"
                            className="navigation__link navigation__link_text_small navigation__link_font-weight_semi-bold navigation__link_color_dark"
                        >
                            Войти
                        </Link>
                    </button>
                </AnimationLink>
            </Navigation>
        </Header>
    );
}
export default HeaderLogon;
