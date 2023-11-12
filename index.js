import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App';
import reportWebVitals from './src/reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBUtb6NSmWt3yGL-ZvaFSepjzC7fN-KMEI",
  authDomain: "proyectofinalcoder-2c7b5.firebaseapp.com",
  projectId: "proyectofinalcoder-2c7b5",
  storageBucket: "proyectofinalcoder-2c7b5.appspot.com",
  messagingSenderId: "164510172218",
  appId: "1:164510172218:web:2eaf9fd148b25e0623a103",
  measurementId: "G-JDEWJXYHSN"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
