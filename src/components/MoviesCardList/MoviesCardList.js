import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import _33_words_about_design from '../../images/_33_words_about_design.jpg';
import _100_years_of_design from '../../images/_100_years_of_design.jpg';
import banksy_most_wanted from '../../images/banksy_most_wanted.jpg';
import boom_for_real from '../../images/boom_for_real.jpg';
import free_to_run from '../../images/free_to_run.jpg';
import the_booksellers from '../../images/the_booksellers.jpg';
import if_i_think_of_germany_at_night from '../../images/if_i_think_of_germany_at_night.jpg';
import gimme_danger from '../../images/gimme_danger.jpg';
import janis from '../../images/janis.jpg';
import minding_the_gap from '../../images/minding_the_gap.jpg';
import a_dog_called_money from '../../images/a_dog_called_money.jpg';
import making_waves from '../../images/making_waves.jpg';
import rudeboy from '../../images/rudeboy.jpg';
import skate_kitchen from '../../images/skate_kitchen.jpg';
import war_of_art from '../../images/war_of_art.jpg';
import the_zone from '../../images/the_zone.jpg';

import './MoviesCardList.css';

function MoviesCardList(props) {
    return (
        <section className="movies-card-list">
            <button className="movies-card-list__more">Ещё</button>
            <ul className="movies-card-list__list">
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={_33_words_about_design}
                        name="33 слова о дизайне"
                        duration="1ч 42м"
                        button={props.button}
                        cursor={props.cursor}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={_100_years_of_design}
                        name="Киноальманах «100 лет дизайна»"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={banksy_most_wanted}
                        name="В погоне за Бенкси"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={boom_for_real}
                        name="Баския: Взрыв реальности"
                        duration="1ч 42м"
                        button={props.button}
                        cursor={props.cursor}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={free_to_run}
                        name="Бег это свобода"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={the_booksellers}
                        name="Книготорговцы"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={if_i_think_of_germany_at_night}
                        name="Когда я думаю о Германии ночью"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={gimme_danger}
                        name="Gimme Danger: История Игги и The Stooges"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={janis}
                        name="Дженис: Маленькая девочка грустит"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={minding_the_gap}
                        name="Соберись перед прыжком"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={a_dog_called_money}
                        name="Пи Джей Харви: A dog called money"
                        duration="1ч42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={making_waves}
                        name="По волнам: Искусство звука в кино"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={rudeboy}
                        name="Рудбой"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={skate_kitchen}
                        name="Скейт — кухня"
                        cursor={props.cursor}
                        button={props.button}
                        duration="1ч 42м"
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={war_of_art}
                        name="Война искусств"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
                <li className="movies-card-list__item">
                    <MoviesCard
                        image={the_zone}
                        name="Зона"
                        duration="1ч 42м"
                        cursor={props.cursor}
                        button={props.button}
                    />
                </li>
            </ul>
        </section>
    );
}

export default MoviesCardList;
