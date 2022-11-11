import { Box,Typography,Grid } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { images } from './images';
const Workspace = ({point,title,subtitle,img ,bottomText}) => {
    const points=[...point]
  return (
    <Box sx={{pt:'30px', display:'flex',justifyContent:'center',textAlign:'center', alignItems:"center",flexDirection:'column'}}>
        <Typography sx={{fontSize:{sm:'40px',xs:'40px'},mb:'80px',backgroundClip : 'text' ,textFillColor: 'transparent',webkitBackgroundClip: "text",WebkitTextFillColor: "transparent",backgroundImage:'linear-gradient(180deg, #E87D00 0%, #E22201 100%)', fontWeight:'800'}}>
        {title}
        </Typography>
        <Grid container >
            <Grid item sm={12} md={6} > 
                <Box component='img'
                alt='think'
                sx={{width:{xs:"300px",sm:"390px"}}}
                src={img}
                    
                />
            </Grid>
            <Grid item sm={12} md={6}  sx={{display:'flex',justifyContent:'center',textAlign:'center', alignItems:"center",flexDirection:'column'}}>
            <Box  >
                <Typography sx={{fontSize:{xs:"18px",sm:"36px"},mb:'30px', mt:{xs:"40px",md:"0px"} ,color:"#14A06F" ,fontWeight:'800', textAlign:"left"}}> {subtitle}</Typography>
                {points.map((i)=>(
                    <Box key={i} sx={{display:'flex',flexDirection:'row' ,alignItems:'center',mb:'20px'}} component='div'><CheckCircleIcon sx={{width:{xs:"30px",sm:"30px"},color:"#14A06F" ,mr:'14px' }}/><Typography sx={{fontSize:{xs:"18px",sm:"26px"},fontWeight:'400', color:'#7E7E7E', textAlign:'left' }} alignItems='center'>{i}</Typography></Box>
                ))}
               
                
                
            </Box>
            
                
            </Grid>

        </Grid>
        <Typography sx={{fontSize:"26px",mb:'40px', color:"#7E7E7E" ,fontWeight:'600' ,mt:"40px"}}>{bottomText}</Typography>
    </Box>
  )
}

export default Workspace