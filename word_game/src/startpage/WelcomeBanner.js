import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


export default () => {
  return (
    <div id='welcomeBanner'>
      <div>
        <div>ICON</div>
        <h1>ARE YOU A GOOD MONKEY?!</h1>
        <Link id='enterButton' className={'linkButton'} to='/main'><p>ENTER</p></Link>
      </div>
    </div>
  )
}
