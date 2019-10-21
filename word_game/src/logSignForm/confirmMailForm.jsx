import React from 'react'

const confirmMailForm = ({sendAgain, confirm}) => {
    return (
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
                onClick={sendAgain} 
                id="sendAgainButton" 
                className={'submitButton'}>
                SEND AGAIN
              </div>
            }
          </div>
        </div>
    )
}

export default confirmMailForm
