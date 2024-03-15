import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'swiper/modules';
import './assets/boxicons-2.0.7/css/boxicons.min.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);