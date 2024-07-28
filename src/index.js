import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartContextProvider from './contexts/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
reportWebVitals();
