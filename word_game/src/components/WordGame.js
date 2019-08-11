import React, { Component } from 'react'
import './wordGame.css'
import ScoreUi from './ScoreUi.js'
import AnimatedDisplay from './AnimatedDisplay.js'
import GameOver from './GameOver.js'
import axios from 'axios';
import SaveScore from './SaveScore';
const wordArray=["hello","black","white","nazi","fun","friendship","hell"]

export default class componentName extends Component {
    constructor(props) {
      super(props)
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
      axios.get('http://82.165.121.77:5000/api/word/')
        .then(response=>{
        console.log(response.data)
        this.setState({
          prevWord: previousWord,
          currentWord: response.data,
        })
        return response.data
      }).catch(error=>{
        console.log(error)
      })
      
      /* this.callApi()
      .then(res => this.setState({ response: res.express },()=>console.log(res.express)))
      .catch(err => console.log(err)); */
    }
    callApi = async () => {
      const response = await fetch('192.168.56.1:5000/api/word');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };

    newWord=(/* event,  */mode)=>{
      let previousWord=this.state.currentWord;
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
      console.log(this.seenWords)   
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
    console.log('the current word is: '+this.state.currentWord)
    console.log('the mode is: '+this.currentMode)
    console.log(this.seenWords)
    console.log(this.state.currentWord+' was alrdy seen '+this.seenWords.includes(this.state.currentWord))
    
    return (
      <div className={'fullContainer gradientBackground noUserSelect'}>
        {this.state.gameOver?
          <SaveScore currentPath={this.props.location.pathname} gameName={'word'} gameScore={this.state.score}/>:
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
          <button onClick={this.seenNew} value={1} className={'roundedButton hoverPush'}>NEW</button>
          <button onClick={this.seenNew} value={0}  className={'roundedButton hoverPush'}>SEEN</button>
        </div>
        </div>}
      </div>
    )
  }
}
