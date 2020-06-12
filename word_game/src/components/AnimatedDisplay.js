import React, { Component } from 'react'
import './wordGame.css'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.animationClass = ''
    this.state = {
      playAnimation: true
    }
  }

  render() {
    return (
      <div className={'displayContainer'}>
        {this.props.roundOne && <h1 className={'wordEnter'}>{this.props.word}</h1>}
        {this.props.roundOne && <h1 className={'wordLeave'}>{this.props.prevWord}</h1>}

        {this.props.roundTwo && <h1 className={'wordEnter'}>{this.props.word}</h1>}
        {this.props.roundTwo && <h1 className={'wordLeave'}>{this.props.prevWord}</h1>}

        <div className={'fullWidthBlock'}>
          {this.props.displayButton && <div
            onClick={this.props.getNewWord}
            className={"roundedDiv fadeInAnimation flexVertCenter"}>
            <i class="fas fa-plus"></i>
          </div>}
        </div>
      </div>
    )
  }
}
