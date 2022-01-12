import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import Typed from 'react-typed';
import './CookingArt.css';
import { Box } from '@mui/system';
const CookingArt = () => {
    return (
        <div style={{marginBottom:'40px',marginTop:'40px'}}>
            <Box sx={{ flexGrow: 1 }}>
          <Typography  variant="h4" component="div">
             <Typed
                    strings={['Cooking Art']}
                    typeSpeed={250}
                />
          </Typography>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16} sm={8} md={8} lg={10}>
          <div>
          <div style={{marginTop:'40px',marginLeft:'80px'}}>
          <CardMedia
        component="img"
        height="350"
        image="https://media.istockphoto.com/photos/world-cuisine-picture-id163807674?k=20&m=163807674&s=612x612&w=0&h=kN3sr79lylQ3JJpK59wpKVUPkLF8nO5cX6EWF7ojJqQ="
        alt="Paella dish"
      />
          </div>
          </div>
        </Grid>
        <Grid item xs={16} sm={8} md={8} lg={6}>
        <div  data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
   data-aos-duration="2000" style={{marginTop:'40px',marginLeft:'10px'}}> 
        <CardMedia
        component="img"
        height="200"
        image="https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_9,y_0/v1554742661/shape/mentalfloss/558316-istock-875991936_primary.jpg?itok=tRcFzKav"
        alt="Paella dish"
      /> 
        <div  data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
   data-aos-duration="2000"  style={{marginTop:'20px',marginLeft:'20px'}}>
        <Typography paragraph>
        Cooking is both an art and a science. The technical parts of cooking involve chemistry, mathematics and physics. The art of cooking involves pleasing the eye and the palate.
          </Typography>
        </div>
        
</div>
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default CookingArt;