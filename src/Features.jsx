import {  Grid, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { images } from './images'
import './style.css'

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Features = () => {
    const feature =[
        
        {name:'Automatic Refund ',url:images.f1 ,text:'Wide range of customizable options according to your business needs.'},
        {name:'Just Plug & Play ',url:images.f2 ,text:'No Installation Required No complicated process Easy To Use 100% Approachable Hassle Free Buying'},
        {name:'Branding & Designing ',url:images.f3 ,text:'Comes with attractive vinly to make your place little more happning'},
        {name:'On- Site Maintenance ',url:images.f4 ,text:'All sevices and repair can be done on site Quick servise support'},
        {name:'Multiple Payment Options ',url:images.f5 ,text:'Never miss a sale with inbuilt cashless payment methods. Paytm, UPI (PhonePe, Google Pay)'},
        {name:'security  Updates',url:images.f6 ,text:'Powered by Vendserve Smart Vend 2.0 Simple interface with regular updated'},
        
    ]
    const items=feature.map((i)=>(
        <SwiperSlide key={`${i.name}`}>
            <Box sx={{ml:'90px'}}>
            <Tooltip  enterTouchDelay={0} title={ <Typography  variant="h1" sx={{fontSize:"16px" ,fontWeight:'600',color:'white'}}>{i.text}</Typography>}>
                        <Box sx={{textAlign: 'left',  alignItems: 'flex-start' }}>
                            <Box
                                component='img'
                                src={i.url}
                                alt={i.name}
                                sx={{width:'176px', height:"162px" ,pb:'20px'}}
                            />
                            
                                <Typography sx={{fontSize:"26px" ,fontWeight:'600', color:'#14A06F'}}>{i.name}</Typography>
                                {/* <Typography component="div" variant="h1" sx={{fontSize:"16px" ,fontWeight:'400', color:'#6E6E6E'}}>{i.text}</Typography> */}
                            
                        </Box>
                    </Tooltip>
            </Box>
            
        </SwiperSlide>))
  return (
    <Box sx={{pt:'30px', display:'flex',justifyContent:'center' ,textAlign:'center', flexDirection:'column'}}>
        <Typography sx={{fontSize:{sm:'40px',xs:'40px'},mb:'60px' ,backgroundClip : 'text' ,textFillColor: 'transparent',webkitBackgroundClip: "text",WebkitTextFillColor: "transparent",backgroundImage:'linear-gradient(180deg, #E87D00 0%, #E22201 100%)' , fontWeight:'800'}}>
        More Is Always Better
        </Typography>
        <Grid sx={{ml:'80px' ,display:{xs:'none' ,lg:"flex"}}} container  >
            {feature.map((i)=>
                
                 (
                    <Grid key={i.name} item  lg={4} md={6}>
                    <Tooltip  enterTouchDelay={0} title={ <Typography variant="h1" sx={{fontSize:"16px" ,fontWeight:'600',color:'white'}}>{i.text}</Typography>}>
                        <Box sx={{textAlign: 'left',display:'felx', alignItems: 'flex-start' }}>
                            <Box
                                component='img'
                                src={i.url}
                                alt={i.name}
                                sx={{width:'176px', height:"162px" ,pb:'20px'}}
                            />
                            <Box sx={{Width:'200px' ,textAlign: 'left',mb:'80px'}}>
                                <Typography sx={{fontSize:"26px" ,fontWeight:'600', color:'#14A06F'}}>{i.name}</Typography>
                                {/* <Typography component="div" variant="h1" sx={{fontSize:"16px" ,fontWeight:'400', color:'#6E6E6E'}}>{i.text}</Typography> */}
                            </Box>
                        </Box>
                    </Tooltip>
                    </Grid>
                )
            )}
        </Grid>
        <Box sx={{display:{lg:"none"}}} >
            <Swiper 
            // install Swiper modules
            breakpoints={{
            0: {
            
                slidesPerView: 1,
            },
            600: {
            
                slidesPerView: 2,
            },
            900: {
                
                slidesPerView: 3,
            },
            1200: {
            
                slidesPerView: 4,
            },
            }}
            modules={[Navigation, Pagination]}
            
            slidesPerView= {1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            
        >
        {items}
        ...
            </Swiper>
        </Box>
    </Box>
  )
}

export default Features