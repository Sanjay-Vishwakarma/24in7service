import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Required for styling
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


reportWebVitals();
