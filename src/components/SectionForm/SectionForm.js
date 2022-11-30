import React from 'react';
import { Link } from 'react-router-dom';
import AnimationLink from '../AnimationLink/AnimationLink';
import './SectionForm.css';

function SectionForm(props) {
    const classNameButtonSubmit = `section-form__submit section-form__submit_${
        props.form
    } ${
        props.isValid && !props.isDisabled
            ? ''
            : 'section-form__submit_inactive'
    }`;
    return (
        <section className={`section-form section-form_${props.form} `}>
            <form
                className={`section-form__form section-form__form_${props.form}`}
                onSubmit={props.onSubmit}
            >
                <div>
                    <h2
                        className={`section-form__title section-form__title_${props.form}`}
                    >
                        {props.title}
                    </h2>
                    {props.children}
                </div>
                <div
                    className={`section-form__buttons section-form__buttons_1${props.type}`}
                >
                    <button
                        className={classNameButtonSubmit}
                        type="submit"
                        disabled={!props.isValid || props.isDisabled}
                    >
                        {props.textButton}
                    </button>
                    <div
                        className={`section-form__spans section-form__spans_${props.form}`}
                    >
                        <span>{props.span}</span>
                        <AnimationLink>
                            <Link
                                onClick={props.onSignOut}
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
