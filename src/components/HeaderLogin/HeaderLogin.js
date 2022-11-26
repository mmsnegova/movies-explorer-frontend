import React from 'react';
import NavLink from '../NavLink/NavLink';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Header from '../Header/Header';
import AnimationLink from '../AnimationLink/AnimationLink';
import './HeaderLogin.css';
import Navigation from '../Navigation/Navigation';

function HeaderLogin(props) {
    return (
        <Header type={props.type}>
            <Navigation type="login" isOpenNavMenu={props.isOpenNavMenu}>
                <div className="nav-login__links">
                    <div className="nav-login__links-left">
                        <AnimationLink>
                            <NavLink
                                path="/"
                                name="main"
                                size="medium"
                                title="Главная"
                                active={props.activeLinkMain}
                                onNavMenu={props.onNavMenu}
                            />
                        </AnimationLink>
                        <AnimationLink>
                            <NavLink
                                path="/movies"
                                name="movies"
                                size="medium"
                                title="Фильмы"
                                active={props.activeLinkMovies}
                                onNavMenu={props.onNavMenu}
                            />
                        </AnimationLink>
                        <AnimationLink>
                            <NavLink
                                path="/saved-movies"
                                name="saved-movies"
                                size="medium"
                                title="Сохранённые фильмы"
                                active={props.activeLinkSavedMovies}
                                onNavMenu={props.onNavMenu}
                            />
                        </AnimationLink>
                    </div>
                    <NavLink
                        path="/profile"
                        name="profile"
                        size="large"
                        title="Аккаунт"
                        onNavMenu={props.onNavMenu}
                    />
                </div>
                <button
                    className="nav-login___button-close"
                    onClick={props.onNavMenu}
                ></button>
            </Navigation>
            <BurgerMenu onNavMenu={props.onNavMenu} />
        </Header>
    );
}
export default HeaderLogin;
