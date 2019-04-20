import React, { Component } from 'react'
import './confirmComp.css'

export default class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div onClick={this.props.close} id='confirmComp'>
        <div>
          <p>{this.props.message}</p>
        </div>       
      </div>
    )
  }
}
