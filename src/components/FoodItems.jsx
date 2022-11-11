import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import Marquee from "react-fast-marquee";
import { images } from './images';

const foodItems = () => {
    const FoodList=[images.i1,images.i2,images.i3,images.i4,images.i5,images.i6,images.i7,images.i8,images.i9]
    const BrandList=[images.b1,images.b2,images.b3,images.b4,images.b5,images.b6,images.b7,images.b8]
  return (
    <Grid container justifyContent='center'>
    <Marquee
    pauseOnHover={true}
    pauseOnClick={true}
    gradient={false}
    speed={20}
    loop = {0}sss
    >
        {FoodList.map((i)=><Box 
            key={`${i}`}
            sx={{mr:'60px' ,maxHeight:'100px' }}
            component='img'
            src={i}
        />)}
    </Marquee>
    <Typography sx={{fontSize:{sm:'40px',xs:'40px'},mb:'40px',mt:"80px" ,color:"#14AF78" , fontWeight:'800'}}>
    Partner Brands
        </Typography>
    <Marquee
    pauseOnHover={true}
    pauseOnClick={true}
    gradient={false}
    direction='right'
    speed={20}
    >
        {BrandList.map((i)=><Box
            key={`${i}`}
            sx={{mr:'40px',filter: 'grayscale(100%)'}}
            component='img'
            src={i}
        />)}
    </Marquee>
    </Grid>                        
  )
}

export default foodItems