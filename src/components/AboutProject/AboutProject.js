import React from "react";
import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
    return (
        <section id='about-project' className='about-project'>
            <SectionTitle>О проекте</SectionTitle>
            <ul className='about-project__table'>
                <li className='about-project__cell'>
                    <h3 className='about-project__subtitle'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='about-project__description'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className='about-project__cell'>
                    <h3 className='about-project__subtitle'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='about-project__description'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.                    </p>
                </li>
            </ul>
            <ul className='about-project__progress'>
                <li className='about-project__back'>
                    <div className='about-project__bar-back'>
                        1 неделя
                    </div>
                    <span>Back-end</span>
                </li>
                <li className='about-project__front'>
                    <div className='about-project__bar-front'>
                        4 недели
                    </div>
                    <span>Front-end</span>
                </li>
            </ul>
        </section>
    )
}

export default AboutProject;