import React, {useState, useEffect} from 'react'
import './description.css'
import axios from 'axios'
import StatsChart from './statsChart.jsx';
const BASEURL=process.env.REACT_APP_BE_URL;

const Description = ({header, text, gameName}) => {
    const [scores, setScores]=useState([])
    useEffect(()=>{
        axios.get(`${BASEURL}/getstats/${gameName}`).then(res=>{
            let scoreArr=[]
            for(let key in res.data){
                scoreArr.push({
                    score: key,
                    percent: res.data[key]
                })
            }
            setScores(scoreArr)
        })
    },[])
    return (
        <div id='descriptionBox' className={'inner margin0Auto'}>
            <section id='descStatsSection'>
                <h1>STATS</h1>
                <StatsChart data={scores}/>
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
