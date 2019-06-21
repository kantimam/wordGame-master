import React, { Component } from 'react'
import '../components/wordGame.css'
import './numGame.css'
import ProgressBar from '../components/ProgressBar.js'

export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.currentRound=1;
      this.state = {
         number: "",
         showNum: 0,
         numberEntered: ""
      }
    }

  componentDidMount=()=>{
    this.startRound()
  }
  startRound=()=>{
    if(!this.state.showNum){
        let numArr=[]
        for(let i=0;i<this.currentRound;i++){
          numArr.push(Math.ceil(Math.random()*9))

        }
        let newNum=numArr.join('');
        this.setState({number:newNum,showNum:1,numberEntered:''})
        this.currentRound++
    }
  }
  showNum=(time)=>{
    setTimeout(()=>this.setState({showNum:0}),time)
  }
  render() {
    return (
      <div id='numGameDisp'>
        {this.state.showNum?
        <div>
            <h1 className={'wordEnter'}>{this.state.number}</h1>
            <ProgressBar 
              finished={()=>this.setState({showNum:0})} 
              maxWidth={10}/* in rem */ 
              time={5}/* time in seconds */>
            </ProgressBar>
        </div>:
        <form onSubmit={()=>this.startRound(this.state.number)} className={'marginAuto'}>
          <input
            className={'numInput'} 
            value={this.state.numberEntered} 
            onChange={(event)=>this.setState({numberEntered:event.target.value})} 
            type='number' placeholder='remember the number?'>
          </input>
          <input id='numSubmit' className={'roundedButton hoverPush'} type='submit' value='SEND'/>
        </form>}
      </div>
    )
  }
}
