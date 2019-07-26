import React, { Component } from 'react'
import NumGameDisp from './NumGameDisp'
import './numGame.css'

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
      <div className={'fullContainer gradientBackground noUserSelect moreHeight'}>
        {this.state.running&&<NumGameDisp></NumGameDisp>}
      </div>
    )
  }
}
