import React, { Component } from 'react'
import './progressBar.css'

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.progressInterval=0;
    this.state = {
       progress: 0
    }
  }
  componentDidMount(){
    this.progressInterval=setInterval(()=>this.setState({progress: this.state.progress+0.1}),this.props.time)
  }
  
  render() {
    if(this.state.progress>100){
      clearInterval(this.progressInterval)
      this.props.finished()
    }
    return (
      <div style={{maxWidth:this.props.maxWidth+'rem'}} id='progressBarCont'>
      <div id='progressWrap'>
        <div style={{width:this.state.progress+'%'}}>

        </div>
      </div>
    </div>
    )
  }
}
