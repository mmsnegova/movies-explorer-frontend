import React, { useEffect } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import useSerchMovies from '../../utils/serchMovies';

import './SavedMovies.css';

function SavedMovies(props) {
    const serchMovies = useSerchMovies(props.search, props.movies);
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
                />
                {props.isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        cursor="movies-card_cursor_pointer"
                        button="movies-card__button_delete"
                        isSaved={true}
                        movies={props.movies}
                        savedMovies={props.savedMovies}
                        onMovieDelete={props.onMovieDelete}
                        errorGetMovies={serchMovies.errorGetMovies}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
