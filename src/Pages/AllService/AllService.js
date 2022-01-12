import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia,Box, Typography, Tooltip } from '@mui/material';
import './AllService.css'

const AllService = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    
    return (
      <div  data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
   data-aos-duration="2000">
        <Card sx={{  boxShadow: 2 }}>
      <img style={{height:"250px"}} src={img} />
      <Box>
      <Typography className="ratingCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{  p:1 }}>
          Cost: {price} BDT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0,60)}..........
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/booking/${_id}`}  style={{textDecoration:"none"}}>
             <Tooltip  title="Click" placement="top">
             <Button variant="contained"  color="success" size="small">Order Now</Button>
             </Tooltip>
        </Link>
        
        
      </CardActions>
      </Typography>
      </Box>
    </Card>
      </div>
    );
};

export default AllService;