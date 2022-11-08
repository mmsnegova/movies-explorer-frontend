import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle"
import AnimationLink from '../AnimationLink/AnimationLink';
import mmsnegova from "../../images/mmsnegova.jpg";
import "./AboutMe.css"

function AboutMe() {
    return (
        <section id='about-me' className='about-me'>
            <SectionTitle>Студент</SectionTitle>
            <article className='about-me__bloc'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>Мария</h3>
                    <p className='about-me__job'>Студент Веб-факультета, 26 лет</p>
                    <p className='about-me__description'>
                        Я живу в Череповеце, закончила Бизнес-Школу ЧГУ. У меня есть муж.
                        Я работаю учителем информатики в колледже.
                        Решила реализовать свою давнюю мечту и стать разработчиком.
                        В 2022 году записалась на курс по веб-разработке.
                        По окончанию круса планирую перейти в IT.
                    </p>
                    <AnimationLink>
                        <a href='https://github.com/mmsnegova' target='_blank' rel="noreferrer"  className='about-me__github'>Github</a>
                    </AnimationLink>
                </div>
                <img className='about-me__avatar' src={mmsnegova} alt="Аватар"/>
            </article>
        </section>
    )
}

export default AboutMe;