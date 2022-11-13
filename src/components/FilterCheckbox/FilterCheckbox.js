import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <fieldset className="filter-checkbox">
            <input
                className="filter-checkbox__input"
                type="checkbox"
                name="short-film"
                id="short-film"
            />
            <label lassName="filter-checkbox__label" for="short-film">
                Короткометражки
            </label>
        </fieldset>
    );
}

export default FilterCheckbox;
