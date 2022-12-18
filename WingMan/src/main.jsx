import React from 'react'
import App from './App'
import './index.css'

// MGA KAILANGAN SA ROUTER DOM
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
