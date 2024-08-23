import React, { useState } from 'react'
import ChildComp from './ChildComp'
import { BiAccessibility } from "react-icons/bi";
// import DropDown from './DropDown';
// import NavbarComp from '../NavbarComp';

function PeraComp(props) {
    const[num,setNum]=useState(10)
    console.log(props.aray);
  return (
    <div >
        {/* <NavbarComp/> */}
      <h1>pera component{num}</h1>
      <ChildComp number={num} setNumber={setNum}/>
      <h2>{props.aray[0]}</h2>
      <BiAccessibility size={50} color='red' width={100}/>
        {/* <DropDown/> */}
    </div>
  )
}

export default PeraComp
