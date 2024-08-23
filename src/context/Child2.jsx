import React,{useContext} from 'react'
import Child3 from "../context/Child3"
import { NameContext } from '../App'
function Child2(props) {
    const value = useContext(NameContext)
  return (
    <div>
      <h2>child2{value.name}</h2>
      <button onClick={()=>value.setName("career")}>Click</button>
      <Child3 name={props.name}/>
    </div>
  )
}

export default Child2
