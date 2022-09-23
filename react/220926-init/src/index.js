import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//     string              number        Boolean
// {}  object Object       NaN             true

// []    ''                  0             true

// ''    ''                0               false