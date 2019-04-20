import React, { Component } from 'react'
import axios from 'axios';
import NumGameDisp from './NumGameDisp'
const wordArray=["hello","black","white","nazi","fun","friendship","hell"]

export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.seenWords=[];
      this.wordHistory=[];
      this.currentMode=1;
      this.scoreValue=1;
      this.state = {
         lifes: 5,
         score: 0,
         running: true
      }
    }

  render() {
    return (
      <div className={'fullContainer gradientBackground noUserSelect'}>
        {this.state.running&&<NumGameDisp></NumGameDisp>}
      </div>
    )
  }
}
