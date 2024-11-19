import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThirdwebProvider } from "thirdweb/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </BrowserRouter>
);


