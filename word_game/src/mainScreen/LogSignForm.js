import React, { useState } from 'react'
import './userTab.css'
import axios from 'axios'
import { useStateValue } from '../context/AppContextHook';
const BASEURL=process.env.REACT_APP_BE_URL;

const LogSignForm=({currentPath, close})=> {
  const modes=Object.freeze({
    logIn: 0,
    signUp: 1,
    confirmMail: 2,
    resetPassword: 3,
    createNewPassword: 4
  })

  const [logForm, setLogForm]=useState(
    {
      userName:'',
      password:'',
      passwordRe:'',
      email: ''
    }
  )

  const modeFromPath=()=>currentPath.split("/").includes("login")? modes.logIn:  modes.signUp;
   

  const [formMode, setFormMode]=useState(modeFromPath());
  const [confirm, setConfirm]=useState({message: ``});

  const [{user}, dispatch ]=useStateValue();

  const [error, setError]=useState("");



  const onChange=(event)=>{
    const updatedState={...logForm, [event.target.name]: event.target.value}
    setLogForm(updatedState)
  }

  const signUp=(event)=>{
    event.preventDefault();
    if(logForm.password===logForm.passwordRe){
      const formData=new FormData();
      formData.set('userName',logForm.userName)
      formData.set('email',logForm.email)
      formData.set('password',logForm.password)
  
      axios.post(`${BASEURL}/signup`,formData/* , {withCredentials: true} */).then(res=>{
        setFormMode(modes.confirmMail)
        setConfirm(res.data);
      }).catch(error=>{
        setError("something went wrong")
        setTimeout(()=>setError(""),4000);
      })
    }
    else{
      setError("please check your password")
      setTimeout(()=>setError(""),4000);
    }
    
  }

  const sendAgain=(event, sendAgainPath)=>{
    event.preventDefault();
    axios.get(`${BASEURL}/${sendAgainPath}`).then(res=>{
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
    })
  }


  const logIn=(event)=>{
    event.preventDefault();
    if(logForm.email.length>2 && logForm.password.length>5){
      const formData=new FormData();
      formData.set('email',logForm.email)
      formData.set('password',logForm.password)
      axios.post(`${BASEURL}/login`,formData, {withCredentials: true}).then(res=>{
        if(res.data.user){
          dispatch({
            type: 'logIn',
            payload: res.data.user
          })
          // get rid of /login and return to prev path
          close();
        }
      }).catch((error)=>{
        if(error.response && error.response.status===403){
          setFormMode(modes.confirmMail)
          setConfirm(error.response.data);
        }
        else{
          setError("wrong email or password")
          setTimeout(()=>setError(""),4000);
        }
      })
    }
    
  }

  const resetPassword=(event)=>{
    event.preventDefault();

    const formData=new FormData();
      formData.set('email',logForm.email)
      axios.post(`${BASEURL}/resetpassword`,formData, {withCredentials: true}).then(res=>{
        console.log(res.data);
        setConfirm({message: "succesfully sent"})
        setTimeout(()=>setConfirm({message: ""}),10000);
      }).catch((error)=>{
        setError("email not found")
        setTimeout(()=>setError(""),4000);
      })
    
  }

  const sendNewPassword=()=>{

  }

    if(formMode===modes.confirmMail){
      return(
        <div className='logSignContainer confirmMail gradientBackground'>
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
      <div className={`logSignContainer gradientBackground ${error? "animationShake":""}`}>
        {error&&<p className={"errorMessage"}>{error}</p>}

        {formMode===modes.logIn &&
        <form onSubmit={logIn} className={'logInForm'}>
          <h3>LOG IN</h3>
          <input onChange={onChange} name='email' placeholder='email or username' type='email' minLength="2" required></input>
          <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
          <div onClick={()=>setFormMode(modes.resetPassword)} className={"resetPassword pointer"}>reset password</div>
          <input className={'submitButton'} type='submit'></input>        
        </form>}

        {formMode===modes.signUp &&
        <form onSubmit={signUp} className={'logInForm'}>
          <h3>SIGN UP</h3>
          <input onChange={onChange} name='userName' placeholder='username' type='text' minLength="2" required></input>
          <input onChange={onChange} name='email' placeholder='email' type='email' minLength="2" required></input>
          <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
          <input onChange={onChange} name='passwordRe' placeholder='repeat password' type='password' minLength="6" required></input>      
          <input className={'submitButton'} type='submit'></input>             
        </form>}

        {formMode===modes.resetPassword &&
        <form onSubmit={resetPassword} className={'logInForm'}>
          <h3>{confirm.message || "SEND RESET LINK TO"}</h3>
          <input onChange={onChange} name='email' placeholder='email or username' type='email' minLength="2" required></input>
          <input className={'submitButton'} type='submit' value="SEND"></input>        
        </form>}

        {formMode===modes.createNewPassword &&
        <form onSubmit={sendNewPassword} className={'logInForm'}>
          <h3>CREATE NEW PASSWORD</h3>
          <input onChange={onChange} name='userName' placeholder='username' type='text' minLength="2" required></input>
          <input onChange={onChange} name='email' placeholder='email' type='email' minLength="2" required></input>
          <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
          <input onChange={onChange} name='passwordRe' placeholder='repeat password' type='password' minLength="6" required></input>      
          <input className={'submitButton'} type='submit'></input>        
        </form>}
        
        {formMode===modes.signUp&&<div className="logSignSwitch" onClick={()=>setFormMode(modes.logIn)}>ALREADY HAVE AN ACCOUNT? <strong>LOG IN!</strong></div>}
        {formMode===modes.logIn&&<div className="logSignSwitch" onClick={()=>setFormMode(modes.signUp)}>NO ACCOUNT? <strong>SIGN UP</strong></div>}
      </div>
    )
  
}

export default LogSignForm
