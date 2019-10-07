import React, { useState } from 'react'
import './userTab.css'
import axios from 'axios'
import { useStateValue } from '../context/AppContextHook';
const BASEURL=process.env.REACT_APP_BE_URL;

const LogSignForm=({currentPath, close})=> {
  
  const [logForm, setLogForm]=useState(
    {
      userName:'',
      password:'',
      passwordRe:'',
      email: ''
    }
  )

  const modeFromPath=()=>currentPath.split("/").includes("login")? 0:  1;
   

  const [formMode, setFormMode]=useState(modeFromPath());
  const [confirm, setConfirm]=useState({message: `confirmation mail sent to kantemir.imam@gmail.com`});

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
      setFormMode(2)
      setConfirm(res.data);
      //this.props.confirm(res.data.message+res.data.data||`user <${logForm.userName}> created succesfully!`)
    }).catch(error=>{
      console.log(error)
      //this.props.confirm(`SOMETHING WENT WRONG :(`)
    })
  }

  const sendAgain=(event, sendAgainPath)=>{
    event.preventDefault();
    axios.get(`${BASEURL}/${sendAgainPath}`).then(res=>{
      console.log(res.data)
      setConfirm({...confirm, sent: "WAS SENT"});
      setTimeout(()=>{
        const {message, sendAgainPath}=confirm;
        setConfirm({message, sendAgainPath})
      },3000);
    }).catch(error=>{
      setConfirm({...confirm, sent: "FAILED"});
      setTimeout(()=>{
        const {message, sendAgainPath}=confirm;
        setConfirm({message, sendAgainPath})
      },3000);
      console.log(error)
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
        close();
      }
    }).catch((error)=>{
      console.log(error)
      //this.props.confirm(`wrong username or password`)
    })
  }
    if(formMode===2){
      return(
        <div className='logSignContainer confirmMail'>
          <h3>{confirm.message}</h3>
          <div className={"sendAgain"}>
            nothing received? 
            {confirm.sent?
              <div 
                id="sendAgainButton" 
                className={'submitButton'}>
                {confirm.sent}
              </div>:
              <div 
                onClick={(event)=>sendAgain(event, confirm.sendAgainPath)} 
                id="sendAgainButton" 
                className={'submitButton'}>
                SEND AGAIN
              </div>
            }
          </div>
        </div>
      )
    }

    return (
      <div className='logSignContainer'>
        
        {formMode===0 &&
        <form onSubmit={logIn} className={'logInForm'}>
          <h3>LOG IN</h3>
          <input onChange={onChange} name='email' placeholder='email or username' type='text'></input>
          <input onChange={onChange} name='password' placeholder='password' type='password'></input>
          <input className={'submitButton'} type='submit'></input>        
        </form>}
        {formMode===1 &&
        <form onSubmit={signUp} className={'logInForm'}>
          <h3>SIGN UP</h3>
          <input onChange={onChange} name='userName' placeholder='username' type='text'></input>
          <input onChange={onChange} name='email' placeholder='email' type='text'></input>
          <input onChange={onChange} name='password' placeholder='password' type='password'></input>
          <input onChange={onChange} name='passwordRe' placeholder='repeat password' type='password'></input>      
          <input className={'submitButton'} type='submit'></input>             
        </form>}
        {formMode?
          <div className="logSignSwitch" onClick={()=>setFormMode(0)}>ALREADY HAVE AN ACCOUNT? <strong>LOG IN!</strong></div>:
          <div className="logSignSwitch" onClick={()=>setFormMode(1)}>NO ACCOUNT? <strong>SIGN UP</strong></div>
        }
      </div>
    )
  
}

export default LogSignForm
