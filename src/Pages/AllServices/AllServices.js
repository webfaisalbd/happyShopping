import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Footer from '../Home/Home/Footer/Footer';
import Typed from 'react-typed';


const AllServices = () => {
    const [services, setServices] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setDisplayProducts(data.services);
            });
    }, [])


    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = services.filter(service => service.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        // console.log(matchedProducts.length);
        
    }



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <div className='searchContainer'>
                    <input type="text" onChange={handleSearch} placeholder='Search Product' />
                </div>
          <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , m: 3 }}>
          <Typed
                    strings={['Happy All Products ']}
                    typeSpeed={150}
                />
                <br/> 
                        
                    </Typography>
      <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            displayProducts.map(service =>  <Grid item xs={4} sm={4} md={4} >
                <AllService key={service._id}
                        service={service}></AllService>
          </Grid>
             )
        }
      
    </Grid>
      </Container>
      <Footer></Footer>
    </Box>
        </>
    );
};

export default AllServices;