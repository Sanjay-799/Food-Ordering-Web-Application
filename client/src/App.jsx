import React from 'react';
import './App.css';
import NavbarPage from './components/Navbar/Navbar';
import RegisterPage from './pages/Register/Register';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminPage from './pages/AdminPanel/admin';
import AddItems from './pages/AddItem/addItem';
import DeleteItems from './pages/DeleteItems/deleteItems';
import UpdateItemPage from './pages/UpdateItem/UpdateItems';
import AllItemsPage from './pages/AllItems/AllItems';

function App() {
  const location = useLocation();

  const hideNavbar = ['/login', '/register'].some(path => location.pathname.startsWith(path)) ||
    location.pathname.startsWith('/admin');

  return (
    <>
      {!hideNavbar && <NavbarPage />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/admin" element={<AdminPage />}>
          <Route path="additems" element={<AddItems />} />
          <Route path="deleteitems" element={<DeleteItems/>} />
          <Route path="updateitems" element={<UpdateItemPage/>} />
          <Route path="allitems" element={<AllItemsPage/>} />
        </Route>

        <Route path="*" element={<h1 style={{ color: 'white' }}>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
