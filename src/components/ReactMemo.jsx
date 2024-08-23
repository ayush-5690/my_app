import React,{useState} from 'react'
import MemoChild from './MemoChild'

function ReactMemo() {
    const [count,setCount]=useState(1)
    const [data,setData]=useState(10)
  return (
    <div>
      <h1>ReactMemo {count}</h1>
      <h5>data {data}</h5>
      <MemoChild count={count}/>
      <button onClick={()=>setData(data+1)}>Data</button>
      <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
  )
}

export default ReactMemo
