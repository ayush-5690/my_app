import React,{useState} from 'react'

function OnChangeEvent() {
    const[val,setVal]=useState('')
    const[obj,setObj]=useState({})
    const[aray,setAray]=useState([])
    const handleInput =(e)=>{
        setVal(e.target.value)
        obj.name=e.target.value
        setObj({...obj})
    }
    console.log(obj);
    const saveHandle =()=>{
        aray.push(obj)
        setAray([...aray])
        console.log(aray);
    }
  return (
    <div>
      <input type="text" onChange={handleInput}/>
      <h1>{val}</h1>
      <button onClick={saveHandle}>save</button>
      <table>
        <thead>
            <tr><td>name</td></tr>
        </thead>
        <tbody>
            {
                aray.map((x,i)=>{
                   return (
                        <tr key={i}>
                            <td>{x.name}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default OnChangeEvent
