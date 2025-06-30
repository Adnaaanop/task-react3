import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate=useNavigate()
  return (

    <>
        
        <h1>Logged in</h1>
        <button onClick={()=>navigate("/")}>Go back to Login Page</button>
    </>
    
  )
}

export default Register