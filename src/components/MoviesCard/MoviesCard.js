import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <div className="movies-card">
            <img
                className="movies-card__image"
                src={props.image}
                alt={props.name}
            />
            <div className={`movies-card__info-bloc ${props.cursor}`}>
                <h2 className="movies-card__name">{props.name}</h2>
                <button
                    className={`movies-card__button ${props.button}`}
                ></button>
                <p className="movies-card__duration">{props.duration}</p>
            </div>
        </div>
    );
}

export default MoviesCard;
