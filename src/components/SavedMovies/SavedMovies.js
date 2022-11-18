import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

function SavedMovies(props) {
    return (
        <>
            <HeaderLogin
                activeLinkSavedMovies="active"
                onNavMenu={props.onNavMenu}
                isOpenNavMenu={props.isOpenNavMenu}
                type="saved-movies"
            />
            <main className="saved-movies">
                <SearchForm />
                <Preloader />
                <MoviesCardList
                    cursor="movies-card_cursor_pointer"
                    button="movies-card__button_delete"
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
