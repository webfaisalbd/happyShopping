import { Typography } from '@mui/material';
import React from 'react';
import Typed from 'react-typed';


const ChatChef = () => {
    return (
        <div  style={{}}>
            <div style={{backgroundColor:'skyblue',height:'200px',width:'100%'}}>
            <div  style={{padding:'50px'}}>
                
        <Typography paragraph>

        <Typography  variant="h6" component="div">
             <Typed
                    strings={["DON'T KNOW WHICH CHEF YOU NEED"]}
                    typeSpeed={250}
                />
          </Typography>

     
        
        <br />
        Schedule a free 15-minute discussion and we find the perfect chef for your program.
          </Typography>
          <div style={{backgroundColor:'#FFE4B5',width:'90px',padding:'3px',marginLeft:'45%'}}>
              <a style={{textDecoration:'none'}} target="_blank" href="https://facebook.com/faisalDotMe">Let's Chat</a>
          </div>
            </div>
            </div>

        </div>
    );
};

export default ChatChef;