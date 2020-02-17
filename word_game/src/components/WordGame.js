import React, { Component } from 'react'
import './wordGame.css'
import ScoreUi from './ScoreUi.js'
import AnimatedDisplay from './AnimatedDisplay.js'
import axios from 'axios';
import SaveScore from './SaveScore';
import Description from '../components/Description.jsx';
const wordArray=["friendship","hell","cat","dog","human","work"]


export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.wordsArray=[];
      this.seenWords=[];
      this.wordHistory=[];
      this.currentMode=1;
      this.scoreValue=1;
      this.state = {
         currentWord: wordArray[Math.floor(Math.random()*wordArray.length)],
         prevWord: '',
         response: '',
         lifes: 5,
         score: 0,
         animated: true,
         gameOver: false,
         getNewWord: false
      }
    }
    wordFromAPI=()=>{
      let previousWord=this.state.currentWord;
      axios.get(`/randomword`)
        .then(response=>{
        this.setState({
          prevWord: previousWord,
          currentWord: response.data,
        })
        return response.data
      }).catch(error=>{
        console.log(error)
      })
    }

    getBatchOfWords=()=>{
      /* get a batch of words on mount and filter out words that where already seen */  
    }

    newWord=(/* event,  */mode)=>{
      const previousWord=this.state.currentWord;
      this.currentMode=mode;
      if(mode===1){
        this.wordFromAPI()       
      }else{
        this.setState({
          prevWord: previousWord,
          currentWord: this.seenWords[Math.floor(Math.random()*this.seenWords.length)],
        })
      }
    }
    seenNew=(event)=>{
      /* if answer is 1 (new word) and word is not inside seen words 
      or answer 0 (seen word) and word is inside seenWords increase score */
      if((1===parseInt(event.target.value)&&
         !this.seenWords.includes(this.state.currentWord))
         || (0===parseInt(event.target.value)&&
         this.seenWords.includes(this.state.currentWord))){
        
          this.setState({
            score: this.state.score+this.scoreValue,
            animated: !this.state.animated,
        })
      }
      else{
        /* else check if game is other once player loses a life */
        this.state.lifes>0?
        this.setState({
          lifes: this.state.lifes-1,
          animated: !this.state.animated
        }):
        this.setState({gameOver: true/* ,getNewWord: true */})
      }
      this.wordHistory.push(this.state.currentWord)
      if(!this.seenWords.includes(this.state.currentWord)){
        this.seenWords.push(this.state.currentWord)
      }
      /* 50 50 chance to get a new word from api or seen word from array
      TODO maybe play with probability */
      this.newWord(Math.round(Math.random()))  
      
      
    }
    restartGame=()=>{
      this.seenWords=[]
      this.currentMode=1
      this.setState({
        gameOver:false,
        lifes:5,
        score:0,
      })
    }
    
  render() {
    return (
        <>
          <div id="wordGameContainer" className={'fullContainer inner gradientBackground noUserSelect flexColumnCenter'}>
          {this.state.gameOver?
            <SaveScore currentPath={this.props.location.pathname} gameName={'word'} gameScore={this.state.score} restart={this.restartGame}/>:
          <div>
          <ScoreUi 
            score={this.state.score}
            lifes={this.state.lifes}  
          ></ScoreUi>
          <AnimatedDisplay 
            roundOne={this.state.animated}
            roundTwo={!this.state.animated}  
            word={this.state.currentWord}
            prevWord={this.state.prevWord}
            displayButton={false}
            getNewWord={this.newWord}>
          </AnimatedDisplay>
          {/* <button 
            onClick={(event)=>this.newWord(event, Math.round(Math.random()))} 
            className={'roundedButton hoverPush'}>NEW WORD!
          </button> */}
          <div id='gameButtonContainer'>
            <button onClick={this.seenNew} value={1} className={'mainButton hoverPush'}>NEW</button>
            <button onClick={this.seenNew} value={0}  className={'mainButton hoverPush'}>SEEN</button>
          </div>
          </div>}
        </div>
        <Description
          gameName={'word'}
          header={"word memory game"}
          text={"a game to test your word memory"}
        />
      </>

    )
  }
}
