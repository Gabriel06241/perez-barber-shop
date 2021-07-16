import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { CartProvider } from './context/cartContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
