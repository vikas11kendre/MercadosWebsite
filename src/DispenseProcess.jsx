
import { Box} from '@mui/material';
import React from 'react'
import './style.css'
import { images } from './images';
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const DispenseProcess = () => {

    const Process=[images.p1,images.p2,images.p3,images.p4]
   
    const items=Process.map((i)=>(
        <SwiperSlide key={`${i}`}>
            <Box sx={{pl:{lg:'12px',md:'42px' ,xs:'46px'}}}
        component='img' 
        src={i}
        /></SwiperSlide>))

    return (
        <Box >
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
  )
}

export default DispenseProcess;