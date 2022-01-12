import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Typed from 'react-typed';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [pageCount,setPageCount]= useState(0);
    const [page,setPage]= useState(0);
    const size=20;

    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setDisplayProducts(data.services);
                const count=data.count;
                const pageNumber=Math.ceil(count/size);
                setPageCount(pageNumber);
            });
    }, [page])

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
                    strings={['Happy Products']}
                    typeSpeed={150}
                />
                <br/>
                    </Typography>
      <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            displayProducts.map(service =>  <Grid item xs={4} sm={4} md={4} >
                <Service key={service.id}
                        service={service}></Service>
          </Grid>
             )
        }
        <div className="pagination">
                            {
                                [...Array(pageCount).keys()]
                                .map(number => <button
                                key={number}
                                className={ number === page ? 'selected': '' }
                                onClick={() => setPage(number)}
                                > {number+1} </button> )
                            }
                      </div>
      
    </Grid>
      </Container>
    </Box>
        </>
    );
};

export default Services;