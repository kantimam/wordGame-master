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
         numberEntered: "",
         lifes: 1,
         score: 0
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

  resetGame=()=>{
    this.currentRound=1;
    this.setState({
      number: "",
      showNum: 0,
      numberEntered: "",
      lifes: 5
    })
  }

  showNum=(time)=>{
    setTimeout(()=>this.setState({showNum:0}),time)
  }

  enterNumber=(event)=>{
    event.preventDefault();
    if(this.state.numberEntered!==this.state.number){
      this.setState({
        lifes: this.state.lifes-1,
        showNum: 0
      })
    }else{
      this.setState({
        score: this.state.score+1,
        showNum: 0
      })
    }
    this.startRound()
  }
  displayLifes=()=>{
    let lifesArray=[]
    for(let i=0;i<this.state.lifes;i++){
      lifesArray.push(<i key={`life${i}`} className="fas fa-heart marginRight"/>)
    }
    return lifesArray
  }


  render() {
    if(this.state.lifes<1){
      return (
        <div id='numGameDisp'>
          DONE
        </div>
      )
    }
    return (
      <div id='numGameDisp'>
        <div className='wordGameUi'>
          <div>{this.displayLifes()}</div>
          <div>SCORE: {this.state.score}</div>
        </div>
        {this.state.showNum?
        <div>
            <h1 className={'wordEnter'}>{this.state.number}</h1>
            <ProgressBar 
              finished={()=>this.setState({showNum:0})} 
              maxWidth={10}/* in rem */ 
              time={5}/* time in seconds */>
            </ProgressBar>
        </div>:
        <form 
          /* onSubmit={()=>this.startRound(this.state.number)} */ 
          className={'marginAuto'}
          onSubmit={this.enterNumber}
        >
          <input
            className={'numInput'} 
            value={this.state.numberEntered} 
            onChange={(event)=>this.setState({numberEntered:event.target.value})} 
            type='number' 
            placeholder='remember the number?'>
          </input>
          <input id='numSubmit' className={'roundedButton hoverPush'} type='submit' value='SEND'/>
        </form>}
      </div>
    )
  }
}
