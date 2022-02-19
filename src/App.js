
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ArriendosPage from './Arriendos/ArriendosPage';
import ArriendoCreate from './Arriendos/ArriendoCreate';
import ArriendoUpdate from './Arriendos/ArriendoUpdate';
import OficinasPage from './Oficinas/OficinasPage';
import OficinaCreate from './Oficinas/OficinaCreate';
import OficinaUpdate from './Oficinas/OficinasUpdate';
import PersonasPage from './Personas/PersonasPage';
import PersonaCreate from './Personas/PersonaCreate';
import PersonaUpdate from './Personas/PersonaUpdate';

import Navbar from "./components/Navbar";


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>        
      
        <Route path = "/arriendos" element = {<ArriendosPage />} />
        <Route path = "/arriendos/createarriendo" element = {<ArriendoCreate/>} /> 
        <Route path = "/updatearriendo/:arriendoId" element = {<ArriendoUpdate />} />


        <Route path="/oficinas" element={<OficinasPage />} />
        <Route path="/oficinas/createoficina" element={<OficinaCreate />} /> 
        <Route path="/updateoficina/:oficinaId" element={<OficinaUpdate />} />
        

        <Route path="/personas" element={<PersonasPage />} />
        <Route path="/personas/createpersona" element={<PersonaCreate />} /> 
        <Route path="/updatepersona/:personaId" element={<PersonaUpdate />} />
          
      
           
      </Routes>
    </BrowserRouter>
  );
}

export default App;

