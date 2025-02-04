import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import"../components/project.css"
import Products from "../components/dining";
import Fav from"../components/fav"

//import  photo1 from"/images/photo1.jpg"

    const Home = () => {
        return (
          <div>
            {/* Navbar */}
            <nav className="navbar">
              <div className="container-fluid">
               <Link to="/" className="fur">Furniture </Link>
              <Link to="/Home" className="nav-link"> Home</Link>
              <Link to ="/About"className="nav-link"> aboutUs</Link>
              <Link to="/product" className="nav-link"> Products</Link>
              <Link to="/fav" className="nav-link"> fav</Link>
              </div>
            </nav>
            <br></br>
      
            {/* Part Two */}
            <div className="partTwo">
              <img src="/images/photo1.jpg" className="photo1" alt="Furniture" />
            </div>
      
            {/* Card Section */}
            <div className="card">
              <h6 className="h6card">New Arrival</h6>
              <h3 className="h3card"><b>Discover Our</b></h3>
              <h3 className="h3card"><b>New Collection</b></h3>
              <p className="p1">We offer a wide range of comfortable furniture items of high quality.</p>
              <a href="#"><button className="button1">Buy Now</button></a>
            </div>
      <br></br>
            {/* Features Section */}
            <div className="partThree">
              <div className="item1">
                <img src="/images/image.png" className="images" alt="Free Delivery" />
                <p className="free">Free Delivery</p>
              </div>
              <div className="item2">
                <img src="/images/Screenshot 2024-12-12 234637.png" className="images" alt="Support 24/7" />
                <p className="free">Support 24/7</p>
              </div>
              <div className="item3">
                <img src="/images/Screenshot 2024-12-12 234744.png" className="images" alt="100% Authentic" />
                <p className="free">100% Authentic</p>
              </div>
            </div>
      
            {/* Inspiration Collection */}
            <h3 className="inspi"><b>Inspiration Collection</b></h3>
            <div className="img">
              <img src="/images/photo4.jpg" className="photo" alt="Inspiration 1" />
              <img src="/images/photo5.jpg" className="photo" alt="Inspiration 2" />
              <img src="/images/photo3.jpg" className="photo" alt="Inspiration 3" />
            </div>
      
            {/* Beautify your space */}
            <div id="partfour">
              <div className="part1">
                <h4>Beautify your space</h4>
                <p>Transform your space into a place that reflects your taste and elegance.</p>
                <button className="button1">LEARN MORE</button>
              </div>
              <div className="part2">
                <img src="/images/photo6.png" className="girl" alt="Decor" />
              </div>
            </div>
      
            {/* Browse the range */}
            <h3 id="browes"><b>Browse the range</b></h3>
            <div className="count">
              <a href="#" className="classification"><img src="/images/photo7.jpg" alt="Dining" /></a>
              <a href="#" className="classification"><img src="/images/photo9.jpg" alt="Living" /></a>
              <a href="#" className="classification"><img src="/images/photo8 (2).jpg" alt="Bedroom" /></a>
            </div>
      
            {/* How it works */}
            <h3 id="browes"><b>How it works</b></h3>
            <div className="work">
              <img src="/images/photo10.jpg" className="partfive" alt="Purchase" />
              <img src="/images/photo11.jpg" className="partfive" alt="Shipping" />
              <img src="/images/photo12.jpg" className="partfive" alt="Style your room" />
            </div>
      
            {/* Join Our Mailing List */}
            <div className="partsix">
              <h4>Join Our Mailing List</h4>
              <p>Sign up to receive inspiration, product updates, and special offers.</p>
              <div className="parteight">
                <input type="email" placeholder="example@gmail.com" className="email" />
                <button type="submit" className="submit">Submit</button>
              </div>
            </div>
      
            {/* Instagram Shop */}
            <div className="partseven">
              <div className="left">
                <h5 className="text">Beauty care</h5>
                <a href="https://www.instagram.com/shahwanfurniture" className="insta">Instagram</a>
                <h5 className="follow">Follow Us</h5>
              </div>
              <div className="right">
                <h5 id="shop">Instagram Shop</h5>
                <img src="/images/photo13.jpg" className="partright" alt="Shop 1" />
                <img src="/images/photo14.jpg" className="partright" alt="Shop 2" />
                <img src="/images/photo15.jpg" className="partright" alt="Shop 3" />
                <img src="/images/photo16.jpg" className="partright" alt="Shop 4" />
              </div>
            </div>
          </div>
        );
}
export default Home;