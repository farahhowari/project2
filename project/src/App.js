import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // تأكد من أن هذا المسار صحيح
import About from "./components/aboutUs"; // تأكد من أن هذا المسار صحيح
import Product from "./components/dining"; // تأكد من أن هذا المسار صحيح
import Fav from "./components/fav"; // تأكد من أن هذا المسار صحيح
import "./components/project.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* تأكد أن المسار "/" يوجه إلى Home */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} /> {/* تم تعديل المسار هنا */}
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </Router>
  );
}

export default App;