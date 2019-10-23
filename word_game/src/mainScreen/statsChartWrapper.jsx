import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'
import axios from 'axios'
import StatsChart from '../components/statsChart.jsx';
const BASEURL=process.env.REACT_APP_BE_URL;

const statsChartWrapper = ({gameName}) => {
    const [scores, setScores]=useState([])
    const [chartWidth, setChartWidth]=useState(null);
    const containerRef=useRef();

    useLayoutEffect(()=>{
        setChartWidth(
            containerRef.current.clientWidth
        )
    },[])

    useEffect(()=>{
        axios.get(`${BASEURL}/getstats/${gameName}`).then(res=>{
            console.log(res.data)
            let scoreArr=[]
            for(let key in res.data){
                scoreArr.push({
                    score: key,
                    percent: res.data[key]
                })
            }
            setScores(scoreArr)
            console.log(scoreArr)
        })
    },[gameName])
    return (
        <div ref={containerRef} className={"statsWrapperOuter"}>
            <div className={"statsWrapperInner"}>
                {chartWidth && <StatsChart data={scores} width={chartWidth}/>}
            </div>
        </div>
    )
}

export default statsChartWrapper
