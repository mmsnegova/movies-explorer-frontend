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
function App() {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
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
    const [isSavedCheckbox, setIsSavedCheckbox] = useState(false);
    const [isViewMore, setIsViewMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [filterMovies, setFilterMovies] = useState(
        JSON.parse(localStorage.getItem('movies'))
    );
    const [errorSearch, setErrorSearch] = useState(null);
    const [errorGetMovies, setErrorGetMovies] = useState(null);
    const [errorGetSavedMovies, setErrorGetSavedMovies] = useState(null);
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
        if (localStorage.getItem('token') === token) {
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
                    setIsDisabled(false);
                });
        } else onSignOut();
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
            .then((res) => {
                onLogin({ password, email });
            })
            .catch(() => {
                handleRespons('Что-то пошло не так...');
                handleInfoTooltipResponse();
            })
            .finally(() => {
                setIsDisabled(false);
            });
    }

    function onLogin({ password, email }) {
        setIsDisabled(true);
        return auth
            .authorize(password, email)
            .then((res) => {
                setToken(res.token);
                setLoggedIn(true);
                setIsDisabled(false);
                setSearch(null);
                localStorage.setItem('isCheckbox', JSON.stringify(false));
                localStorage.setItem('movies', JSON.stringify([]));
                setIsCheckbox(false);
                setIsSavedCheckbox(false);
                setSearchSaved(null);
                setFilterMovies([]);
                setFilterSavedMovies([]);
                setSavedMovies([]);
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
        history.push('/');
    }

    function handleGetSavedMovies() {
        localStorage.getItem('token') === token
            ? api
                  .getSavedMovies(token)
                  .then((res) => {
                      setSavedMovies(res);
                  })
                  .catch(() => {
                      console.log('Что-то пошло не так! Попробуйте ещё раз.');
                  })
            : onSignOut();
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

    const handleFilterMoviesBeatFilm = (movies) => {
        localStorage.setItem(
            'movies',
            JSON.stringify(
                movies.filter((movie) =>
                    movie.nameRU.toLowerCase().includes(search.toLowerCase())
                )
            )
        );
        if (isCheckbox)
            filterShortMovies(JSON.parse(localStorage.getItem('movies')));
        else setFilterMovies(JSON.parse(localStorage.getItem('movies')));
    };

    useEffect(() => {
        if (token && filterMovies.length === 0 && search) {
            setErrorGetMovies('Ничего не найдено');
        } else {
            setErrorGetMovies('');
        }
    }, [filterMovies]);

    const getMoviesBeatFilm = () => {
        setIsLoading(true);
        moviesApi
            .getMovies()
            .then((res) => {
                setMovies(res);
                return res;
            })
            .then((movies) => {
                handleFilterMoviesBeatFilm(movies);
            })
            .catch(() => {
                setErrorGetMovies(
                    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (token) {
            if (isCheckbox) filterShortMovies(filterMovies);
            else setFilterMovies(JSON.parse(localStorage.getItem('movies')));
        }
    }, [isCheckbox]);

    const filterShortMovies = (movies) => {
        setFilterMovies(movies.filter((movie) => movie.duration <= 40));
    };

    const handleSearchMoviesBeatFilm = () => {
        setQuantityClickButtonMore(0);
        if (search) {
            if (!movies) {
                getMoviesBeatFilm();
            } else {
                handleFilterMoviesBeatFilm(movies);
            }
        } else {
            localStorage.setItem('movies', JSON.stringify([]));
            setFilterMovies(JSON.parse(localStorage.getItem('movies')));
            setErrorSearch('Нужно ввести ключевое слово');
        }
    };

    useEffect(() => {
        if (token) {
            if (
                !savedMovies.length === 0 ||
                (searchSaved && filterSavedMovies.length === 0)
            ) {
                setErrorGetSavedMovies('Ничего не найдено');
            } else {
                setErrorGetSavedMovies('');
            }
        }
    }, [filterSavedMovies]);

    useEffect(() => {
        if (token) {
            if (isSavedCheckbox) filterShortSavedMovies();
            else if (searchSaved) {
                setFilterSavedMovies(
                    savedMovies.filter((movie) =>
                        movie.nameRU
                            .toLowerCase()
                            .includes(searchSaved.toLowerCase())
                    )
                );
            } else {
                setFilterSavedMovies(savedMovies);
            }
        }
    }, [isSavedCheckbox]);

    const filterShortSavedMovies = () => {
        if (searchSaved) {
            setFilterSavedMovies(
                savedMovies.filter(
                    (movie) =>
                        movie.nameRU
                            .toLowerCase()
                            .includes(searchSaved.toLowerCase()) &&
                        movie.duration <= 40
                )
            );
        } else
            setFilterSavedMovies(
                savedMovies.filter((movie) => movie.duration <= 40)
            );
    };

    const handleFilterSavedMovis = () => {
        if (!isSavedCheckbox)
            setFilterSavedMovies(
                savedMovies.filter((movie) =>
                    movie.nameRU
                        .toLowerCase()
                        .includes(searchSaved.toLowerCase())
                )
            );
        else filterShortSavedMovies();
    };

    const handleSearchSavedMovis = () => {
        if (searchSaved) {
            handleFilterSavedMovis();
        } else {
            setFilterSavedMovies([]);
            setErrorSearch('Нужно ввести ключевое слово');
        }
    };

    useEffect(() => {
        if (loggedIn) {
            Promise.all([api.getSavedMovies(token), api.getUserInfo(token)])
                .then(([savedMovies, userData]) => {
                    setFilterSavedMovies(savedMovies);
                    setSavedMovies(savedMovies);
                    setCurrentUser(userData);
                })
                .catch(() => {
                    console.log('Что-то пошло не так! Попробуйте ещё раз.');
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
        if (loggedIn) history.push('/movies');
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
                        <ProtectedRoute
                            path="/movies"
                            loggedIn={loggedIn}
                            onNavMenu={handleNavMenuClick}
                            winWidth={winWidth}
                            isOpenNavMenu={isNavMenuOpen}
                            isCheckbox={isCheckbox}
                            setIsCheckbox={setIsCheckbox}
                            quantityMoviesOnPage={quantityMoviesOnPage}
                            quantityMoreMovies={quantityMoreMovies}
                            quantityClickButtonMore={quantityClickButtonMore}
                            onQuantityClickButtonMore={
                                addQuantityClickButtonMore
                            }
                            movies={filterMovies}
                            savedMovies={savedMovies}
                            onGetMovies={handleSearchMoviesBeatFilm}
                            onMovieLike={handleCreateMovie}
                            onMovieDelete={handleDeleteMovie}
                            setSearch={setSearch}
                            isLoading={isLoading}
                            search={search}
                            isViewMore={isViewMore}
                            errorSearch={errorSearch}
                            errorGetMovies={errorGetMovies}
                            token={token}
                            onSignOut={onSignOut}
                            component={Movies}
                        />
                        <ProtectedRoute
                            path="/saved-movies"
                            loggedIn={loggedIn}
                            onNavMenu={handleNavMenuClick}
                            isOpenNavMenu={isNavMenuOpen}
                            isCheckbox={isSavedCheckbox}
                            setIsCheckbox={setIsSavedCheckbox}
                            onGetMovies={handleSearchSavedMovis}
                            setFilterSavedMovies={setFilterSavedMovies}
                            movies={filterSavedMovies}
                            savedMovies={savedMovies}
                            onMovieDelete={handleDeleteMovie}
                            setSearch={setSearchSaved}
                            isLoading={isLoading}
                            search={searchSaved}
                            errorSearch={errorSearch}
                            errorGetMovies={errorGetSavedMovies}
                            token={token}
                            onSignOut={onSignOut}
                            component={SavedMovies}
                        />
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
                        <Route path="/*">
                            <PageNotFound />
                        </Route>
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
