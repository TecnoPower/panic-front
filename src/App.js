import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Index from './pages/Index';
import MentorCad from './pages/CadastroMentor';
import CadastroMentorado from './pages/CadastroMentorado.js';
import Mentor from './pages/Mentor.js';
import Mentorado from './pages/Mentorado.js';
import SenhaLog from './pages/SenhaLog.js';
import SenhaNoLog from './pages/SenhaNoLog.js';
import SenhaSeg from './pages/SenhaSeg.js';
import Sobre from './pages/Sobre.js';
//import { Routes } from './routes';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/index.html" element={<Index />} />
        <Route exact path="/cad-mentor" element={<MentorCad />} />
        <Route exact path="/cad-mentorado" element={<CadastroMentorado />} />
        <Route exact path="/mentorado" element={<Mentorado />} />
        <Route exact path="/mentor" element={<Mentor />} />
        <Route exact path="/senha-log" element={<SenhaLog />} />
        <Route exact path="/senha-no-log" element={<SenhaNoLog />} />
        <Route exact path="/senha-seg" element={<SenhaSeg />} />
        <Route exact path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
