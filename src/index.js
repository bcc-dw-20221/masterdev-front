import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Rotas from '../src/rotas/index'
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>
);


