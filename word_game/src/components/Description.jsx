import React from 'react'
import './description.css'

const Description = ({header, text, stats}) => {
    return (
        <div id='descriptionBox' className={'inner marginAuto'}>
            <section id='descStatsSection'>
                <h1>STATS</h1>
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
