import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTjhU3AHeEKHgId7rfLdP6VdrnrxIBwqI",
  authDomain: "entregafinalreact-cb335.firebaseapp.com",
  projectId: "entregafinalreact-cb335",
  storageBucket: "entregafinalreact-cb335.appspot.com",
  messagingSenderId: "1096117696450",
  appId: "1:1096117696450:web:ea2dd3c66a7e7b95ca485b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
   <App />
);
