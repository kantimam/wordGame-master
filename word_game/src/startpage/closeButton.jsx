import React from 'react';
import './closeButton.css';

const closeButton = ({close, customStyle}) => {
    return (
        <div className={'centerAll pointer closeButton'} style={customStyle} onClick={close}>
            <p className='noMargin'>X</p>
        </div>
    )
}

export default closeButton
