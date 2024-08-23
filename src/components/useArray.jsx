import React,{useState} from 'react'

function useArray() {
    const[state,setState]=useState([])
    const func =(value)=>{
        state.push(value)
        setState([...state])
    }
  return {state,func}
}

export default useArray
