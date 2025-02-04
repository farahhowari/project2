import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../components/Home"; 
import"../components/project.css"
import Fav from"../components/fav"



  
  function Products() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="fur">Furniture </Link>
                    <Link to="/Home" className="nav-link"> Home</Link>
                    <Link to="/About" className="nav-link"> aboutUs</Link>
                    <Link to="/product" className="nav-link"> Products</Link>
                    <Link to="/fav" className="nav-link"> fav</Link>
                </div>
            </nav>

            {/* Product Sections */}
            {Products.map((product, index) => (
                <div key={index}>
                    <div className="cardGroup">
                        {product.images.map((image, idx) => (
                            <img key={idx} src={`/images/${image}`} className="cardphoto" alt={`Product ${idx}`} />
                        ))}
                    </div>
                    <div className="container">
                        <div className="row">
                            {product.prices.map((price, idx) => (
                                <div key={idx} className="col-sm">
                                    <button className="button1">{price} JOD</button>
                                    <h4>⭐⭐⭐⭐⭐</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
            ))}
        </div>
    );
}
  
  export default Products;
