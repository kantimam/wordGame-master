import React, { Component } from 'react'
import './progressBar.css'

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.progressInterval=0;
    this._isMounted=false;
    this.startTime=0;
    this.state = {
       progress: 0
    }
  }
  componentDidMount(){
    this._isMounted=true;
    this.startTime=Date.now();
     /* try to update at 60 fps. no requestAnimation frame so it keeps running even if tab is not open */
    this.progressInterval=setInterval(this.updateProgress,60/1000);
  }
  componentWillUnmount(){
    this._isMounted=false;
    clearInterval(this.progressInterval)
    console.log(Date.now()-this.startTime);
  }

  updateProgress=()=>{
    if(this._isMounted){
      if(this.state.progress>100){
        clearInterval(this.progressInterval)
        return this.props.finished()
      }
      this.setState({
        progress: ((Date.now()-this.startTime)/(this.props.time*10))
      })
    }

  }

  
  render() {

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
