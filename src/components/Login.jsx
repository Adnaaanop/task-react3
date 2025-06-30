import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const navigate2=useNavigate()
    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
  return (

    <>
    <h1>Hello there!</h1>

    <form>
        <input type='text' placeholder='Enter Your Email' onChange={(e)=>setName(e.target.value)}></input>
        <br/>
        <input type='text' placeholder='Enter Your Password' onChange={(e)=>setPass(e.target.value)}></input>
        
    </form>



    <button onClick={()=>navigate("/home")}>Login</button>
    <button onClick={()=>navigate2("/register")}>Register</button>
    </>
    
  )
}

export default Login