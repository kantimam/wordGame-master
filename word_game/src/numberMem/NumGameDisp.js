import React, { Component } from 'react'
import '../components/wordGame.css'
import ProgressBar from '../components/ProgressBar.js'

export default class componentName extends Component {
    constructor(props) {
      super(props)

      this.state = {
         number: "",
         showNum: 0,
         numberEntered: ""
      }
    }

  componentDidMount=()=>{
    this.startRound("")
  }
  startRound=(lastRound)=>{
    console.log('did submit')
    if(!this.state.showNum){
        let newNum=lastRound+''+Math.floor(Math.random()*10)
        this.setState({number:newNum,showNum:1,numberEntered:''}/* ,()=>this.showNum(822000) */)
    }
  }
  showNum=(time)=>{
    setTimeout(()=>this.setState({showNum:0}),time)
  }
  render() {
    return (
      <div id='numGameDisp' className={'displayContainer'}>
        {this.state.showNum?
        <div>
            <h1 className={'wordEnter'}>{this.state.number}</h1>
            <ProgressBar 
              finished={()=>this.setState({showNum:0})} 
              maxWidth={10}/* in rem */ 
              time={8}/* time in seconds */>
            </ProgressBar>
        </div>:
        <form onSubmit={()=>this.startRound(this.state.number)} className={'marginAuto'}>
          <input 
            value={this.state.numberEntered} 
            onChange={(event)=>this.setState({numberEntered:event.target.value})} 
            type='number' placeholder='remember the number?'>
          </input>
        </form>}
      </div>
    )
  }
}
