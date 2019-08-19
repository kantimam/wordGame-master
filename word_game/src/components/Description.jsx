import React, {useState, useEffect} from 'react'
import './description.css'
import axios from 'axios'
import { AreaChart, Area, /* Line, */ CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const BASEURL=process.env.REACT_APP_BE_URL;

const Description = ({header, text, gameName}) => {
    const [scores, setScores]=useState([])
    const data = [
        {score: 0, count: 0, pv: 2400, amt: 2400},
        {score: 1, count: 30, pv: 2400, amt: 2400},
        {score: 2, count: 79, pv: 2400, amt: 2400},
        {score: 3, count: 40, pv: 2400, amt: 2400},
        {score: 4, count: 10, pv: 2400, amt: 2400},
        {score: 5, count: 23, pv: 2400, amt: 2400},
    ];
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
    },[])
    return (
        <div id='descriptionBox' className={'inner marginAuto'}>
            <section id='descStatsSection'>
                <h1>STATS</h1>
                <AreaChart width={500} height={300} data={scores}>
                    <Area type="monotone" dataKey="percent" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="score" />
                    <YAxis /* dataKey="percent" */ />
                    <Tooltip />
                </AreaChart>
            </section>
            <section id='descInfoSection'>
                <h1>
                    {header}
                </h1>
                <p>
                    {text}
                </p>
            </section>
        </div>
    )
}

export default Description
