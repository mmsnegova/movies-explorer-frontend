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
                defaultChecked
            />
            <label className="filter-checkbox__label" htmlFor="short-film">
                Короткометражки
            </label>
        </fieldset>
    );
}

export default FilterCheckbox;
