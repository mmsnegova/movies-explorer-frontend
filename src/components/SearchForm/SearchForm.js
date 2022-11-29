import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Error from '../Error/Error';
import './SearchForm.css';

function SearchForm(props) {
    function handleChangeSerch(evt) {
        props.setSearch(evt.target.value);
        if (!props.isSaved) {
            localStorage.setItem('search', evt.target.value);
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onGetMovies();
    }

    return (
        <section className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit}>
                <fieldset className="search-form__fieldset">
                    <input
                        className="search-form__input"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Фильм"
                        value={props.search || ''}
                        onChange={handleChangeSerch}
                    />
                    {!props.search && props.errorSearch && (
                        <Error type="search" error={props.errorSearch} />
                    )}
                    <button className="search-form__submit" type="submit" />
                </fieldset>
                <FilterCheckbox
                    isSaved={props.isSaved}
                    onCheckbox={props.onCheckbox}
                    setIsCheckbox={props.setIsCheckbox}
                    isCheckbox={props.isCheckbox}
                />
            </form>
        </section>
    );
}

export default SearchForm;
