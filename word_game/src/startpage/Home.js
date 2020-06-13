import React from 'react'
import { Link } from 'react-router-dom'
import CenteredIcon from '../CenteredIcon';
import './Home.css'


const Home = ({ children }) => {
  return (
    <div className={'fullPageContainer gradientBackground'}>
      {children}
      <div id='GameOverview' className={'fullContainer maxWidth60'}>
        <div className={'fourPartGrid'}>
          <Link className={'boxLink undecoratedLink hoverPushAnimation'} to='/games/wordgame'>
            <CenteredIcon hover={true} iconSrc={"fas fa-language"} descText={'WORD GAME'} />
          </Link>
          <Link className={'boxLink undecoratedLink hoverPushAnimation'} to='/games/reactiongame'>
            <CenteredIcon hover={true} iconSrc={"fas fa-language"} descText={'CLICK FAST'} />
          </Link>
          <Link className={'boxLink undecoratedLink hoverPushAnimation'} to='/games/numbergame'>
            <CenteredIcon hover={true} iconSrc={"fas fa-sort-numeric-up"} descText={'NUMBER GAME'} />
          </Link>
          <Link className={'boxLink undecoratedLink'} to='/games/wordgame'><p>COMING SOON</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
