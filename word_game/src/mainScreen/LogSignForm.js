import React, { Component } from 'react'
import './userTab.css'
import axios from 'axios'
const BASEURL=process.env.REACT_APP_BE_URL;

export default class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInState: 1,
         userName:'',
         password:'',
         passwordRe:'',
         email: '',
      }
    }
  signUp=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.set('userName',this.state.userName)
    formData.set('email',this.state.email)
    formData.set('password',this.state.password)

    axios.post(`${BASEURL}/user/create`,formData).then(res=>{
      console.log(res.data)
      this.setState({logInState:0})
      this.props.confirm(res.data.message+res.data.data||`user <${this.state.userName}> created succesfully!`)
    }).catch(error=>{
      console.log(error)
      this.props.confirm(`SOMETHING WENT WRONG :(`)
    })
  }
  logIn=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.set('userName',this.state.userName)
    formData.set('email',this.state.email)
    formData.set('password',this.state.password)
    axios.post(`${BASEURL}/login`,formData).then(res=>{
      console.log(res.data)
      this.props.confirm(res.data.message||`<${this.state.userName}> logged in!`)
      this.props.logIn()
      this.setState({logInState:2})
    }).catch((error)=>{
      console.log(error)
      this.props.confirm(`wrong username or password`)
    })
  }
  onChange=(event)=>{
    event.preventDefault();
    const name=event.target.name;
    this.setState({[name]:event.target.value})
    console.log(this.state)
  }

  render() {
    console.dir(BASEURL)
    return (
      <div id='logSignContainer'>
        {this.state.logInState?
          <div onClick={()=>this.setState({logInState: 0})}>ALREADY HAVE AN ACCOUNT? <strong>LOG IN!</strong></div>:
          <div onClick={()=>this.setState({logInState: 1})}>NO ACCOUNT? <strong>SIGN UP</strong></div>
        }
        {this.state.logInState===0 &&
        <form onSubmit={this.logIn} className={'logInForm'}>
          <p>LOG IN</p>
          <input onChange={this.onChange} name='userName' placeholder='email or username' type='text'></input>
          <input onChange={this.onChange} name='password' placeholder='password' type='password'></input>
          <input className={'submitButton'} type='submit'></input>        
        </form>}
        {this.state.logInState===1 &&
        <form onSubmit={this.signUp} className={'logInForm'}>
          <p>SIGN UP</p>
          <input onChange={this.onChange} name='userName' placeholder='username' type='text'></input>
          <input onChange={this.onChange} name='email' placeholder='email' type='text'></input>
          <input onChange={this.onChange} name='password' placeholder='password' type='password'></input>
          <input onChange={this.onChange} name='passwordRe' placeholder='repeat password' type='password'></input>      
          <input className={'submitButton'} type='submit'></input>             
        </form>}
        {this.state.logInState===2 &&
        <div>
               
        </div>}
      </div>
    )
  }
}
