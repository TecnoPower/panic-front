import React from 'react';
import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom';
import './css/aux-bootstrap.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/aux-bootstrap.css'
import './css/scroll.css';
import 'bootstrap/dist/js/bootstrap.js'
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    {createPortal(<Footer />, document.getElementById('footer'))}
  </>
);
// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
