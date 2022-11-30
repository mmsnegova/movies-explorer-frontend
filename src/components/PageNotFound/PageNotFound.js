import React from 'react';
import { useHistory } from 'react-router-dom';
import AnimationLink from '../AnimationLink/AnimationLink';
import './PageNotFound.css';

function PageNotFound() {
    const history = useHistory();
    const hadkeOnClick = () => {
        history.goBack();
    };
    return (
        <main className="page-not-found">
            <div>
                <h1 className="page-not-found__title">404</h1>
                <p className="page-not-found__subtitle">Страница не найдена</p>
            </div>
            <AnimationLink>
                <button
                    type="reset"
                    className="page-not-found__link"
                    onClick={hadkeOnClick}
                >
                    Назад
                </button>
            </AnimationLink>
        </main>
    );
}

export default PageNotFound;
