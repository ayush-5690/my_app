import React ,{useState}from 'react'

function CondiionalRendering() {
    const [toggle,setToggle] = useState(true)
  return (
    <div>
        {
            toggle ?<h1>CondiionalRendering</h1>:null
        }
      
      {/* <button onClick={()=>setToggle(true)}>Show</button>
      <button onClick={()=>setToggle(false)}>Hide</button> */}
      <button onClick={()=>setToggle(!toggle)}>{toggle?"hide":"show"}</button>
    </div>
  )
}

export default CondiionalRendering
