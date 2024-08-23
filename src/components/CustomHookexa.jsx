import React from 'react'
import useData from './useData'

function CustomHookexa() {
    const data =useData(12)
    console.log(data);

  return (
    <div>
      data:{data[0]} <br />
      <button onClick={data[1]}>Click</button>
    </div>
  )
}

export default CustomHookexa
