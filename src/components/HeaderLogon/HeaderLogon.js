import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import AnimationLink from '../AnimationLink/AnimationLink';
import NavLink from '../NavLink/NavLink';

import './HeaderLogon.css';

function HeaderLogon(props) {
    return (
        <Header type={props.type}>
            <Navigation type="logon">
                <AnimationLink>
                    <NavLink
                        path="/signup"
                        name="signup"
                        size="small"
                        title="Регистрация"
                    />
                </AnimationLink>
                <NavLink
                    path="/signin"
                    name="signin"
                    size="small"
                    title="Войти"
                    color="dark"
                />
            </Navigation>
        </Header>
    );
}
export default HeaderLogon;
