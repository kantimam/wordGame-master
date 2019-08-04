import React from 'react'
import UserInfo from './userInfo';
import {Link} from 'react-router-dom'


const Navigation = () => {
  return (
    <nav className={'topNav'}>
      <ul className={'navList'}>
          <Link className={'somePadding undecoratedLink'} to='/'>ME </Link>
          <Link className={'somePadding undecoratedLink'} to='/'>GAMES</Link>
          <Link className={'somePadding undecoratedLink'} to='/'>INFO</Link>
          <UserInfo/>
      </ul>
    </nav>
  )
}

export default Navigation

