import React from 'react';
import './InfoTooltip.css';

function InfoTooltip(props) {
    return (
        <div className={`tooltip ${props.isOpen && 'tooltip_opened'}`}>
            <div className="tooltip__content tooltip__content_center">
                <button
                    className="tooltip__close"
                    type="button"
                    aria-label="Закрыть"
                    onClick={props.onClose}
                ></button>
                <h3 className="tooltip__title tooltip__title_large">
                    {props.message}
                </h3>
            </div>
        </div>
    );
}

export default InfoTooltip;
