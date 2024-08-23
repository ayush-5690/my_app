import React,{useState,useMemo} from 'react'

function UseMemo() {
    const [count,setCount]=useState(1)
    const func =()=>{
        console.log("function called");
        return <h4>Function</h4>
    }
    const funcMemo=useMemo(()=>{
        console.log('use memo func');
        return <h5>memoFunc {count}</h5>
    },[count])
  return (
    <div>
      <h1>UseMemo</h1>
      {func()}
      {funcMemo}
      <h3>count {count}</h3>
      <button onClick={()=>setCount(20)}>Click</button>
    </div>
  )
}

export default UseMemo
