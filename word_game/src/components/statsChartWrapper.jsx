import React, { useState, useLayoutEffect, useRef } from 'react'
import StatsChart from './statsChart.jsx';

const statsChartWrapper = ({ scores }) => {
    const [chartWidth, setChartWidth] = useState(null);
    const containerRef = useRef();

    useLayoutEffect(() => {
        const changeWidth=()=>setChartWidth(containerRef.current.clientWidth)
        changeWidth()
        window.addEventListener("resize",changeWidth)
        return () => {
            window.removeEventListener("resize", changeWidth);
        }
    }, [])


    return (
        <div ref={containerRef} id="dashboardChart"  className={"statsWrapperOuter"}>
            <div className={"statsWrapperInner"}>
                {chartWidth && <StatsChart data={scores} width={chartWidth} />}
            </div>
        </div>
    )
}

export default statsChartWrapper
