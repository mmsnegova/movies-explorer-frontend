class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    handleError(err) {
        console.log(err);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    setUserInfo({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, email }),
        }).then((res) => this._handleResponse(res));
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    createMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
    }) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailer,
                nameRU,
                nameEN,
                thumbnail,
                movieId,
            }),
        }).then((res) => this._handleResponse(res));
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id} `, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }
}

const api = new Api({
    baseUrl: 'https://api.movies-explr.msnegova.nomoredomains.icu',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default api;
