import React from 'react'
import useArray from './useArray'

function ArrayObject() {
    const aray =useArray()
    console.log(aray.state);
  return (
    <div>
      <button onClick={()=>aray.func({name:"lkwdkw"})}>Click</button>
    </div>
  )
}

export default ArrayObject
