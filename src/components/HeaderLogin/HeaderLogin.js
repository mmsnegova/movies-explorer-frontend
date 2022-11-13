import React from 'react';
import { Link } from 'react-router-dom';
import AnimationLink from '../AnimationLink/AnimationLink';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './HeaderLogin.css';

function HeaderLogin(props) {
    return (
        <Header>
            <Navigation type="login">
                <div className="navigation__links">
                    <div className="navigation__links-left">
                        <AnimationLink>
                            <Link
                                to="/"
                                className="navigation__link navigation__link-main navigation__link_text_medium"
                            >
                                Главная
                            </Link>
                        </AnimationLink>
                        <AnimationLink>
                            <Link
                                to="movies"
                                className={`navigation__link navigation__link_text_medium ${props.activeLinkMovies}`}
                            >
                                Фильмы
                            </Link>
                        </AnimationLink>
                        <AnimationLink>
                            <Link
                                to="saved-movies"
                                className={`navigation__link navigation__link_text_medium ${props.activeLinkSavedMovies}`}
                            >
                                Сохранённые фильмы
                            </Link>
                        </AnimationLink>
                    </div>
                    <AnimationLink>
                        <button className="navigation__button-gray">
                            <Link
                                to="profile"
                                className="navigation__link navigation__link_text_large"
                            >
                                Аккаунт
                            </Link>
                        </button>
                    </AnimationLink>
                </div>
                <button className="navigation___button-close"></button>
            </Navigation>
            <BurgerMenu />
        </Header>
    );
}
export default HeaderLogin;
