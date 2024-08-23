import React,{useReducer} from 'react'
import { counterReducer } from './counterReducer'
import { crudReducer } from './crudReducer';

function ReducerComp() {
    const [state, dispatch] = useReducer(crudReducer, [])
    console.log(state);

    const incerementHandle=()=>{
        dispatch({type:"ADD",obj:{name:'oscar'}})
    }

    const decerementHandle=()=>{
        dispatch({type:"REMOVE",id:1})
    }

    const zeroHandle =()=>{
        dispatch({type:"REMOVE"})
    }

  return (
    <div>
      <h1>ReducerComp</h1>
      {/* <h2>Count:{state}</h2> */}
      <button onClick={incerementHandle}>ADD</button>
      <button onClick={decerementHandle}>Remove</button>
      <button onClick={zeroHandle}>Edit</button>
    </div>
  )
}

export default ReducerComp
