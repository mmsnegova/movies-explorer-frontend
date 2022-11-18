import React from 'react';
import './LabelWithInput.css';

function LabelWithInput(props) {
    return (
        <>
            <label
                className={`label-with-input__lable label-with-input__lable_${props.form}`}
            >
                {props.label}
                <input
                    className={`label-with-input__input label-with-input__input_${props.form} label-with-input__input_${props.name}`}
                    type={props.type}
                    name={props.name}
                    defaultValue={props.defaultValue}
                />
            </label>
        </>
    );
}

export default LabelWithInput;
