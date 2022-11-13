import React from 'react';
import NavLink from '../NavLink/NavLink';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Header from '../Header/Header';
import AnimationLink from '../AnimationLink/AnimationLink';
import './HeaderLogin.css';
import Navigation from '../Navigation/Navigation';

function HeaderLogin(props) {
    return (
        <Header>
            <Navigation type="login">
                <div className="nav-login__links">
                    <div className="nav-login__links-left">
                        <AnimationLink>
                            <NavLink
                                path="/"
                                name="main"
                                size="medium"
                                title="Главная"
                            />
                        </AnimationLink>
                        <AnimationLink>
                            <NavLink
                                path="/movies"
                                name="movies"
                                size="medium"
                                title="Фильмы"
                                active={props.activeLinkMovies}
                            />
                        </AnimationLink>
                        <AnimationLink>
                            <NavLink
                                path="/saved-movies"
                                name="saved-movies"
                                size="medium"
                                title="Сохранённые фильмы"
                                active={props.activeLinkSavedMovies}
                            />
                        </AnimationLink>
                    </div>
                    <button className="nav-login__button-gray">
                        <NavLink
                            path="/profile"
                            name="profile"
                            size="large"
                            title="Аккаунт"
                        />
                    </button>
                </div>
                <button className="nav-login___button-close"></button>
            </Navigation>
            <BurgerMenu />
        </Header>
    );
}
export default HeaderLogin;
