import {  Grid,  Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import './style.css'

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Features = ({data}) => {
    const myfeature=[...data]
    const items=myfeature.map((i)=>(
        <SwiperSlide key={`${i.name}`}>
            <Box sx={{ml:{xs:"60px",sm:"90px"}}}>
            
                        <Box sx={{textAlign: 'left',  alignItems: 'flex-start' }}>
                            <Box
                                component='img'
                                src={i.url}
                                alt={i.name}
                                sx={{width:'176px', height:"162px" ,pb:'20px'}}
                            />
                            
                                <Typography sx={{fontSize:"24px" ,fontWeight:'600', color:'#14A06F'}}>{i.name}</Typography>
                                <Typography component="div" sx={{width:'270px',fontSize:"16px" ,fontWeight:'400', color:'#6E6E6E'}}>{i.text}</Typography>
                            
                        </Box>
                  
            </Box>
            
        </SwiperSlide>))
  return (
    <Box sx={{pt:'30px', display:'flex',justifyContent:'center' ,textAlign:'center', flexDirection:'column'}}>
        <Typography sx={{fontSize:{sm:'40px',xs:'40px'},mb:'90px' ,backgroundClip : 'text' ,textFillColor: 'transparent',webkitBackgroundClip: "text",WebkitTextFillColor: "transparent",backgroundImage:'linear-gradient(180deg, #E87D00 0%, #E22201 100%)' , fontWeight:'800'}}>
        More Is Always Better
        </Typography>
        <Grid sx={{ml:'30px' ,display:{xs:'none' ,lg:"flex"}}} container  >
            {myfeature.map((i)=>
                
                 (
                    <Grid key={i.name} item  lg={4} md={6}>
                    
                        <Box sx={{textAlign: 'left',display:'felx', alignItems: 'flex-start' }}>
                            <Box
                                component='img'
                                src={i.url}
                                alt={i.name}
                                sx={{width:'176px', height:"162px" ,pb:'20px'}}
                            />
                            <Box sx={{Width:'200px' ,textAlign: 'left',mb:'80px'}}>
                                <Typography sx={{fontSize:"24px" ,fontWeight:'600', color:'#14A06F'}}>{i.name}</Typography>
                                <Typography component="div" sx={{fontSize:"16px",width:'270px' ,fontWeight:'600', color:'#6E6E6E'}}>{i.text}</Typography>
                            </Box>
                        </Box>
                   
                    </Grid>
                )
            )}
        </Grid>
        <Box sx={{display:{lg:"none"}}} >
            <Swiper 
            
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