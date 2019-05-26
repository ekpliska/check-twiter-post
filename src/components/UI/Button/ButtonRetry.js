import React from 'react';
import ButtonRetryStyle from './ButtonRetry.module.css';

const ButtonRetry = (props) => {

    const cls = [
        ButtonRetryStyle.button,
        ButtonRetryStyle[props.type]
    ];

    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default ButtonRetry;