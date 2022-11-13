import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <fieldset className="search-form__fieldset">
                    <input
                        className="search-form__input"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Фильм"
                    />
                    <button className="search-form__submit" type="submit" />
                </fieldset>
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;
