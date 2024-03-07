import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home';
import MobilePage from './pages/Mobile'; // Import the mobile page
import 'remixicon/fonts/remixicon.css'

import App from './App';

const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={isMobile ? <MobilePage /> : <HomePage />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);