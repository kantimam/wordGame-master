import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import brainLogo from './brainLogo.svg'


export default () => {
  return (
    <div id='welcomeBanner' className="centerAll">
      <div className={"callToAction"}>
        <div className="centerAll logo">
          <img src={brainLogo} alt="brain logo"/>
        </div>
        <h1>ARE YOU A GOOD MONKEY?!</h1>
        <Link id='enterButton' className={'mainButton'} to='/dashboard'>
          ENTER
        </Link>
      </div>
    </div>
  )
}
