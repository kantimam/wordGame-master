import React from 'react'
import { AreaChart, Area, /* Line, */ CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const statsChart = ({data, width}) => {
    return (
        <AreaChart width={width || 500} height={300} data={data}>
            <Area type="monotone" dataKey="percent" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="score" />
            <YAxis/>
            <Tooltip />
        </AreaChart>
    )
}

export default statsChart
