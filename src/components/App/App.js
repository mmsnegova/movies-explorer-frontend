import React from 'react';
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
    return (
        <div className="app">
            <div className="app__container">
                <Switch>
                    <Route exact path="/">
                        {/* О проекте */}
                        <Main />
                    </Route>
                    <Route path="/movies">
                        {/* Фильмы */}
                        <Movies />
                    </Route>
                    <Route path="/saved-movies">
                        {/* Сохранённые фильмы */}
                        <SavedMovies />
                    </Route>
                    <Route path="/profile">
                        {/* Аккаунт */}
                        <Profile />
                    </Route>
                    <Route path="/signin">
                        {/* Авторизация */}
                        <Login />
                    </Route>
                    <Route path="/signup">
                        {/* Регистрация */}
                        <Register />
                    </Route>
                    <Route path="/*">
                        {/* Регистрация */}
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
