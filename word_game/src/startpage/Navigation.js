import React from 'react'
import UserInfo from './userInfo';
import {Link} from 'react-router-dom'


const Navigation = () => {
  return (
    <nav className={'topNav'}>
      <ul className={'navList'}>
          <Link className={'somePadding undecoratedLink'} to='/'>GAMES</Link>
          <Link className={'somePadding undecoratedLink'} to='/'>ABOUT</Link>
          <Link className={'somePadding undecoratedLink'} to='/'>CONTACT</Link>
          <UserInfo/>
      </ul>
    </nav>
  )
}

export default Navigation

