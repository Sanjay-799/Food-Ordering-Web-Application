import React from 'react'
import './App.css'
import NavbarPage from './components/Navbar/Navbar'
import RegisterPage from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/Login'

function App() {
  return (
    <>
      <NavbarPage/>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/registration' element={<RegisterPage/>} />
        
      </Routes>
      
      
    </>
  )
}

export default App
