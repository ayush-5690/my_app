import React from 'react'
import HOC from './HOC'

function About(props) {
    console.log(props);
  return (
    <div>
       <h1>about {props.name}</h1>
    </div>
  )
}

export default HOC(About)
