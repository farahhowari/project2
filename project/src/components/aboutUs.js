import React ,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../components/Home"; 
import {TextField} from"@mui/material"
import"../components/project.css"
import Products from "../components/dining";
import Fav from"../components/fav"

const About = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
     
      <nav className="navbar">
        <div className="container-fluid">
            <Link to="/" className="fur">Furniture</Link>
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About Us</Link>
            <Link to="/product" className="nav-link">Products</Link>
            <Link to="/fav" className="nav-link">Fav</Link>
        <TextField 
          label="Search" 
         variant="outlined" 
           size="small" 
           onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ marginLeft: "20px",marginTop:"10px", backgroundColor: "white", borderRadius: "5px" }}
         />
        </div>

      </nav>

     
      <header>
        <p>We design spaces that reflect your personality</p>
      </header>

     
      <section>
        <h2 className="h2">Who are we?</h2>
        <p>
          Our store began with a great love for art and design, and we sought to provide furniture that combines high quality and good taste. We believe that every piece of furniture carries a special story that adds a touch of beauty to any space.
        </p>
        <p>
          We aim to be your first destination for designing homes with custom specifications that suit your needs.
        </p>

        <div className="image-container">
          <img src="/images/logo22.png" className="logo" alt="Company Logo" />
        </div>

        <h2 className="h2">Our vision</h2>
        <p>
          We are committed to providing innovative design solutions focused on comfort and beauty. We aspire to make every home a special place that reflects its owners.
        </p>
      </section>

      
      <footer>
        <p>جميع الحقوق محفوظة &copy; 2024 - Furniture Shop</p>
      </footer>
    </div>
  );
};

export default About;