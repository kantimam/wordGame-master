import React, { Component } from 'react'
import UserTab from './UserTab';
import History from './History'
//import GuestScreen from './GuestScreen'
import './mainScreen.css'
import ConfirmComp from '../components/ConfirmComp.js'


export default class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'asasddasd',
        confirmOpen: false,
        loggedIn: false
      }
    }
  confirm=(message)=>{
    this.setState({message: message,confirmOpen:true})
  }
  render() {
    return (
      <div className={'mainScreen'} id='welcomeBanner'>
        {this.state.confirmOpen&&
          <ConfirmComp 
            message={this.state.message}
            close={()=>this.setState({confirmOpen: false})}
          />
        }
        <div className={'maxWidth60'}>
          {!this.state.loggedIn&&
            <UserTab 
              logIn={()=>this.setState({loggedIn: true})} 
              confirm={(message)=>this.confirm(message)}>
            </UserTab>
          }
          {this.state.loggedIn&&
            [<History></History>,
            <History></History>,
            <History></History>]
          }
          {/* <GuestScreen></GuestScreen> */}
        </div>
      </div>
    )
  }
}
