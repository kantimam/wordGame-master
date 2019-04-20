import React, { Component } from 'react'
import './userTab.css'
import axios from 'axios'

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
    /* let formData=new FormData();
    formData.set('userName',this.state.userName)
    formData.set('email',this.state.email)
    formData.set('password',this.state.password) */
    let data=
      {
        userName:this.state.userName,
        email:this.state.email,
        password:this.state.password
      }
    axios.post('http://localhost:5000/user/add',data).then(res=>{
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
    let data=
      {
        userName:this.state.userName,
        email:this.state.email,
        password:this.state.password
      }
    axios.post('http://localhost:5000/login',data).then(res=>{
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
    return (
      <div id='userContainer'>
        {this.state.logInState===0 &&
        <form onSubmit={this.logIn} className={'logInForm'}>
          <p>log in</p>
          <input onChange={this.onChange} name='userName' placeholder='email or username' type='text'></input>
          <input onChange={this.onChange} name='password' placeholder='password' type='password'></input>
          <input className={'submitButton'} type='submit'></input>        
        </form>}
        {this.state.logInState===1 &&
        <form onSubmit={this.signUp} className={'logInForm'}>
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
