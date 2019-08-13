import React from 'react'
import CloseButton from './closeButton.jsx';
import LogInLink from '../components/LogInLink.jsx';

const floatingContainer = ({children, close}) => {
    const style={
        position: "absolute",
        top: "5rem",
        width: "100%",
        display: "flex",
    }
    return (
        <div style={style}>
            <div style={{margin: '0 auto', position: 'relative', maxWidth: '90%'}}>
                <CloseButton 
                    close={close} 
                    customStyle={{
                        position: 'absolute',
                        right: '-1rem',
                        top: '-1rem'
                    }}
                />
                {children}
            </div>
        </div>
    )
}

export default floatingContainer
