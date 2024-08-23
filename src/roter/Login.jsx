import React,{useContext} from 'react'
import HOC from '../pages/HOC'
import { NameContext } from '../App'
import { useNavigate } from 'react-router-dom';

function Login() {
    const value = useContext(NameContext)
    console.log(value);
    
    const navigate=useNavigate()
    
    const login=()=>{
        value.setIsLogin(true)
        navigate("/")
        localStorage.setItem("login",true)
    }
    
  return (
    <div>
      <h1>Login</h1>
      <button className='btn btn-primary' onClick={login}>Login</button>
    </div>
  )
}

export default HOC(Login)
