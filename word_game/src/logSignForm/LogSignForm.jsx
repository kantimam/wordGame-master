import React, { useState } from 'react'
import './userTab.css'
import axios from 'axios'
import { useStateValue } from '../context/AppContextHook';
import LogInForm from './logInForm.jsx';
import SignUpForm from './signUpForm.jsx';
import ConfirmMailForm from './confirmMailForm.jsx';
import ResetPasswordForm from './resetPasswordForm.jsx';
import NewPasswordForm from './newPasswordForm.jsx';
import confirmMailForm from './confirmMailForm.jsx';
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
      return <confirmMailForm sendAgain={sendAgain} confirm={confirm}/>
    }

    return (
      <div className={`logSignContainer gradientBackground ${error? "animationShake":""}`}>
        {error&&<p className={"errorMessage"}>{error}</p>}

        {formMode===modes.logIn && <LogInForm onSubmit={logIn} onChange={onChange} resetPassword={()=>setFormMode(modes.resetPassword)} signUp={()=>setFormMode(modes.signUp)}/>}

        {formMode===modes.signUp && <SignUpForm onSubmit={signUp} onChange={onChange} logIn={()=>setFormMode(modes.logIn)}/>}

        {formMode===modes.resetPassword && <ResetPasswordForm onSubmit={resetPassword} onChange={onChange} confirmStatus={confirm.message}/>}

        {formMode===modes.createNewPassword && <NewPasswordForm onChange={onChange} onSubmit={sendNewPassword}/>}
        
      </div>
    )
  
}

export default LogSignForm
