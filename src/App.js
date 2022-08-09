import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { CadastroMentor } from './pages/CadastroMentor';
import { CadastroMentorado } from './pages/CadastroMentorado.js';
import { SenhaLog } from './pages/SenhaLog.js';
import { SenhaNoLog } from './pages/SenhaNoLog.js';
import { Sobre } from './pages/Sobre.js';
import { NotFound404 } from './pages/NotFound404';
import { Home } from './pages/Home';
import { EditCad } from './pages/EditCad';
import { useEffect, useState } from 'react';
import React from 'react';

export const UserContext = React.createContext({});

function App() {

  const [token, setToken] = useState('');
  const [tipo, setTipo] = useState('');
  const [nome, setNome] = useState('');
  useEffect(() => {
    if (localStorage.getItem('token') || localStorage.getItem('tipo') || localStorage.getItem('nome')) {
      setToken(localStorage.getItem('token'));
      setTipo(localStorage.getItem('tipo'));
      setNome(localStorage.getItem('nome'));
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, setToken, tipo, setTipo, nome, setNome }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/index.html" element={<Index />} />
          <Route exact path="/cad-mentor" element={<CadastroMentor />} />
          <Route exact path="/cad-mentorado" element={<CadastroMentorado />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/senha-log" element={<SenhaLog />} />
          <Route exact path="/senha-no-log" element={<SenhaNoLog />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/edit" element={<EditCad />} />
          <Route exact path="/*" element={<NotFound404 />} />
          <Route exact path="/404" element={<NotFound404 />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
