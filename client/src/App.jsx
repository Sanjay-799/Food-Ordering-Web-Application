import React from 'react';
import './App.css';
import NavbarPage from './components/Navbar/Navbar';
import RegisterPage from './pages/Register/Register';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const hideNavbar = ['/login', '/register'];
  const showNavbar = hideNavbar.includes(location.pathname);
  return (

    <>
      {!showNavbar && <NavbarPage />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

      </Routes>


    </>
  )
}

export default App
