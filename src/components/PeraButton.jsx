import React,{useState,useCallback} from 'react'
import Button from './Button'

function PeraButton() {
    const[number,setNumber]=useState(10)
    const[count,setCount]=useState(100)
    const changecount=useCallback(()=>{
        setCount(count+1)
    },[count])
    const changeNumber=useCallback(()=>{
        setNumber(number+1)
    },[number])
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>number:{number}</h1>
      <Button changevalue={changecount} value={"count"}/>
      <Button changevalue={changeNumber} value={"number"}/>
    </div>
  )
}

export default PeraButton
