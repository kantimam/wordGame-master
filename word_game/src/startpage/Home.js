import React, { Component } from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import CenteredIcon from '../CenteredIcon';
import './Home.css'
import WelcomeBanner from './WelcomeBanner';
import MainScreen from '../mainScreen/MainScreen.js'


const Home = () => {
  return (
    <div className={'spaceBgFull- horizontalGrid- fullPageContainer'}>
      <WelcomeBanner/>
      <div id='GameOverview' className={'fullContainer maxWidth60'}>
        <div className={'fourPartGrid'}>
          <Link className={'boxLink undecoratedLink'} to='./games/wordgame'>
            <CenteredIcon hover={true} iconSrc={"fas fa-language"} descText={'WORD GAME'}/>
          </Link>
          <Link className={'boxLink undecoratedLink'} to='./games/reactiongame'>
            <CenteredIcon hover={true} iconSrc={"fas fa-language"} descText={'CLICK FAST'}/>
          </Link>
          <Link className={'boxLink undecoratedLink'} to='./games/numGame'>
            <CenteredIcon hover={true} iconSrc={"fas fa-sort-numeric-up"} descText={'NUMBER GAME'}/>
          </Link>
          <Link className={'boxLink undecoratedLink'} to='./games/wordgame'><p>COMING SOON</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
