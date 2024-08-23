import React,{useEffect,useState} from 'react'

function UseEffectHook() {
    const [count,setCount]=useState(1)
    
    useEffect(()=>{
        console.log('mounting');

        return ()=>{
            console.log('unmount');
        }
        
    },[])

    useEffect(()=>{
        console.log('updating',count);
        
    },[count])

    
    console.log('outside useeffcet');
  return (
      <div>
        {console.log("render")}
      <h1>UseEffectHook:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffectHook
