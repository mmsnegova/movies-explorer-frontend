import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import AnimationLink from '../AnimationLink/AnimationLink';
import NavLink from '../NavLink/NavLink';

import './HeaderLogon.css';

function HeaderLogon() {
    return (
        <Header>
            <Navigation type="logon">
                <AnimationLink>
                    <NavLink
                        path="/signup"
                        name="signup"
                        size="small"
                        title="Регистрация"
                    />
                </AnimationLink>

                <button className="nav-logon__button-green">
                    <NavLink
                        path="/signin"
                        name="signin"
                        size="small"
                        title="Войти"
                        color="dark"
                    />
                </button>
            </Navigation>
        </Header>
    );
}
export default HeaderLogon;
