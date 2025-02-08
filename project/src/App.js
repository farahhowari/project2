import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import About from "./components/aboutUs"; 
import Product from "./components/dining"; 
import Fav from "./components/fav"; 
import "./components/project.css";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} /> 
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </Router>
  );
}

export default App;