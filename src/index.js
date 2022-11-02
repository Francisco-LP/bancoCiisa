import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/login';
import Contactanos from './views/contactanos';
import Cliente from './views/hazteCliente';
import PortalUsuario from '../src/views/PortalUsuario/PortalUsuario.jsx'
import SignInPage from './views/RegisterPage';
import ForgetPasswordPage from './views/ForgetPasswordPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}>
      <Route index element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/contactanos' element={<Contactanos />}/>
      <Route path='/hazteCliente' element={<Cliente />}/>
      <Route path='/register' element={<SignInPage />}/>
      <Route path='/forget-password' element={<ForgetPasswordPage/>}/>
      </Route>
    </Routes>  


    <Routes>

      <Route path='/PortalUsuario' element={<PortalUsuario/>}>
        
      </Route>
      
    </Routes>
  </BrowserRouter>
);
