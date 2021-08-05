import './index.css';
import { CartProvider } from './context/cartContext';
import { Routes } from './routes';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <CartProvider>
    <Routes />
  </CartProvider>,
  document.getElementById('root')
);
