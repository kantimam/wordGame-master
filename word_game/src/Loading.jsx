import React, { useState, useEffect } from 'react'

const Loading = ({ className = "", delay = 0 }) => {
    const [ready, setReady] = useState(false)
    useEffect(() => {
        const timeOut = setTimeout(() => setReady(true), delay);
        return () => {
            clearTimeout(timeOut);
        };
    }, [])

    return ready && <div id="loadingScreen" className={`flexColumnCenter ${className}`}>
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
            LOADING
        </div>

}

export default Loading
