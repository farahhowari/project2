import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, TextField } from '@mui/material';
import "../components/project.css";

const Product = () => {
  const [favProducts, setFavProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { image: "/images/pho18.jpg", price: "200JOD",  },
    { image: "/images/photo19.jpg", price: "150JOD",  },
    { image: "/images/photo20.jpg", price: "185JOD",},
    { image: "/images/photo21.jpg", price: "300JOD", },
    { image: "/images/photo22.jpg", price: "190JOD",  },
    { image: "/images/photo23.jpg", price: "275JOD",  },
    { image: "/images/photo24.jpg", price: "550JOD", },
    { image: "/images/photo25.jpg", price: "490JOD", },
    { image: "/images/photo26.jpg", price: "585JOD",  },
    { image: "/images/photo27.jpg", price: "700JOD",  },
    { image: "/images/photo28.jpg", price: "680JOD",  },
    { image: "/images/photo29.jpg", price: "810JOD",  },
  ];

  useEffect(() => {
    const savedFavProducts = JSON.parse(localStorage.getItem('favProducts')) || [];
    setFavProducts(savedFavProducts);
  }, []);

  const addToFav = (product) => {
    if (favProducts.some((fav) => fav.image === product.image)) {
      alert("This product is already in the fav list ");
      return;
    }
    const updatedFavProducts = [...favProducts, product];
    setFavProducts(updatedFavProducts);
    localStorage.setItem('favProducts', JSON.stringify(updatedFavProducts));
  };

  const filteredProducts = products.filter(product => 
    product.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            style={{ marginLeft: "20px",marginTop:"10px", backgroundColor: "white", borderRadius: "5px",borderColor:"#023C59" }}
          />
        </div>
      </nav>
      
      <div className="container">
        <Grid container spacing={4}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia component="img" height="200" image={product.image} alt={`Product ${index + 1}`} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{product.price}</Typography>
                  <Typography variant="h6" gutterBottom>{product.rating}</Typography>
                  <Button 
                    variant="outlined" 
                    style={{ backgroundColor: "#023C59", color: "white" }} 
                    fullWidth
                    onClick={() => addToFav(product)}
                  >
                    Add to Fav
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Product;
