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
import { lightTheme, darkTheme } from './components/Styles/Theme';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Loader } from './components/Loader';
import { Teste } from './pages/Teste';
import { Termos } from './pages/Termos';

export const UserContext = React.createContext({});

function App() {
  const [theme, setTheme] = useState('light');
  const [token, setToken] = useState('');
  const [tipo, setTipo] = useState('');
  const [nome, setNome] = useState('');


  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  function themeToggler() {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  useEffect(() => {
    localStorage.getItem('token') && setToken(localStorage.getItem('token'));
    localStorage.getItem('tipo') && setTipo(localStorage.getItem('tipo'));
    localStorage.getItem('nome') && setNome(localStorage.getItem('nome'));
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <UserContext.Provider value={{ token, setToken, tipo, setTipo, nome, setNome, theme }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Index setMode={setMode} />} />
            <Route exact path="/index" element={<Index />} />
            <Route exact path="/cad-mentor" element={<CadastroMentor themeToggler={themeToggler} />} />
            <Route exact path="/cad-mentorado" element={<CadastroMentorado themeToggler={themeToggler} />} />
            <Route exact path="/home" element={<Home themeToggler={themeToggler} />} />
            <Route exact path="/senha-log" element={<SenhaLog themeToggler={themeToggler} />} />
            <Route exact path="/senha-no-log" element={<SenhaNoLog themeToggler={themeToggler} />} />
            <Route exact path="/sobre" element={<Sobre themeToggler={themeToggler} />} />
            <Route exact path="/edit" element={<EditCad themeToggler={themeToggler} />} />
            <Route exact path="/*" element={<NotFound404  />} />
            <Route exact path="/loader" element={<Loader themeToggler={themeToggler} />} />
            <Route exact path="/404" element={<NotFound404 />} />
            <Route exact path="/teste" element={<Teste />} />
            <Route exact path="/termos" element={<Termos />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
