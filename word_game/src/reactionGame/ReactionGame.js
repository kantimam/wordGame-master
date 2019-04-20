import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './reactionGame.css'
import FancyBlock from './FancyBlock.js'
import PreGame from './PreGame.js'
import Tone from 'tone'
import GameUi from './GameUi';

let fps=4, fpsInterval=0, startTime=0, now=0, then=0, elapsed=0
let synth= new Tone.MembraneSynth().toMaster();
const noteArr=['A2','A3','A4','A5','A6','C2','C3','C4','C5','C6']
const noteLen=['2n','16n','8n','12n','4n']
const lvlTrans=[5,10,25,50]

export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.initialBlocks=[
        {x:0,y:0,speed: 3,len:20,alive: true},
        {x:40,y:20,len:40,speed: 2,alive: true},
        {x:70,y:20,len:30,speed: 3,alive: true},
        {x:10,y:20,len:10,speed: 3,alive: true},
        {x:90,y:40,len:30,speed: 3,alive: true},
        {x:50,y:0,len:20,speed: 3,alive: true},]
      
      this.state = {
         blocks:this.initialBlocks,

         gameRunning: false,
         score: 0,
         speed: 0
      }
    }
  updateLvl=()=>{
    this.initialBlocks.push({
      x: 10*(Math.floor(Math.random()*10)),
      y: 10*(Math.floor(Math.random()*-8)),
      len: 30,
      speed: 4,
      alive: true
    })
    if(this.state.score>lvlTrans[this.state.speed]){
      this.setState({speed: this.state.speed+1})
    }
  }
  clickBlock=(i)=>{
    let prevBlock=this.state.blocks;
    const note=noteArr[this.initialBlocks[i].x/10]
    const noteL=noteLen[this.state.speed]
    const speed=this.initialBlocks[i].speed
    this.initialBlocks.splice(i,1)
    this.updateLvl()
    this.playSound(note,noteL)
    this.setState(
      {blocks: this.initialBlocks,
      score: this.state.score+speed})
  }
  changeScore=(value)=>{
    this.setState({score: this.state.score+value})
  }
  playSound=(note, len)=>{
    synth.triggerAttackRelease(note||"C4", len||"8n");
  }
  startGame=(FPS)=>{
    this.setState({gameRunning: !this.state.gameRunning},()=>{
      if(this.state.gameRunning){
        fpsInterval=1000/fps;
        then=Date.now();
        startTime=then;
        this.runGame();
      }
    })
    
  }
  updateGame=()=>{
    this.initialBlocks.forEach(element => {
      element.y=element.y+element.speed;
      if(element.y+element.len>=100){
        element.alive=false;
        element.speed=0;
      }
    });
    this.setState({blocks: this.initialBlocks})
  }
  runGame=()=>{
    if(this.state.gameRunning){
      requestAnimationFrame(this.runGame);
      now = Date.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        this.updateGame();
      }
   }
  }
  render() {
    return (
      <div className={'centerAll maxWidth36 overflowHidden'}>
        <GameUi score={this.state.score} speed={this.state.speed}></GameUi>
        <div id='reactionGame' className={'minHeight24 overflowHidden'}>
          {!this.state.gameRunning && <PreGame startGame={this.startGame}/>}
          {this.state.gameRunning && this.state.blocks.map((block,index)=><FancyBlock click={this.clickBlock} index={index} key={index} pos={block}/>)}
        </div>
      </div>
    )
  }
}
