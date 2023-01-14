import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CursorContextProvider from './context/CursorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorContextProvider>
);
