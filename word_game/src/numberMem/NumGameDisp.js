import React, { Component } from 'react'
import '../components/wordGame.css'
import './numGame.css'
import ProgressBar from '../components/ProgressBar.js'
import SaveScore from '../components/SaveScore';
import NumGameInput from './NumGameInput.jsx';
import RoundEnd from '../components/RoundEnd.jsx';

export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.currentRound=1;
      this.numTimeOut=null;
      this._isMounted=false;
      this.state = {
         number: "",
         showNum: 0,
         numberEntered: "",
         lifes: 1,
         score: 0,
         roundOver: false,
         saveScore: false
      }
    }

  componentDidMount=()=>{
    this._isMounted=true;
    this.startRound()
  }

  componentWillUnmount=()=>{
    this._isMounted=false;
    clearInterval(this.numTimeOut)
  }
  startRound=()=>{
    if(!this.state.showNum){
        let numArr=[]
        for(let i=0;i<this.currentRound;i++){
          numArr.push(Math.ceil(Math.random()*9))

        }
        let newNum=numArr.join('');
        if(this._isMounted){
          this.setState({
            number:newNum,
            showNum:1,
            numberEntered:''
          })
        }
        this.currentRound++
    }
  }

  resetGame=()=>{
    this.currentRound=1;
    if(this._isMounted){
      this.setState({
        number: "",
        showNum: 0,
        numberEntered: "",
        lifes: 5
      })
    }

  }

  showNum=(time)=>{
    this.numTimeOut=setTimeout(()=>{
      if(this._isMounted){
        this.setState({showNum:0})
      }
    },time)
  }

  enterNumber=(event)=>{
    event.preventDefault();
    if(this.state.numberEntered!==this.state.number){
      this.setState({
        lifes: this.state.lifes-1,
        showNum: 0,
        roundOver: {number: this.state.number, numberEntered: this.state.numberEntered},
      })
    }else{
      this.setState({
        score: this.state.score+1,
        showNum: 0,
        roundOver: {number: this.state.number, numberEntered: this.state.numberEntered},
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
    if(this.state.saveScore){
      return (
        <SaveScore currentPath={this.props.location.pathname} gameName={'number'} gameScore={this.state.score}/>
      )
    }
    return (
      <div id='numGameDisp'>
        <div className='wordGameUi'>
          <div>{this.displayLifes()}</div>
          <div>SCORE: {this.state.score}</div>
        </div>
        {this.state.roundOver?
          <RoundEnd 
            number={this.state.roundOver.number} 
            numberEntered={this.state.roundOver.numberEntered}
            lifes={this.state.lifes}
            nextRound={()=>this.setState({roundOver: false})}
            saveScore={()=>this.setState({saveScore: true})} 
          />:
          this.state.showNum?
          <div>
              <h1 className={'wordEnter'}>
                {this.state.number}
              </h1>
              <ProgressBar 
                finished={()=>this.setState({showNum:0})} 
                maxWidth={10}/* in rem */ 
                time={5}/* time in seconds */>
              </ProgressBar>
          </div>:
          <NumGameInput
            onChange={(event)=>this.setState({numberEntered:event.target.value})}
            inputVal={this.state.numberEntered}
            onSubmit={this.enterNumber}
          />
        }
        
      </div>
    )
  }
}
