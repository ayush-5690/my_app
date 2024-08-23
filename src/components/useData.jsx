import {useState} from 'react'
function useData(value) {
    console.log(value);
    const[state,setState]=useState(value)
    const changeValue=()=>{
        setState(state+1)
    }
  return [state,changeValue]
}

export default useData
