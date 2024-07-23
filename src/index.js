import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetails from './components/productDetails';
import Basket from './components/basket';
import Checkout from './components/checkout';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Categories from './components/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='basket' element={<Basket />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='products/:productid' element={<ProductDetails />} />
        <Route path='categories/:categoryId' element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
