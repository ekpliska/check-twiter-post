import React from 'react';
import BackdropStyle from './Backdrop.module.css';

const Backdrop = (props) => {

    return (
        <div
            className={BackdropStyle.dackdrop}
            onClick={props.onClick}
        ></div>
    )
}

export default Backdrop;