import React, { Component } from 'react'
import SaveScore from '../components/SaveScore.jsx';
import './clickFast.css'
import Description from '../components/Description.jsx';

export default class ReactionClick extends Component {
    constructor(props) {
        super(props)
        this.colors=["lightblue","green","red"];
        this.startTime=0;
        this.timeOutRef=0;        
        this.state = {
            message: 'click when the color changes to green',
            gameState: 0,
            resetWait: false,
            playing: true,
            reactionTime: 0
        }
    }
    changeColor=(timeRange)=>{
        this.setState({
            message: 'click when the color changes to green',
            gameState: 0,
            resetWait: false ,
            playing: true
        })
        
            const minWait=timeRange[0] || 0;
            const maxWait=timeRange[1] || 5;
            const waitTime=(Math.random()*(maxWait-minWait)+minWait)*1000;
            this.timeOutRef=setTimeout(()=>{
            if(this.state.gameState===0){
                this.setState({
                    gameState: 1
                },()=>this.startTime=Date.now())}
            },waitTime)
        
        
    }
    componentDidMount(){
        // change color in 2-6 seconds
        this.changeColor([2,6])
    }
    componentWillUnmount(){
        clearTimeout(this.timeOutRef)
    }
    checkReaction=()=>{
        if(!this.state.resetWait){
            if(this.state.gameState===1){
                const reactionTime=Date.now()-this.startTime;
                this.setState({
                    resetWait: true,
                    reactionTime: reactionTime,
                    message: `good job! your time is: ${reactionTime} ms`,
                    playing: false
                })
            }else if(this.state.gameState===0){
                this.setState({
                    resetWait: true,
                    message: `you clicked to early try again! :)`,
                    gameState: 2,
                    /* playing: false */
                })
            }
        }else{
            this.changeColor([2,6]);
        }
        
    }

    
    render() {
        const {message,gameState,playing, reactionTime}=this.state;
        return (
            <>
                {playing?<div onClick={this.checkReaction} style={{backgroundColor:this.colors[gameState]}} className={'clickFastComp centerAll'}>
                    <h1>{message}</h1>
                </div>:
                <div style={{backgroundColor:this.colors[gameState]}} className={'clickFastComp centerAll'}>
                    <SaveScore restart={()=>this.changeColor([2,6])} currentPath={this.props.location.pathname} gameName={'reaction'} gameScore={reactionTime} unit={"ms"}/>
                </div>
                }
                <Description
                    header={""}
                    text={""}
                    gameName="reaction"
                />

            </>
        )
    }
}
