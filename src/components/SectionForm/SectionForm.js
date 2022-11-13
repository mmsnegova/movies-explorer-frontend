import React from 'react';
import { Link } from 'react-router-dom';
import AnimationLink from '../AnimationLink/AnimationLink';
import './SectionForm.css';

function SectionForm(props) {
    return (
        <section className={`section-form section-form_${props.form}`}>
            <form className="section-form__form">
                <div>
                    <h2
                        className={`section-form__title section-form__title_${props.form}`}
                    >
                        {props.title}
                    </h2>
                    {props.children}
                </div>
                <div className="section-form__buttons">
                    <button
                        className={`section-form__submit section-form__submit_${props.form}`}
                        type="submit"
                    >
                        {props.textButton}
                    </button>
                    <div
                        className={`section-form__spans section-form__spans_${props.form}`}
                    >
                        <span>{props.span}</span>
                        <AnimationLink>
                            <Link
                                to={props.path}
                                className={`section-form__link section-form__link_${props.form}  section-form__link_${props.nameButton}`}
                            >
                                {props.textLink}
                            </Link>
                        </AnimationLink>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default SectionForm;
