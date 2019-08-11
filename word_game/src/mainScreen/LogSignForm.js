import React, { useState } from 'react'
import './userTab.css'
import axios from 'axios'
import { useStateValue } from '../context/AppContextHook';
const BASEURL=process.env.REACT_APP_BE_URL;

const LogSignForm=({history})=> {
  
  const [logForm, setLogForm]=useState(
    {
      userName:'',
      password:'',
      passwordRe:'',
      email: ''
    }
  )

  const [formMode, setFormMode]=useState(1);

  const [{user}, dispatch ]=useStateValue();

  const onChange=(event)=>{
    const updatedState={...logForm, [event.target.name]: event.target.value}
    setLogForm(updatedState)
  }

  const signUp=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.set('userName',logForm.userName)
    formData.set('email',logForm.email)
    formData.set('password',logForm.password)

    axios.post(`${BASEURL}/signup`,formData/* , {withCredentials: true} */).then(res=>{
      console.log(res.data)
      setFormMode(0)
      //this.props.confirm(res.data.message+res.data.data||`user <${logForm.userName}> created succesfully!`)
    }).catch(error=>{
      console.log(error)
      //this.props.confirm(`SOMETHING WENT WRONG :(`)
    })
  }
  const logIn=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    //formData.set('userName',logForm.userName)
    formData.set('email',logForm.email)
    formData.set('password',logForm.password)
    //axios.defaults.withCredentials=true;
    axios.post(`${BASEURL}/login`,formData, {withCredentials: true}).then(res=>{
      console.log(res.data)
      //this.props.confirm(res.data.message||`<${logForm.userName}> logged in!`)
      //setFormMode(2)
      if(res.data.user){
        dispatch({
          type: 'logIn',
          payload: res.data.user
        })
        // get rid of /login and return to prev path
        history.goBack();
      }
    }).catch((error)=>{
      console.log(error)
      //this.props.confirm(`wrong username or password`)
    })
  }

  
    return (
      <div id='logSignContainer'>
        {formMode?
          <div onClick={()=>setFormMode(0)}>ALREADY HAVE AN ACCOUNT? <strong>LOG IN!</strong></div>:
          <div onClick={()=>setFormMode(1)}>NO ACCOUNT? <strong>SIGN UP</strong></div>
        }
        {formMode===0 &&
        <form onSubmit={logIn} className={'logInForm'}>
          <p>LOG IN</p>
          <input onChange={onChange} name='email' placeholder='email or username' type='text'></input>
          <input onChange={onChange} name='password' placeholder='password' type='password'></input>
          <input className={'submitButton'} type='submit'></input>        
        </form>}
        {formMode===1 &&
        <form onSubmit={signUp} className={'logInForm'}>
          <p>SIGN UP</p>
          <input onChange={onChange} name='userName' placeholder='username' type='text'></input>
          <input onChange={onChange} name='email' placeholder='email' type='text'></input>
          <input onChange={onChange} name='password' placeholder='password' type='password'></input>
          <input onChange={onChange} name='passwordRe' placeholder='repeat password' type='password'></input>      
          <input className={'submitButton'} type='submit'></input>             
        </form>}
        {formMode===2 &&
        <div>
               
        </div>}
      </div>
    )
  
}

export default LogSignForm
