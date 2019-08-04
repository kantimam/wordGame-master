import React from 'react'
import CloseButton from './closeButton.jsx';

const floatingContainer = ({children, close}) => {
    const style={
        position: "absolute",
        top: "5rem",
        width: "100%",
        display: "flex",
    }
    return (
        <div style={style}>
            <CloseButton close={close}/>
            {children}
        </div>
    )
}

export default floatingContainer
