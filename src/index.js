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



// ✅ Google Analytics Setup
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", "G-3QM8WWGMZ6");

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-3QM8WWGMZ6";
  document.head.appendChild(script);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


reportWebVitals();
