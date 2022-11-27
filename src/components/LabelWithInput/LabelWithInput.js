import React from 'react';
import Error from '../Error/Error';
import './LabelWithInput.css';

function LabelWithInput(props) {
    return (
        <>
            <label
                className={`label-with-input__lable label-with-input__lable_${props.form}`}
            >
                {props.label}
                <input
                    className={`label-with-input__input label-with-input__input_${
                        props.form
                    } label-with-input__input_${props.name} ${
                        props.error && 'label-with-input__input_invalid'
                    }`}
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    id={props.name}
                    required
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                />
                {props.error && <Error type={props.form} error={props.error} />}
            </label>
        </>
    );
}

export default LabelWithInput;
