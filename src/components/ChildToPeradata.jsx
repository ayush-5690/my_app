import React,{useState} from 'react'
import Child2 from './Child2'

function ChildToPeradata() {
    const[state,setState]=useState()
    const getdata=(value)=>{
        setState(value)
    }
  return (
    <div>
      <h1>ChildToPeradata:{state}
      </h1>
      <Child2 getdata={getdata}/>
    </div>
  )
}

export default ChildToPeradata
