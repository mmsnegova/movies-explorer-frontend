import React from 'react';
import { Link } from 'react-router-dom';
import AnimationLink from '../AnimationLink/AnimationLink';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <main className="page-not-found">
            <div>
                <h1 className="page-not-found__title">404</h1>
                <p className="page-not-found__subtitle">Страница не найдена</p>
            </div>
            <AnimationLink>
                <Link to="/" className="page-not-found__link">
                    Назад
                </Link>
            </AnimationLink>
        </main>
    );
}

export default PageNotFound;
