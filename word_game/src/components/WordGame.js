import React, { Component } from 'react'
import './wordGame.css'
import ScoreUi from './ScoreUi.js'
import AnimatedDisplay from './AnimatedDisplay.js'
import axios from 'axios';
import SaveScore from './SaveScore';
import Description from '../components/Description.jsx';


export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.wordsArray = [];
    this.seenWords = [];
    this.wordHistory = [];
    this.currentMode = 1;
    this.scoreValue = 1;
    this.state = {
      currentWord: '',
      prevWord: '',
      response: '',
      lifes: 5,
      score: 0,
      animated: true,
      gameOver: false,
      getNewWord: false
    }
  }

  async componentDidMount() {
    await this.getBatchOfWords();
    this.setState({
      currentWord: this.randomUnknownWord()
    })
  }

  getBatchOfWords = () => {
    return axios.get(`/randomwords`)
      .then(response => {
        if (!response.data || response.data.length < 1) {
          throw new Error("invalid response");
        }
        this.wordsArray = [...this.wordsArray, ...response.data];
        return this.wordsArray;
      }).catch(error => {
        console.log(error);
        alert("Word game could not connect to the server. Please try again later.")
      })
  }

  randomUnknownWord = () => {
    const wordArrLen = this.wordsArray.length;
    if (wordArrLen < 1) return alert("could not get random words. please try to reload or contact kantemir.imam@gmail.com")
    /* get a random word that most likely was not seen now */
    const randomIndexInRange = Math.floor(Math.random() * wordArrLen);
    const item = this.wordsArray.splice(randomIndexInRange, 1);
    // if the unknown words array slowly goes towards empty refill
    if (wordArrLen < 4) {
      this.getBatchOfWords();
    }
    return item;
  }


  randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)]



  newWord = () => {
    /* 50 50 chance to get a new word from api or seen word from array
    TODO maybe play with probability */
    const mode = Math.round(Math.random());
    const previousWord = this.state.currentWord;
    this.currentMode = mode;
    if (mode === 1 || !this.seenWords || this.seenWords.length < 1) {
      this.setState({
        prevWord: previousWord,
        currentWord: this.randomUnknownWord(),
      })
    } else {
      this.setState({
        prevWord: previousWord,
        currentWord: this.randomArrayItem(this.seenWords),
      })
    }
  }
  seenNew = (event) => {
    /* if answer is 1 (new word) and word is not inside seen words 
    or answer 0 (seen word) and word is inside seenWords increase score */
    const wordSeen = this.seenWords.includes(this.state.currentWord);
    const answerSeen = 1 === parseInt(event.target.value);
    if ((answerSeen && !wordSeen) || (!answerSeen && wordSeen)) {
      this.setState({
        score: this.state.score + this.scoreValue,
        animated: !this.state.animated,
      })
    }
    else {
      /* else check if game is other once player loses a life */
      this.state.lifes > 0 ?
        this.setState({
          lifes: this.state.lifes - 1,
          animated: !this.state.animated
        }) :
        this.setState({ gameOver: true/* ,getNewWord: true */ })
    }
    this.wordHistory.push(this.state.currentWord)
    if (!wordSeen) {
      this.seenWords.push(this.state.currentWord)
    }

    this.newWord()


  }
  restartGame = async () => {
    this.seenWords = []
    this.currentMode = 1
    this.wordHistory = []
    this.wordsArray = []
    await this.getBatchOfWords();
    this.setState({
      gameOver: false,
      lifes: 5,
      score: 0,
      currentWord: this.randomUnknownWord(),
      prevWord: ''
    })
  }

  render() {
    return (
      <>
        <div id="wordGameContainer" className={'fullContainer inner gradientBackground noUserSelect flexColumnCenter'}>
          {/* after game block */}
          {this.state.gameOver ?
            <SaveScore currentPath={this.props.location.pathname} gameName={'word'} gameScore={this.state.score} restart={this.restartGame} />

            :

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

              <div id='gameButtonContainer'>
                <button onClick={this.seenNew} value={1} className={'mainButton hoverPush'}>NEW</button>
                <button onClick={this.seenNew} value={0} className={'mainButton hoverPush'}>SEEN</button>
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
