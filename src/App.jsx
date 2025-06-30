import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Register from './components/Register'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/register' element={<Register />}></Route>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
