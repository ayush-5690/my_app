import React ,{useContext}from 'react'
import HOC from '../pages/HOC'
import { useNavigate } from 'react-router-dom'
import { NameContext } from '../App'

function Home() {
  const value = useContext(NameContext)
  const navigate=useNavigate()
  
  const logout=()=>{
    value.setIsLogin(false)
    navigate("/")
    localStorage.setItem("login",false)
}
  return (
    <div>
      <h1>Home</h1>
      <button className='btn btn-primary' onClick={logout}>Logout</button>
    </div>
  )
}

export default HOC(Home)
