import React, { useState } from 'react'
import './userTab.css'
import axios from 'axios'
import { useStateValue } from '../context/AppContextHook';
import LogInForm from './logInForm.jsx';
import SignUpForm from './signUpForm.jsx';
import ConfirmMailForm from './confirmMailForm.jsx';
import ResetPasswordForm from './resetPasswordForm.jsx';
import NewPasswordForm from './newPasswordForm.jsx';
import {Route, Switch} from 'react-router'
const BASEURL=process.env.REACT_APP_BE_URL;

const LogSignForm=({close})=> {

  const [logForm, setLogForm]=useState(
    {
      userName:'',
      password:'',
      passwordRe:'',
      email: ''
    }
  )

   

  const [confirmMail, setConfirmMail]=useState(false);
  const [confirm, setConfirm]=useState({message: ``});

  const [, dispatch ]=useStateValue();

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
        setConfirmMail(true)
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
          setConfirmMail(true)
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

    if(confirmMail){
      return (
        <ConfirmMailForm sendAgain={sendAgain} confirm={confirm}/>
      )
    }

    return (
      <div className={`logSignContainer gradientBackground ${error? "animationShake":""}`}>
        {error&&<p className={"errorMessage"}>{error}</p>}
        <Switch>
          <Route path="*/login" render={()=><LogInForm onSubmit={logIn} onChange={onChange} />}/>
          <Route path="*/signup" render={()=><SignUpForm onSubmit={signUp} onChange={onChange}/>}/>
          <Route path="*/resetpassword" render={()=><ResetPasswordForm onSubmit={resetPassword} onChange={onChange} confirmStatus={confirm.message}/>}/>
          <Route path="*/newpassword" render={()=><NewPasswordForm onChange={onChange} onSubmit={sendNewPassword}/>}/>
        </Switch>
      </div>
    )
  
}

export default LogSignForm
