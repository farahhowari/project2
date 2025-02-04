import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../components/Home"; 
import About from "../components/aboutUs";
import"../components/project.css"
import Products from "../components/dining";



const Fav = () => {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="container-fluid">
            <Link to="/" className="fur">Furniture</Link>
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About Us</Link>
            <Link to="/Products" className="nav-link">Products</Link>
            <Link to="/Fav" className="nav-link">Fav</Link>
          </div>
        </nav>
      </div>
    );
  };
  export default Fav;