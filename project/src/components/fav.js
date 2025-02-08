import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, MenuItem, Select } from '@mui/material';
import "../components/project.css";
import {TextField} from"@mui/material"
const Fav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favProducts, setFavProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
   

 
  useEffect(() => {
    const savedFavProducts = JSON.parse(localStorage.getItem('favProducts')) || [];
    setFavProducts(savedFavProducts);
  }, []);

 
  const removeFromFav = (productIndex) => {
    const updatedFavProducts = favProducts.filter((_, index) => index !== productIndex);
    setFavProducts(updatedFavProducts);
    localStorage.setItem('favProducts', JSON.stringify(updatedFavProducts));
  };


  const clearFavorites = () => {
    setFavProducts([]);
    localStorage.removeItem('favProducts');
  };


 

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

  
      <div className="fav-controls">
        <Button 
       variant="outlined" 
       style={{ backgroundColor: "#023C59", color: "white" }} 
       onClick={clearFavorites}>
          Delete all items 
        </Button>
     
        <br></br>
        <br></br>
      </div>

     
      <div className="container">
        <Grid container spacing={4}>
          {favProducts.length === 0 ? (
            <Typography variant="h6" style={{ textAlign: 'center', width: '100%' }}>
             There are no products in your favorites
            </Typography>
          ) : (
            favProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={`Product ${index + 1}`}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.price}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {product.rating}
                    </Typography>
                    <Button 
                  variant="outlined" 
                  style={{ backgroundColor: "#023C59", color: "white" }} 
                  fullWidth
                      onClick={() => removeFromFav(index)}
                    >
                      delete
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Fav;
