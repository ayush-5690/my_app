import React from 'react'

function InlineStyle() {
    
    const perastyle={
        color:'green',
        fontSize:"20px",
        border:"1px solid red"
    }
  return (
    <div>
      <h1 style={{color:'red',backgroundColor:"blue"}}>inline style css</h1>
      <p style={perastyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor cumque, reprehenderit est laborum odit iusto vel magnam voluptatum? Veniam repudiandae odio quibusdam unde vitae quas enim accusamus libero qui!</p>
    </div>
  )
}

export default InlineStyle
