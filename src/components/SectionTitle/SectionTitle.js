import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
    return (
        <section className="section">
            <h2 className={`section__title ${props.darkTheme}`}>
                {props.children}
            </h2>
        </section>
    );
}

export default SectionTitle;
