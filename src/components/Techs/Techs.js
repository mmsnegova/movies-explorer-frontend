import React from "react";
import "./Techs.css"
import SectionTitle from '../SectionTitle/SectionTitle';

function Techs() {
    return (
        <section id='techs' className='techs'>
            <SectionTitle
                darkTheme={`section__title_dark`}
            >
                Технологии
            </SectionTitle>
            <h2 className='techs__title'>7 технологий</h2>
            <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
                <li className='techs__cell'>
                    <div className='techs__text'>
                        HTML
                    </div>
                </li>
                <li className='techs__cell'>
                    <div className='techs__text'>
                        CSS
                    </div>
                </li>
                <li className='techs__cell'>
                    <div className='techs__text'>
                        JS
                    </div>
                </li>
                <li className='techs__cell'>
                    <div className='techs__text'>
                        React
                    </div>
                </li>
                <li className='techs__cell'>
                    <div className='techs__text'>
                        Git
                    </div>
                </li>
                <li className='techs__cell'>
                    <div className='techs__text'>
                        Express.js
                    </div>
                </li>
                <li className='techs__cell'>
                    <div className='techs__text'>
                        mongoDB
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Techs;