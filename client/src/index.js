import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import { AuthProvider, } from './providers/AuthProvider'
import { initMiddleware, } from 'devise-axios'
initMiddleware();
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
  ,
  document.getElementById('root')
);
