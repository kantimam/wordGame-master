import React from 'react';
import './closeButton.css';

const closeButton = ({close, customStyle}) => {
    return (
        <div className={'centerAll pointer closeButton'} style={customStyle} onClick={close}>
            <i className={'fas fa-times noMargin'}/>
        </div>
    )
}

export default closeButton
