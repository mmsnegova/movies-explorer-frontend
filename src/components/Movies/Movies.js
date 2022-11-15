import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies(props) {
    return (
        <>
            <HeaderLogin
                activeLinkMovies="active"
                onNavMenu={props.onNavMenu}
                isOpenNavMenu={props.isOpenNavMenu}
                type="movies"
            />
            <main className="movies">
                <SearchForm />
                <Preloader />
                <MoviesCardList
                    onMoviesCard={props.onMoviesCard}
                    isViewMoviesCards={props.isViewMoviesCards}
                    button="movies-card__button_like"
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
