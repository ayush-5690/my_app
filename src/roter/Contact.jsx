import React from 'react'
import HOC from '../pages/HOC'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default HOC(Contact) 
