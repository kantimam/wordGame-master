import React, { useState, memo, useEffect } from 'react'
import './userTab.css'
import axios from 'axios'
import { useStateValue } from '../context/AppContextHook';
import LogInForm from './logInForm.jsx';
import SignUpForm from './signUpForm.jsx';
import ConfirmMailForm from './confirmMailForm.jsx';
import ResetPasswordForm from './resetPasswordForm.jsx';
import NewPasswordForm from './newPasswordForm.jsx';
import { Route, Switch, useHistory } from 'react-router'
const BASEURL = process.env.REACT_APP_BE_URL;

const LogSignForm = ({ close }) => {
  const {push}=useHistory();
  const [logForm, setLogForm] = useState(
    {
      userName: '',
      password: '',
      passwordRe: '',
      email: ''
    }
  )



  const [confirmMail, setConfirmMail] = useState(false);
  const [confirm, setConfirm] = useState({ message: '' });

  const [, dispatch] = useStateValue();

  const [error, setError] = useState("");


  useEffect(() => {
    dispatch({type: "blockScroll"})
    return () => {
      dispatch({type: "unblockScroll"})
    };
  }, [])


  const onChange = (event) => {
    const updatedState = { ...logForm, [event.target.name]: event.target.value }
    setLogForm(updatedState)
  }

  const signUp = (event) => {
    event.preventDefault();
    if (logForm.password === logForm.passwordRe) {
      const formData = new FormData();
      formData.set('userName', logForm.userName)
      formData.set('email', logForm.email)
      formData.set('password', logForm.password)

      axios.post(`${BASEURL}/signup`, formData/* , {withCredentials: true} */).then(res => {
        if(!res.data || !res.data.message || !res.data.sendAgainPath){
          throw new Error("server failed to confirm your mail")
        }
        setConfirmMail(res.data.sendAgainPath)
        setConfirm(res.data.message);
      }).catch(error => {
        setError("something went wrong")
        setTimeout(() => setError(""), 4000);
      })
    }
    else {
      setError("please check your password")
      setTimeout(() => setError(""), 4000);
    }

  }

  const sendAgain = (event) => {
    event.preventDefault();
    if(!confirmMail || !confirm) return alert("looks like the server fucked up! :(")

    axios.get(`${BASEURL}/confirmagain/${confirmMail}`).then(res => {
      setConfirm({ ...confirm, sent: "WAS SENT" });

      setTimeout(() => {
        const { message, sendAgainPath } = confirm;
        setConfirm({ message, sendAgainPath })
      }, 3000);

    }).catch(error => {
      setConfirm({ ...confirm, sent: "FAILED" });
      setTimeout(() => {
        const { message, sendAgainPath } = confirm;
        setConfirm({ message, sendAgainPath })
      }, 3000);
    })
  }


  const logIn = (event) => {
    event.preventDefault();
    if (logForm.email.length > 2 && logForm.password.length > 5) {
      const formData = new FormData();
      formData.set('email', logForm.email)
      formData.set('password', logForm.password)
      axios.post(`${BASEURL}/login`, formData, { withCredentials: true }).then(res => {
        if (res.data.user) {
          dispatch({
            type: 'logIn',
            payload: res.data.user
          })
          // get rid of /login and return to prev path
          close();
        }
      }).catch((error) => {
        if (error.response && error.response.status === 403) {
          if(!error.res.data || !error.res.data.message || !error.res.data.sendAgainPath){
            return alert("server failed to confirm your mail")
          }
          setConfirmMail(error.res.data.sendAgainPath)
          setConfirm(error.res.data.message);
        }
        else {
          setError("wrong email or password")
          setTimeout(() => setError(""), 4000);
        }
      })
    }

  }

  const resetPassword = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set('email', logForm.email)
    axios.post(`${BASEURL}/resetpassword`, formData, { withCredentials: true }).then(res => {
      setConfirm({ message: "succesfully sent" })
      setTimeout(() => setConfirm({ message: "" }), 10000);
    }).catch((error) => {
      setError("email not found")
      setTimeout(() => setError(""), 4000);
    })

  }

  const sendNewPassword = (key, email) => {
    if (key && email && logForm.password && logForm.password === logForm.passwordRe) {
      const formData = new FormData();
      formData.set('password', logForm.password);
      formData.set('key', key);
      formData.set('email', email);
      axios.post(`${BASEURL}/createnewpassword`, formData).then(res => {
        /* go to log in and give them a succes message */
        setConfirm({ message: "SUCCESFULLY CREATED" })
        setTimeout(() => setConfirm({ message: "" }), 5000);
        push('login')
      }).catch((error) => {
        setError("failed")
        setTimeout(() => setError(""), 4000);
      })
    }

  }

  if (confirmMail) {
    return (
      <ConfirmMailForm sendAgain={sendAgain} confirm={confirm} />
    )
  }

  return (
    <div className={`logSignContainer gradientBackground ${error ? "animationShake" : ""}`}>
      {error && <p className={"errorMessage"}>{error}</p>}
      <Switch>
        <Route path="*/login" render={() => <LogInForm onSubmit={logIn} onChange={onChange} confirm={confirm.message}/>} />
        <Route path="*/signup" render={() => <SignUpForm onSubmit={signUp} onChange={onChange} />} />
        <Route path="*/resetpassword" render={() => <ResetPasswordForm onSubmit={resetPassword} onChange={onChange} confirm={confirm.message} />} />
        <Route path="*/createnewpassword/:key/:email" render={() => <NewPasswordForm onChange={onChange} onSubmit={sendNewPassword} />} />
      </Switch>
    </div>
  )

}

export default memo(LogSignForm)
