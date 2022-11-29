import React, { useEffect } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

function SavedMovies(props) {
    useEffect(() => {
        props.setFilterSavedMovies([...props.savedMovies]);
        props.setSearch(null);
        props.setIsSavedCheckbox(false);
    }, []);

    return (
        <>
            <HeaderLogin
                activeLinkSavedMovies="active"
                onNavMenu={props.onNavMenu}
                isOpenNavMenu={props.isOpenNavMenu}
                onUpdateSavedMovies={props.updateSavedMovies}
                type="saved-movies"
            />
            <main className="saved-movies">
                <SearchForm
                    onGetMovies={props.onGetMovies}
                    setSearch={props.setSearch}
                    isSaved={true}
                    search={props.search}
                    onCheckBox={props.onCheckBox}
                    isCheckbox={props.isCheckbox}
                    errorSearch={props.errorSearch}
                    setIsSavedCheckbox={props.setIsSavedCheckbox}
                />
                <MoviesCardList
                    cursor="movies-card_cursor_pointer"
                    button="movies-card__button_delete"
                    isSaved={true}
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                    onMovieDelete={props.onMovieDelete}
                    errorGetMovies={props.errorGetMovies}
                    token={props.token}
                    onSignOut={props.onSignOut}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
