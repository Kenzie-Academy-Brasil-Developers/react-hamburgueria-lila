import React, { useState } from 'react';
import { HomePage } from "./pages/HomePage";
import { CartModal } from "./components/CartModal";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <HomePage />

      <ToastContainer position="bottom-right" autoClose={2 * 1000} /> 
    </>
  )
}

export default App
