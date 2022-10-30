import { Outlet } from 'react-router-dom';
import React, { Fragment } from 'react';
import Navbar from './components/Navbar';



function App() {
  return (
    <Fragment>
      <div>
      <Navbar/>
      <Outlet />
    </div>
    </Fragment>
    
  );
}

export default App;
