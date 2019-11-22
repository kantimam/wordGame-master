import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import axios from 'axios'
import StatsChart from '../components/statsChart.jsx';
const BASEURL = process.env.REACT_APP_BE_URL;

const statsChartWrapper = ({ gameName }) => {
    const [scores, setScores] = useState([])
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



    useEffect(() => {
        axios.get(`${BASEURL}/getstats/${gameName}`).then(res => {
            let scoreArr = []
            for (let key in res.data) {
                scoreArr.push({
                    score: key,
                    percent: res.data[key]
                })
            }
            setScores(scoreArr)
        })
    }, [gameName])
    return (
        <div ref={containerRef} className={"statsWrapperOuter"}>
            <div className={"statsWrapperInner"}>
                {chartWidth && <StatsChart data={scores} width={chartWidth} />}
            </div>
        </div>
    )
}

export default statsChartWrapper
