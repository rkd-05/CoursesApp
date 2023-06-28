import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// toast ko use karne ke liye toastContainer ko import karana padega
import { ToastContainer } from "react-toastify";
// importing css file of toast
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <ToastContainer/>
  </div>


);
