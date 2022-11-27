import React, { useEffect, useState } from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const [isDisabled, setIsDisabled] = useState(false);
    const isLiked = props.savedMovies.some((i) => i.movieId === props.movie.id);
    const moviesLikeButtonClassName = `movies-card__button ${
        !isLiked ? `movies-card__button_notlike` : `movies-card__button_like`
    } ${props.button}`;
    const baseUrl = 'https://api.nomoreparties.co/';
    const hour = Math.floor(props.duration / 60);
    const min = props.duration % 60;

    useEffect(() => {
        console.log(isDisabled);
    }, [isDisabled]);

    function handleCardLike() {
        if (localStorage.getItem('token') === props.token) {
            if (!isLiked && !props.isSaved) {
                setIsDisabled(true);
                props.onMovieLike(props.movie, isLiked).finally(() => {
                    setIsDisabled(false);
                });
            } else {
                const movie = props.savedMovies.find(
                    (movie) =>
                        movie.movieId === props.movie.id ||
                        movie.movieId === props.movie.movieId
                );
                setIsDisabled(true);
                props.onMovieDelete(movie).finally(() => {
                    setIsDisabled(false);
                });
            }
        } else props.onSignOut();
    }

    return (
        <div className="movies-card">
            <a
                href={props.trailerLink}
                target="_blank"
                rel="noreferrer"
                className="portfolio__link"
            >
                <img
                    className="movies-card__image movies-card_cursor_pointer"
                    src={
                        !props.isSaved
                            ? `${baseUrl}${props.image.url}`
                            : `${props.image}`
                    }
                    alt={props.nameRU}
                />
            </a>

            <div className={`movies-card__info-bloc ${props.cursor}`}>
                <h2 className="movies-card__name">{props.nameRU}</h2>
                <button
                    type="button"
                    className={moviesLikeButtonClassName}
                    onClick={handleCardLike}
                    disabled={isDisabled}
                ></button>
                <p className="movies-card__duration">{`${
                    hour > 0 ? `${hour}ч ` : ''
                } ${min > 0 ? `${min}мин` : ''}`}</p>
            </div>
        </div>
    );
}

export default MoviesCard;
