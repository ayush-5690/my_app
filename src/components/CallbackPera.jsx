import React,{useState,useCallback} from 'react'
import ChildCallback from './ChildCallback'

function CallbackPera() {
    const[number,setNumber]=useState(10)
    const[count,setCount]=useState(100)
    const func=useCallback(()=>{
        // setNumber(number+1)
        return number
    },[number])
    console.log('pera');
  return (
    <div>
      <h1>CallbackPera</h1>
      <ChildCallback func={func}/>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setNumber(number+1)}>Number</button>
    </div>
  )
}

export default CallbackPera
