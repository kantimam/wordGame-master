import React, { Component } from 'react'
import './progressBar.css'

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.progressInterval=0;
    this._isMounted=false;
    this.state = {
       progress: 0
    }
  }
  componentDidMount(){
    this._isMounted=true;
    this.progressInterval=setInterval(this.updateProgress,this.props.time)
  }
  componentWillMount(){
    this._isMounted=false;
    clearInterval(this.progressInterval)
  }
  updateProgress=()=>{
    if(this._isMounted){
      this.setState({progress: this.state.progress+0.1},
        ()=>{if(this.state.progress>100){
          clearInterval(this.progressInterval)
          this.props.finished()
        }})
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
