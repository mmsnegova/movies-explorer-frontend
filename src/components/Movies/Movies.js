import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {
    return (
        <>
            <HeaderLogin activeLinkMovies="active" />
            <main className="movies">
                <SearchForm />
                <Preloader />
                <MoviesCardList button="movies-card__button_like" />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
