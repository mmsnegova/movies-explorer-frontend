import React from 'react';
import AnimationLink from '../AnimationLink/AnimationLink';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__links">
                <li className="portfolio__cell">
                    <AnimationLink>
                        <a
                            href="https://github.com/mmsnegova/how-to-learn.git"
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio__link"
                        >
                            <p className="portfolio__subtitle">
                                Статичный сайт
                            </p>
                            <span>↗</span>
                        </a>
                    </AnimationLink>
                </li>
                <li className="portfolio__cell">
                    <AnimationLink>
                        <a
                            href="https://github.com/mmsnegova/russian-travel.git"
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio__link"
                        >
                            <p className="portfolio__subtitle">
                                Адаптивный сайт
                            </p>
                            <span>↗</span>
                        </a>
                    </AnimationLink>
                </li>
                <li className="portfolio__cell">
                    <AnimationLink>
                        <a
                            href="https://github.com/mmsnegova/react-mesto-api-full.git"
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio__link"
                        >
                            <p className="portfolio__subtitle">
                                Одностраничное приложение
                            </p>
                            <span>↗</span>
                        </a>
                    </AnimationLink>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
