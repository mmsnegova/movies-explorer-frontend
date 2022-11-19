import React, { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isMoviesCardsView, setIsMoviesCardsView] = useState(false);

    const handleNavMenuClick = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };

    const handleMoreClick = () => {
        setIsMoviesCardsView(!isMoviesCardsView);
    };

    useEffect(() => {
        moviesApi
            .getMovies()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            });
        api.getSavedMovies()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            });
    });

    return (
        <div className="app">
            <div className="app__container">
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/movies">
                        <Movies
                            onNavMenu={handleNavMenuClick}
                            isOpenNavMenu={isNavMenuOpen}
                            onMoviesCard={handleMoreClick}
                            isViewMoviesCards={isMoviesCardsView}
                        />
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies
                            onNavMenu={handleNavMenuClick}
                            isOpenNavMenu={isNavMenuOpen}
                            onMoviesCard={handleMoreClick}
                            isViewMoviesCards={isMoviesCardsView}
                        />
                    </Route>
                    <Route path="/profile">
                        <Profile
                            onNavMenu={handleNavMenuClick}
                            isOpenNavMenu={isNavMenuOpen}
                        />
                    </Route>
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Register />
                    </Route>
                    <Route path="/*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
