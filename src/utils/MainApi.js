class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
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

    /* getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((res) => this._handleResponse(res));
    } */

    setUserInfo({ name, email }, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        }).then((res) => this._handleResponse(res));
    }

    getSavedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((res) => this._handleResponse(res));
    }

    createMovie(
        {
            country,
            director,
            duration,
            year,
            description,
            trailerLink,
            nameRU,
            nameEN,
        },
        image,
        thumbnail,
        movieId,
        token
    ) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail,
                movieId,
            }),
        }).then((res) => this._handleResponse(res));
    }

    deleteMovie(id, token) {
        return fetch(`${this._baseUrl}/movies/${id} `, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((res) => this._handleResponse(res));
    }
}

const api = new Api({
    baseUrl: 'https://api.movies-explr.msnegova.nomoredomains.icu',
});
export default api;
