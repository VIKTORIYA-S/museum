// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
import App from './App.jsx'


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./styles_scss/main.scss";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles_scss/main.scss";

// импортируете ваш router из файла, где он описан
// import { router } from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
