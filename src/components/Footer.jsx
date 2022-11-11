import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { images } from './images';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    
  return (
    <Grid container sx={{backgroundColor:"#252B2F" ,p:'12px', display:"flex",mt:'20px' , alignItems:'center' ,mb:'40px'}}>
        <Grid sx={{alignItems:'flex-start' ,mt:'20px' }} item xs={12} sm={6}>
            <Box
            component='img'
            src={images.logo}
            alt='mercados'
            height='100px'
             />
         </Grid>
        
        <Grid sx={{color:'white',mt:'20px' }} item xs={12} sm={6}>
            
                    <Typography sx={{fontSize:'16px' ,display:'flex',fontWeight:"500" ,mb:'20px'}} justifyContent='center' alignItems='center' ><PlaceIcon sx={{height:'26px' ,mr:'16px'}}/>
                    Shop no 15, Golden City Center, Beside Prozone Mall, Aurangabad - 431003, Maharashtra, India
                    </Typography>
                    <Typography sx={{fontSize:'16px' ,display:'flex',fontWeight:"500" ,mb:'20px'}} ><PhoneIcon sx={{height:'26px' ,mr:'16px'}}/>
                    Phone No: -8949452373
                    </Typography>
                    <Typography sx={{fontSize:'16px' ,display:'flex',fontWeight:"500" ,mb:'20px'}} ><EmailIcon sx={{height:'26px' ,mr:'16px'}}/>
                    contact@mercados.in
                    </Typography>
            
        </Grid>
        <Grid sx={{fontSize:'32px' ,display:'flex',fontWeight:"500" ,mb:'20px',mt:'20px' ,justifyContent:'center', color:"white" }} item xs={12}>
            <Typography>
            Copyright @ 2021. Mercados Pvt. Ltd . All rights reserved.

                        </Typography>
        </Grid>
    </Grid>
  )
}

export default Footer