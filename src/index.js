import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/login';
import Contactanos from './views/contactanos';
import Cliente from './views/hazteCliente';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}>
      <Route index element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/contactanos' element={<Contactanos />}/>
      <Route path='/hazteCliente' element={<Cliente />}/>
      </Route>
    </Routes>  
  </BrowserRouter>
);
