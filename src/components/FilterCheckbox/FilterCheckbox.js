import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    function handleCheckbox() {
        if (!props.isSaved) {
            localStorage.setItem(
                'isCheckbox',
                JSON.stringify(!props.isCheckbox)
            );
            props.setIsCheckbox(JSON.parse(localStorage.getItem('isCheckbox')));
        } else {
            props.setIsCheckbox(!props.isCheckbox);
        }
    }

    return (
        <fieldset className="filter-checkbox">
            {!props.isSaved ? (
                <input
                    className="filter-checkbox__input"
                    type="checkbox"
                    name="short-film"
                    id="short-film"
                    defaultChecked={!props.isCheckbox}
                    onClick={handleCheckbox}
                />
            ) : (
                <input
                    className="filter-checkbox__input"
                    type="checkbox"
                    name="short-film"
                    id="short-film"
                    onClick={handleCheckbox}
                />
            )}

            <label className="filter-checkbox__label" htmlFor="short-film">
                Короткометражки
            </label>
        </fieldset>
    );
}

export default FilterCheckbox;
