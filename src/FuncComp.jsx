import React, { Fragment, useState } from 'react'

const FuncComp = () => {
    console.log('funcomp');
    // let num =52
    const [num,setNum]=useState({})
    const incrementHandle =()=>{
        num.name ='oscar'
        setNum({...num})
    }
    console.log(num);

    return (
        <>
        {console.log('render')}
           <h1 className='head pera'>{num.name}</h1>
           {/* <button onClick={()=>incrementHandle('oscar')}>Increment</button> */}
           <button onClick={incrementHandle}>Increment</button>
           <button onClick={()=>setNum(num-1)}>Decrement</button>
        </>
    )
}

export default FuncComp
