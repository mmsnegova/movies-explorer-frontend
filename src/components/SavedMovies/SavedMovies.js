import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {
    return (
        <>
            <HeaderLogin activeLinkSavedMovies="navigation__link_active" />
            <main className="saved-movies">
                <SearchForm />
                <Preloader />
                <MoviesCardList
                    cursor="movies-card_cursor_pointer"
                    button="movies-card__button_delete"
                />
            </main>
        </>
    );
}

export default SavedMovies;
