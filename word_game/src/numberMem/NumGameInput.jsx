import React from 'react'

const NumGameInput = ({onSubmit,onChange,inputVal}) => {
    return (
        <form 
          /* onSubmit={()=>this.startRound(this.state.number)} */ 
          className={'margin0Auto'}
          onSubmit={onSubmit}
        >
          <input
            className={'numInput'} 
            value={inputVal} 
            onChange={onChange} 
            type='number' 
            /* placeholder='remember the number?' */>
          </input>

          <input id='numSubmit' className={'roundedButton hoverPush'} type='submit' value='SEND'/>
        </form>
    )
}

export default NumGameInput
