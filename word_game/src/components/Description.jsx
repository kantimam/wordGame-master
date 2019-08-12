import React from 'react'
import './description.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Description = ({header, text, stats}) => {
    const data = [
        {score: 0, count: 0, pv: 2400, amt: 2400},
        {score: 1, count: 30, pv: 2400, amt: 2400},
        {score: 2, count: 79, pv: 2400, amt: 2400},
        {score: 3, count: 40, pv: 2400, amt: 2400},
        {score: 4, count: 10, pv: 2400, amt: 2400},
        {score: 5, count: 23, pv: 2400, amt: 2400},
    ];
    return (
        <div id='descriptionBox' className={'inner marginAuto'}>
            <section id='descStatsSection'>
                <h1>STATS</h1>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="score" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
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
