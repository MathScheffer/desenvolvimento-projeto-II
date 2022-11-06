import React from 'react'
/* import useRotina from '../customHooks/useRotina';
import { useEffect, useState } from 'react'; */
import Login from './Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  )
  
}

export default App;
