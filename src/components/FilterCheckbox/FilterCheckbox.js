import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    function handleCheckbox() {
        props.onCheckBox();
    }

    return (
        <fieldset className="filter-checkbox">
            <input
                className="filter-checkbox__input"
                type="checkbox"
                name="short-film"
                id="short-film"
                defaultChecked={props.isCheckbox}
                onClick={handleCheckbox}
            />
            <label className="filter-checkbox__label" htmlFor="short-film">
                Короткометражки
            </label>
        </fieldset>
    );
}

export default FilterCheckbox;
