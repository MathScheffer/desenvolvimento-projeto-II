import React from 'react'
/* import useRotina from '../customHooks/useRotina';
import { useEffect, useState } from 'react'; */
import Login from './Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EditarUsuario from './EditarUsuario';
import EditarRotina from '../components/editar-rotina/editarRotina';
import PopupEditarRotina from '../components/editar-rotina/popupEditarRotina';
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/editar/:id/*' element={<EditarUsuario/>}>
          <Route path='rotina/:id_rotina' element={<PopupEditarRotina/>}/>
        </Route> 

      </Routes>
    </BrowserRouter>
    
  )
  
}

export default App;
