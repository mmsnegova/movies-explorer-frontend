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
                onUpdateSavedMovies={props.updateSavedMovies}
                isUpdate={true}
            />
            <main className="movies">
                <SearchForm
                    onGetMovies={props.onGetMovies}
                    setSearch={props.setSearch}
                    search={props.search}
                    setIsCheckbox={props.setIsCheckbox}
                    isCheckbox={props.isCheckbox}
                    setIsLoading={props.setIsLoading}
                    errorSearch={props.errorSearch}
                    сheckEmptySerch={props.сheckEmptySerch}
                />
                {props.isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        isViewMore={props.isViewMore}
                        winWidth={props.winWidth}
                        onMoviesCard={props.onMoviesCard}
                        quantityMoviesOnPage={props.quantityMoviesOnPage}
                        quantityMoreMovies={props.quantityMoreMovies}
                        quantityClickButtonMore={props.quantityClickButtonMore}
                        onQuantityClickButtonMore={
                            props.onQuantityClickButtonMore
                        }
                        movies={props.movies}
                        savedMovies={props.savedMovies}
                        isSaved={false}
                        onMovieLike={props.onMovieLike}
                        onMovieDelete={props.onMovieDelete}
                        search={props.search}
                        errorGetMovies={props.errorGetMovies}
                        token={props.token}
                        onSignOut={props.onSignOut}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}

export default Movies;
