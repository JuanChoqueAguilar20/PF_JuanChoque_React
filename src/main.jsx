import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA42dUkv7DVKH958ZiPzBtOpAjiBzNsV0",
  authDomain: "ecommerce-156e1.firebaseapp.com",
  projectId: "ecommerce-156e1",
  storageBucket: "ecommerce-156e1.appspot.com",
  messagingSenderId: "70942623739",
  appId: "1:70942623739:web:87cb7bd2382719d3d06d5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
