// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home';
import 'remixicon/fonts/remixicon.css'

import App from './App';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
