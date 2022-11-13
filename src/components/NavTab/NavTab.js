import React from 'react';
import AnimationLink from '../AnimationLink/AnimationLink';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="nav-tab">
            <AnimationLink>
                <a href="#about-project" className="nav-tab__link">
                    О проекте
                </a>
            </AnimationLink>
            <AnimationLink>
                <a href="#techs" className="nav-tab__link">
                    Технологии
                </a>
            </AnimationLink>
            <AnimationLink>
                <a href="#about-me" className="nav-tab__link">
                    Студент
                </a>
            </AnimationLink>
        </nav>
    );
}

export default NavTab;
