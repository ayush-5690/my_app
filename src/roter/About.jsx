import React from 'react'
import HOC from '../pages/HOC'
import { useParams } from 'react-router-dom'

function About() {
  const params = useParams()
  console.log(params);
  return (
    <div>
      <h1>About</h1>
      {params.id}
    </div>
  )
}

export default HOC(About) 
