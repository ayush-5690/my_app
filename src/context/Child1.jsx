import React from 'react'
import Child2 from "../context/Child2"

function Child1(props) {
  return (
    <div>
      <h1>child1 {props.name}</h1>
      <Child2 name={props.name}/>
    </div>
  )
}

export default Child1
