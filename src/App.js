import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { CadastroMentor } from './pages/CadastroMentor';
import { CadastroMentorado } from './pages/CadastroMentorado.js';
import { Mentor } from './pages/Mentor.js';
import { Mentorado } from './pages/Mentorado.js';
import { SenhaLog } from './pages/SenhaLog.js';
import { SenhaNoLog } from './pages/SenhaNoLog.js';
import { SenhaSeg } from './pages/SenhaSeg.js';
import { Sobre } from './pages/Sobre.js';
import { NotFound404 } from './pages/NotFound404';
import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';

export const UserContext = React.createContext({});

function App() {

  const [token, setToken] = useState('');
  const [rota, setRota] = useState('');
  useEffect(()=>{
     if(localStorage.getItem('token')||localStorage.getItem('rota')){
      setToken(localStorage.getItem('token'));
      setRota(localStorage.getItem('rota'))
     }
  },[]);

  return (
    <UserContext.Provider value={{ token, setToken,rota,setRota }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/index.html" element={<Index />} />
          <Route exact path="/cad-mentor" element={<CadastroMentor />} />
          <Route exact path="/cad-mentorado" element={<CadastroMentorado />} />
          <Route exact path="/mentorado" element={<Mentorado />} />
          <Route exact path="/mentor" element={<Mentor />} />
          <Route exact path="/senha-log" element={<SenhaLog />} />
          <Route exact path="/senha-no-log" element={<SenhaNoLog />} />
          <Route exact path="/senha-seg" element={<SenhaSeg />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
