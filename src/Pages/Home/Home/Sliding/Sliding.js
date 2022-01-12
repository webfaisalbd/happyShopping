import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sliding = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div  style={{marginBottom:"50px"}}>
        
        <Slider {...settings}>
          <div>
          <img style={{ width: "600px",   height: "400px"}} src="https://i.ibb.co/jhx09nF/italian.png" />   
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/mDJzyFk/mexican.png" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/fGCtKj2/thai.png" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/ThD4T9B/persian.png" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/tL4G9kR/african.png" />
          </div>
        
          
        </Slider>
      </div>
  );
};

export default Sliding;