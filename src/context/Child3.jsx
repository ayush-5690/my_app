import React,{useContext} from 'react'
import { NameContext } from '../App'

function Child3() {
    const value = useContext(NameContext)
    console.log(value);
  return (
    <div>
      <h3>child3 {value.name}</h3>
    </div>
  )
}

export default Child3
