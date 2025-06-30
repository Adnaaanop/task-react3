import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate=useNavigate()
  return (
    <>
    <h1>Hello welcome to Home Page</h1>
    <button onClick={()=>navigate("/")}>LogOut</button>
    </>
    
  )
}

export default HomePage