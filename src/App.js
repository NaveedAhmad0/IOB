import { Container } from "@mui/material";
import React from "react"
import './App.css';
// import Kyc from "./components/Kyc";
import Login from "./components/Login";
// import LoginForm from './components/LoginForm';
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/> 
    </div>
  );
}

export default App;
