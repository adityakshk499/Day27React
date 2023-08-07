import React from 'react'
import { useReducer } from 'react'


const initialState = 0

function reducer (state , action){

    switch (action) {
        case "Increment":
            return state + 1 
        case "Decrement":
            return state - 1
        case "Reset":
            return initialState ;     
        default:
            return state
        
    }

}

const UseReducer = () => {
     const [count , dispatch] = useReducer(reducer , initialState)
     console.log(dispatch)
  return (
    <div>
        <h1>{count}</h1>
        <button  onClick={() => dispatch('Increment') }>Increment</button>
        <button onClick={() => dispatch('Decrement')}>Decrement</button>
        <button onClick={()=> dispatch("Reset")}>Reset</button>

    </div>
  )
}

export default UseReducer