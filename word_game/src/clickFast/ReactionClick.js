import React, { Component } from 'react'
import './clickFast.css'

export default class ReactionClick extends Component {
    constructor(props) {
        super(props)
        this.colors=["lightblue","green","red"];
        this.startTime=0;        
        this.state = {
            message: 'click when the color changes to green',
            reaction: 0,
            resetWait: false
        }
    }
    changeColor=(timeRange)=>{
        this.setState({
            message: 'click when the color changes to green',
            reaction: 0,
            resetWait: false 
        })
        
            const minWait=timeRange[0] || 0;
            const maxWait=timeRange[1] || 5;
            const waitTime=(Math.random()*(maxWait-minWait)+minWait)*1000;
            setTimeout(()=>{
            if(this.state.reaction===0){
                this.setState({
                    reaction: 1
                },()=>this.startTime=Date.now())}
            },waitTime)
        
        
    }
    componentDidMount(){
        // change color in 2-6 seconds
        this.changeColor([2,6])
    }
    checkReaction=()=>{
        if(!this.state.resetWait){
            if(this.state.reaction===1){
                const reactionTime=Date.now()-this.startTime;
                this.setState({
                    resetWait: true,
                    message: `good job! your time is: ${reactionTime} ms`
                })
            }else if(this.state.reaction===0){
                this.setState({
                    resetWait: true,
                    message: `you clicked to early try again! :)`,
                    reaction: 2
                })
            }
        }else{
            this.changeColor([2,6]);
        }
        
    }

    
    render() {
        const {message,reaction}=this.state;
        return (
            <div onClick={this.checkReaction} style={{backgroundColor:this.colors[reaction]}} className={'clickFastComp centerAll'}>
                <h1>{message}</h1>
            </div>
        )
    }
}
