import React from 'react';

import './Error.css';

function Error(props) {
    const classNameError = `error__conteiner error__conteiner_${props.type}`;
    return (
        <div className={classNameError}>
            <span className="error__text">{props.error}</span>
        </div>
    );
}
export default Error;
