import MoviesCard from '../MoviesCard/MoviesCard';
import Error from '../Error/Error';
import './MoviesCardList.css';

function MoviesCardList(props) {
    const buttonMoreClassName = `movies-card-list__more ${
        props.isSaved || !props.isViewMore ? 'movies-card-list__more_none' : ''
    }`;

    const handleViewMoreMovie = () => {
        props.onQuantityClickButtonMore();
    };
    return (
        <>
            {props.errorGetMovies ? (
                <Error type={'movies'} error={props.errorGetMovies} />
            ) : (
                <section className="movies-card-list">
                    {!props.errorGetMovies && props.movies && (
                        <button
                            type="button"
                            className={buttonMoreClassName}
                            onClick={handleViewMoreMovie}
                        >
                            Ещё
                        </button>
                    )}

                    <ul
                        className={`movies-card-list__list ${
                            props.isViewMoviesCards
                                ? 'movies-card-list_opened'
                                : ''
                        }`}
                    >
                        {props.movies.map((movie, index) => {
                            return (
                                <li
                                    key={
                                        props.isSaved ? movie.movieId : movie.id
                                    }
                                    className={`movies-card-list__item ${
                                        index < props.quantityMoviesOnPage ||
                                        index <
                                            props.quantityMoviesOnPage +
                                                props.quantityMoreMovies *
                                                    props.quantityClickButtonMore ||
                                        props.isSaved
                                            ? 'movies-card-list__item_opened'
                                            : ''
                                    }`}
                                >
                                    <MoviesCard
                                        {...movie}
                                        movie={movie}
                                        button={props.button}
                                        cursor={props.cursor}
                                        isDisabled={props.isDisabled}
                                        savedMovies={props.savedMovies}
                                        onMovieLike={props.onMovieLike}
                                        onMovieDelete={props.onMovieDelete}
                                        isSaved={props.isSaved}
                                        token={props.token}
                                        onSignOut={props.onSignOut}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </section>
            )}
        </>
    );
}

export default MoviesCardList;
