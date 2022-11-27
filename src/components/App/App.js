import React, { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as auth from '../../utils/auth';
import useFormWithValidation from '../../utils/validation';
import MainPreloader from '../MainPreloader/MainPreloader';
function App() {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isMoviesCardsView, setIsMoviesCardsView] = useState(false);
    const [quantityMoviesOnPage, setQuantityMoviesOnPage] = useState(2);
    const [quantityMoreMovies, setQuantityMoreMovies] = useState(2);
    const [quantityClickButtonMore, setQuantityClickButtonMore] = useState(0);
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    const [search, setSearch] = useState(localStorage.getItem('search'));
    const [searchSaved, setSearchSaved] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isCheckbox, setIsCheckbox] = useState(
        JSON.parse(localStorage.getItem('isCheckbox'))
    );
    const [isSavedCheckbox, setIsSavedCheckbox] = useState(true);
    const [isViewMore, setIsViewMore] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filterMovies, setFilterMovies] = useState(
        JSON.parse(localStorage.getItem('movies'))
    );
    const [errorSearch, setErrorSearch] = useState('');
    const [errorGetMovies, setErrorGetMovies] = useState('');
    const [savedMovies, setSavedMovies] = useState([]);
    const [filterSavedMovies, setFilterSavedMovies] = useState([]);
    const baseUrl = 'https://api.nomoreparties.co';
    const [isInfoTooltipnOpen, setInfoTooltipOpen] = useState(false);
    const [infoRespose, setInfoRespose] = useState(null);

    const detectSize = () => {
        setTimeout(() => {
            setWinWidth(window.innerWidth);
        }, 100);
    };

    const addPreloader = () => {
        setIsLoading(true);
    };

    const closePreloader = () => {
        setIsLoading(false);
    };

    const handleInfoTooltipResponse = () => {
        setInfoTooltipOpen(true);
    };

    const closeInfoTooltipResponse = () => {
        setInfoTooltipOpen(false);
    };

    const handleViewMoviesCards = () => {
        if (winWidth >= 1280) {
            setQuantityMoviesOnPage(12);
            setQuantityMoreMovies(3);
        } else {
            if (winWidth >= 480) {
                setQuantityMoviesOnPage(8);
                setQuantityMoreMovies(2);
            } else {
                setQuantityMoviesOnPage(2);
                setQuantityMoreMovies(2);
            }
        }
    };

    const addQuantityClickButtonMore = () => {
        setQuantityClickButtonMore(quantityClickButtonMore + 1);
    };

    useEffect(() => {
        handleViewMoviesCards();
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        };
    }, [winWidth]);

    const handleNavMenuClick = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };

    const handleCheckBox = () => {
        localStorage.setItem('isCheckbox', JSON.stringify(!isCheckbox));
        setIsCheckbox(JSON.parse(localStorage.getItem('isCheckbox')));
    };

    const handleSavedCheckBox = () => {
        setIsSavedCheckbox(!isSavedCheckbox);
        console.log(isSavedCheckbox);
    };

    const handleCheckViewMore = () => {
        if (filterMovies) {
            if (
                filterMovies.length !== 0 &&
                filterMovies.length >
                    document.getElementsByClassName(
                        'movies-card-list__item_opened'
                    ).length
            ) {
                setIsViewMore(true);
            } else {
                setIsViewMore(false);
            }
        }
    };

    function handleUpdateUser({ email, name }) {
        setIsDisabled(true);
        api.setUserInfo({ email, name }, token)
            .then((res) => {
                setCurrentUser(res);
                handleRespons('Данные успешно обновлены!');
            })
            .catch(() => {
                handleRespons('При обновлении профиля произошла ошибка.');
            })
            .finally(() => {
                handleInfoTooltipResponse();
            });

        setIsDisabled(false);
    }

    function handleRespons(message) {
        setInfoRespose({
            message,
        });
    }

    function onRegister({ password, email, name }) {
        setIsDisabled(true);
        return auth
            .register(password, email, name)
            .then(() => {
                handleRespons('Вы успешно зарегистрировались!');
                history.push('/signin');
            })
            .catch(() => {
                handleRespons('Что-то пошло не так...');
            })
            .finally(() => {
                setIsDisabled(false);
                handleInfoTooltipResponse();
            });
    }

    function onLogin({ password, email }) {
        setIsDisabled(true);
        localStorage.setItem('isCheckbox', JSON.stringify(true));
        localStorage.setItem('movies', JSON.stringify([]));
        return auth
            .authorize(password, email)
            .then((res) => {
                setToken(res.token);
                setLoggedIn(true);
                setIsDisabled(false);
                history.push('/movies');
            })
            .catch(() => {
                handleRespons('Что-то пошло не так...');

                handleInfoTooltipResponse();
            })
            .finally(() => {
                setIsDisabled(false);
            });
    }

    function onSignOut() {
        localStorage.removeItem('token');
        setToken(null);
        setLoggedIn(false);
        localStorage.removeItem('search');
        localStorage.removeItem('isCheckbox');
        localStorage.removeItem('movies');
        console.log(isCheckbox);
        history.push('/');
    }

    function handleGetSavedMovies() {
        api.getSavedMovies(token)
            .then((res) => {
                console.log('обновление');
                setSavedMovies(res);
            })
            .catch(() => {
                console.log('Что-то пошло не так! Попробуйте ещё раз.');
            });
    }

    function handleCreateMovie(movie) {
        return api
            .createMovie(
                movie,
                `${baseUrl}${movie.image.url}`,
                `${baseUrl}${movie.image.formats.thumbnail.url}`,
                movie.id,
                token
            )
            .then((res) => {
                console.log(res);
                setFilterSavedMovies([...filterSavedMovies, res]);
                handleGetSavedMovies();
            })
            .catch(() => {
                console.log('Что-то пошло не так! Попробуйте ещё раз.');
            });
    }

    function handleDeleteMovie(movie) {
        setFilterSavedMovies(
            filterSavedMovies.filter((savedMovie) => {
                return savedMovie._id !== movie._id;
            })
        );
        return api
            .deleteMovie(movie._id, token)
            .then(() => {
                handleGetSavedMovies();
            })
            .catch(() => {
                console.log('Что-то пошло не так! Попробуйте ещё раз.');
            });
    }

    const handleLoadingMovies = () => {
        addPreloader();
        setTimeout(() => {
            handleSearchMovies();
            closePreloader();
        }, 1500);
    };

    const handleLoadingSavedMovies = () => {
        addPreloader();
        setTimeout(() => {
            handleSerchSavedMovis();
            closePreloader();
        }, 1500);
    };

    const handleSearchMovies = () => {
        setIsMoviesCardsView(false);
        setQuantityClickButtonMore(0);
        if (search !== '') {
            if (isCheckbox) {
                localStorage.setItem(
                    'movies',
                    JSON.stringify(
                        movies.filter(
                            (movie) =>
                                movie.nameRU
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) &&
                                movie.duration <= 40
                        )
                    )
                );
            } else {
                localStorage.setItem(
                    'movies',
                    JSON.stringify(
                        movies.filter((movie) =>
                            movie.nameRU
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                    )
                );
            }
            setFilterMovies(JSON.parse(localStorage.getItem('movies')));
        } else {
            localStorage.setItem('movies', JSON.stringify([]));
            setFilterMovies(JSON.parse(localStorage.getItem('movies')));
            setErrorSearch('Нужно ввести ключевое слово');
        }
    };

    function handleSerchSavedMovis() {
        console.log(searchSaved !== '');
        if (searchSaved !== '') {
            if (isSavedCheckbox) {
                setFilterSavedMovies(
                    savedMovies.filter(
                        (movie) =>
                            movie.nameRU
                                .toLowerCase()
                                .includes(searchSaved.toLowerCase()) &&
                            movie.duration <= 40
                    )
                );
            } else {
                setFilterSavedMovies(
                    savedMovies.filter((movie) =>
                        movie.nameRU
                            .toLowerCase()
                            .includes(searchSaved.toLowerCase())
                    )
                );
            }
        } else {
            setFilterSavedMovies([]);
            setErrorSearch('Нужно ввести ключевое слово');
        }
    }

    useEffect(() => {
        if (loggedIn) {
            history.push('/movies');
            Promise.all([api.getSavedMovies(token), moviesApi.getMovies()])
                .then(([savedMovies, movies]) => {
                    setFilterSavedMovies(savedMovies);
                    setSavedMovies(savedMovies);
                    setMovies(movies);
                    setErrorGetMovies('');
                    console.log(savedMovies);
                })
                .catch(() => {
                    setErrorGetMovies(
                        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                    );
                })
                .finally(() => {
                    history.push('/movies');
                });
        }
    }, [loggedIn]);

    useEffect(() => {
        if (token) {
            auth.getContent(token).then((res) => {
                if (res) {
                    setLoggedIn(true);
                    setCurrentUser({
                        name: res.name,
                        email: res.email,
                    });
                }
            });
        }
    }, [loggedIn]);

    useEffect(() => {
        if (loggedIn) handleCheckViewMore();
    });

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <div className="app__container">
                    <Switch>
                        <Route exact path="/">
                            <Main
                                loggedIn={loggedIn}
                                onNavMenu={handleNavMenuClick}
                                isOpenNavMenu={isNavMenuOpen}
                            />
                        </Route>
                        <Route path="/signin">
                            <Login
                                onLogin={onLogin}
                                onRespons={handleRespons}
                                formSelector="login"
                                isDisabled={isDisabled}
                            />
                        </Route>
                        <Route path="/signup">
                            <Register
                                onRegister={onRegister}
                                onRespons={handleRespons}
                                formSelector="register"
                                isDisabled={isDisabled}
                            />
                        </Route>
                        {loggedIn ? (
                            <ProtectedRoute
                                path="/movies"
                                loggedIn={loggedIn}
                                onNavMenu={handleNavMenuClick}
                                winWidth={winWidth}
                                isOpenNavMenu={isNavMenuOpen}
                                onCheckBox={handleCheckBox}
                                isCheckbox={isCheckbox}
                                quantityMoviesOnPage={quantityMoviesOnPage}
                                quantityMoreMovies={quantityMoreMovies}
                                quantityClickButtonMore={
                                    quantityClickButtonMore
                                }
                                onQuantityClickButtonMore={
                                    addQuantityClickButtonMore
                                }
                                movies={filterMovies}
                                savedMovies={savedMovies}
                                /* movies={movies} */
                                onGetMovies={handleLoadingMovies}
                                onMovieLike={handleCreateMovie}
                                onMovieDelete={handleDeleteMovie}
                                setSearch={setSearch}
                                isLoading={isLoading}
                                search={search}
                                isViewMore={isViewMore}
                                errorSearch={errorSearch}
                                errorGetMovies={errorGetMovies}
                                component={Movies}
                            />
                        ) : (
                            <MainPreloader />
                        )}
                        {loggedIn ? (
                            <ProtectedRoute
                                path="/saved-movies"
                                loggedIn={loggedIn}
                                onNavMenu={handleNavMenuClick}
                                isOpenNavMenu={isNavMenuOpen}
                                onCheckBox={handleSavedCheckBox}
                                isCheckbox={isSavedCheckbox}
                                onGetMovies={handleLoadingSavedMovies}
                                movies={filterSavedMovies}
                                savedMovies={savedMovies}
                                onMovieDelete={handleDeleteMovie}
                                setSearch={setSearchSaved}
                                isLoading={isLoading}
                                search={searchSaved}
                                errorSearch={errorSearch}
                                errorGetMovies={errorGetMovies}
                                component={SavedMovies}
                            />
                        ) : (
                            <MainPreloader />
                        )}
                        {loggedIn ? (
                            <ProtectedRoute
                                path="/profile"
                                loggedIn={loggedIn}
                                onNavMenu={handleNavMenuClick}
                                isOpenNavMenu={isNavMenuOpen}
                                onUpdateUser={handleUpdateUser}
                                onSignOut={onSignOut}
                                name={currentUser.name}
                                email={currentUser.email}
                                formSelector="profile"
                                isDisabled={isDisabled}
                                component={Profile}
                            />
                        ) : (
                            <MainPreloader />
                        )}
                        {loggedIn ? (
                            <ProtectedRoute
                                path="/*"
                                loggedIn={loggedIn}
                                component={PageNotFound}
                            />
                        ) : (
                            <MainPreloader />
                        )}
                    </Switch>
                </div>
                <InfoTooltip
                    {...infoRespose}
                    isOpen={isInfoTooltipnOpen}
                    onClose={closeInfoTooltipResponse}
                />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
