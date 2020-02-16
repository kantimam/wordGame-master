import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//import Games from './gameContainer/Games.js'
import Home from './startpage/Home.js'
/* import User from './loggedIn/User.js' */
import Navigation from './startpage/Navigation.js'
/* import ConfirmComp from './components/ConfirmComp.js' */
import FloatingContainer from './startpage/floatingContainer.jsx';
/* import LogSign from './logSignForm/LogSignForm'; */
import { useStateValue } from './context/AppContextHook';
/* import MainScreen from './mainScreen/MainScreen.js' */
import WelcomeBanner from './startpage/WelcomeBanner';

const Games=React.lazy(()=> import('./gameContainer/Games.js'));
const MainScreen=React.lazy(()=> import('./mainScreen/MainScreen.js'));
const User=React.lazy(()=> import('./loggedIn/User.js')); 
const LogSign=React.lazy(()=> import('./logSignForm/LogSignForm')); 


const App = () => {
  const [{ user, loggedIn, overflowHidden }, dispatch] = useStateValue();

  useEffect(() => {
    // check if we have userdata in local storage if so recover state from it
    const storedUser = localStorage.getItem('monkeyGameSession');
    if (storedUser && storedUser!=="{}") {
      dispatch({ type: 'logIn', payload: JSON.parse(storedUser) })
    } else {
      const guestUser=localStorage.getItem('monkeyGameGuestSession');
      if(guestUser && guestUser!=="{}") dispatch({ type: 'createGuest', payload: JSON.parse(guestUser) })
      else dispatch({
        type: 'createGuest', payload: {
          type: "guest", name: "Guest", email: null, scores: {
            word: 0,
            react: 0,
            number: 0
          }
        }
      })
    }
  }, [])

  const stateLocalStore = (event) => {
    /* save user data to local storage */
    event.preventDefault();
    if(user){
      if (loggedIn && user.email) {
        localStorage.setItem('monkeyGameSession', JSON.stringify(user));
      }
      else localStorage.setItem('monkeyGameGuestSession', JSON.stringify(user));
    }
    
  }

  useEffect(() => {
    // update beforeunload event with new data from user state
    window.addEventListener('beforeunload', stateLocalStore);
    return () => {
      window.removeEventListener('beforeunload', stateLocalStore)
    }
  }, [user])

  const closeLogIn = (history) => {
    const removeAccountModal = history.location.pathname.split("/account");
    history.push(removeAccountModal[0] || "/")
  }

  return (
    <div className={overflowHidden? "App overflowHidden" : "App"}>
      <Route component={Navigation} />
      {/* {false &&
        <ConfirmComp
          message={"this.state.message"}
          close={"()=>this.setState({confirmOpen: false})"}
        />
      } */}
      <Route path='*/account' render={({ history, match }) =>
        <FloatingContainer close={() => closeLogIn(history)}>
          <LogSign
            history={history}
            close={() => closeLogIn(history)}
          />
        </FloatingContainer>
      } />


      <Switch>
        <Route path='/user:id' component={User} />
        <Route path='/games' component={Games} />
        <Route path='/dashboard' render={() => <MainScreen loggedIn={loggedIn} user={user}/>} />
        <Route path='/welcome' render={()=><Home><WelcomeBanner/></Home>} />
        <Route path='/' render={()=><Home><WelcomeBanner/></Home>} />
      </Switch>
    </div>
  )
}

export default App


