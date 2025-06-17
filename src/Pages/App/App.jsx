//importaciones react
import React from 'react';
import { useState } from 'react'

//Rutas
import { useRoutes, BrowserRouter } from 'react-router-dom';

//pages
import Home from '../Home';


//contexto
import { LogisticoProvider } from '../../Context';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> }
  ])
  return routes
}

function App() {


  return (
    <LogisticoProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </LogisticoProvider>
  )
}

export default App
