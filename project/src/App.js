import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home"; 
import About from "./components/aboutUs";
import Products from "./components/dining";
import Fav from"./components/fav"
import"./components/project.css"

function App() {
  return (
<>
<Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/aboutUs" element={<About/>} />
        <Route path="/product" element={<Products/>} />
        <Route path="/fav" element={<Fav/>} />
        
      </Routes>
    </Router>
   
</>
  )
}

export default App;
