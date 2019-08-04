import React, { Component } from 'react'
import GuestScreen from '../guest/GuestTab.js'
import User from '../loggedIn/User.js';
import './mainScreen.css'
import ConfirmComp from '../components/ConfirmComp.js'


export default class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'asasddasd',
        confirmOpen: false,
        loggedIn: true
      }
    }
  confirm=(message)=>{
    this.setState({message: message,confirmOpen:true})
  }
  render() {
    return (
      <div className={'mainScreen'} id='welcomeBanner'>
        <div className={'maxWidth60'}>
          {this.state.loggedIn?
            <User/>:
            <GuestScreen/>
          }
        </div>
      </div>
    )
  }
}
