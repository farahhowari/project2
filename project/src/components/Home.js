import React,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import "../components/project.css";
import Products from "../components/dining";
import Fav from "../components/fav";
import {TextField} from"@mui/material"
const Home = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const inputfocus=useRef(null)

   const [data,setData]=useState([])
    useEffect(()=>{
       
        fetch('https://api.restful-api.dev/objects')
        .then((res)=> res.json()).then((data)=> setData(data))
        console.log(data)
    },[])
    const handleClick= ()=>{
        inputfocus.current.focus()
    }
  
  
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
                      style={{ marginLeft: "20px",marginTop:"10px" ,backgroundColor: "white", borderRadius: "5px" }}
                    />
    
        </div>
      </nav>

     
      <div className="partTwo">
        <img src="/images/photo1.jpg" className="photo1" alt="Furniture" />
      </div>

    
      <div className="card">
        <h6 className="h6card">New Arrival</h6>
        <h3 className="h3card"><b>Discover Our</b></h3>
        <h3 className="h3card"><b>New Collection</b></h3>
        <p className="p1">We offer a wide range of comfortable furniture items of high quality.</p>
        <button className="button1"  > 
         
          Buy Now </button>
      </div>
<br></br>
<br></br>
<br></br>
      
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
      <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    
      
      <h3 className="inspi"><b>Inspiration Collection</b></h3>
      <div className="img">
        <img src="/images/photo4.jpg" className="photo" alt="Inspiration 1" />
        <img src="/images/photo5.jpg" className="photo" alt="Inspiration 2" />
        <img src="/images/photo3.jpg" className="photo" alt="Inspiration 3" />
      </div>
      <br></br>
<br></br>
<br></br>
      
      <div id="partfour">
        <div className="part1">
          <h4>Beautify your space</h4>
          <p>Transform your space into a place that reflects your taste and elegance. Let every angle express your personality in a unique style</p>
          <button className="button1">LEARN MORE</button>
        </div>
        <div>
          <img src="/images/photo6.png" className="girl" alt="Girl" />
        </div>
      </div>

      
      <div>
        <b><h3 id="browes">Browse the range</h3></b>
        <div className="count">
          <a href="#" className="classification"><img src="/images/photo7.jpg" alt="Item 1" /></a>
          <a href="#" className="classification"><img src="/images/photo9.jpg" alt="Item 2" /></a>
          <a href="#" className="classification"><img src="/images/photo8 (2).jpg" alt="Item 3" /></a>
        </div>
        <div className="define">
          <h5>Dining</h5>
          <h5>Living</h5>
          <h5>Bedroom</h5>
        </div>
      </div>

    
      <div>
        <h3 id="browes">How it works</h3>
        <div className="work">
          <img src="/images/photo10.jpg" className="partfive" alt="Purchase" />
          <img src="/images/photo11.jpg" className="partfive" alt="Ship from warehouse" />
          <img src="/images/photo12.jpg" className="partfive" alt="Style your room" />
        </div>
        <div className="definition">
          <h5>Purchase</h5>
          <h5>Ships from warehouse</h5>
          <h5> &nbsp; &nbsp; &nbsp;  Style your room</h5>
        </div>
      </div>

     
      <div className="partsix">
        <h4 className="join">Join Our Mailing List</h4>
        <p>Sign up to receive inspiration, product updates</p>
        <p className="p2">and special offers from our team</p>
        <div className="parteight">
          <input type="email" placeholder="example@gmail.com"  ref={inputfocus} className="email" />
          <button type="submit" className="submit" onClick={handleClick} >Submit</button>
        </div>
      </div>

     
      <div className="partseven">
        <div className="left">
          <h5 className="text">Beauty Care</h5>
          <div className="link">
            <a href="https://www.instagram.com/shahwanfurniture/profilecard/?igsh=YXVhMmZxN242NjRt" className="insta">
              https://www.instagram.com/shahwanfurniture/profilecard/?igsh=YXVhMmZxN242NjRt
            </a>
          </div>
          <h5 className="follow">Follow Us</h5>
        </div>
        <div className="right"></div>
        <div>
          <h5 id="shop">Instagram Shop</h5>
        </div>
        <img src="/images/photo13.jpg" className="partright" alt="Shop Image 1" />
        <img src="/images/photo14.jpg" className="partright" alt="Shop Image 2" />
        <img src="/images/photo15.jpg" className="partright" alt="Shop Image 3" />
        <img src="/images/photo16.jpg" className="partright" alt="Shop Image 4" />
      </div>
    </div>
  );
};

export default Home;
